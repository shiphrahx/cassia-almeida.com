export type RepoMeta = {
  name: string;
  createdAt: string | null;
  year: number | null;
  language: string | null;
  description: string | null;
  /** Live site to link to: the repo's homepage, else its GitHub Pages URL, else null. */
  siteUrl: string | null;
};

function parseRepo(url: string): { owner: string; repo: string } | null {
  const match = url.match(/github\.com\/([^/]+)\/([^/?#]+)/);
  if (!match) return null;
  return { owner: match[1], repo: match[2].replace(/\.git$/, "") };
}

/** Constructs the GitHub Pages URL for a repo (user-site vs project-site). */
function buildPagesUrl(owner: string, repo: string): string {
  const lowerOwner = owner.toLowerCase();
  if (repo.toLowerCase() === `${lowerOwner}.github.io`) return `https://${lowerOwner}.github.io/`;
  return `https://${lowerOwner}.github.io/${repo}/`;
}

/**
 * Fetches repo metadata from the GitHub API. The result is cached indefinitely
 * (`force-cache`) so the projects page prerenders at build time and the creation
 * year is derived automatically. Falls back gracefully if the API is unreachable
 * so a network/rate-limit hiccup never breaks the build.
 */
export async function getRepoMeta(url: string): Promise<RepoMeta> {
  const parsed = parseRepo(url);
  const fallbackName = parsed?.repo ?? url;
  const empty: RepoMeta = {
    name: fallbackName,
    createdAt: null,
    year: null,
    language: null,
    description: null,
    siteUrl: null,
  };
  if (!parsed) return empty;

  try {
    const token = process.env.GITHUB_TOKEN;
    const res = await fetch(`https://api.github.com/repos/${parsed.owner}/${parsed.repo}`, {
      cache: "force-cache",
      headers: {
        Accept: "application/vnd.github+json",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
    });
    if (!res.ok) throw new Error(`GitHub responded ${res.status}`);
    const data = await res.json();
    const homepage = typeof data.homepage === "string" ? data.homepage.trim() : "";
    const siteUrl = homepage || (data.has_pages ? buildPagesUrl(parsed.owner, parsed.repo) : null);
    return {
      name: data.name ?? fallbackName,
      createdAt: data.created_at ?? null,
      year: data.created_at ? new Date(data.created_at).getFullYear() : null,
      language: data.language ?? null,
      description: data.description ?? null,
      siteUrl,
    };
  } catch {
    return empty;
  }
}
