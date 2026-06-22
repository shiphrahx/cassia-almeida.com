export type RepoMeta = {
  name: string;
  createdAt: string | null;
  year: number | null;
  language: string | null;
  description: string | null;
};

function parseRepo(url: string): { owner: string; repo: string } | null {
  const match = url.match(/github\.com\/([^/]+)\/([^/?#]+)/);
  if (!match) return null;
  return { owner: match[1], repo: match[2].replace(/\.git$/, "") };
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
  if (!parsed) {
    return { name: fallbackName, createdAt: null, year: null, language: null, description: null };
  }

  try {
    const res = await fetch(`https://api.github.com/repos/${parsed.owner}/${parsed.repo}`, {
      cache: "force-cache",
      headers: { Accept: "application/vnd.github+json" },
    });
    if (!res.ok) throw new Error(`GitHub responded ${res.status}`);
    const data = await res.json();
    return {
      name: data.name ?? fallbackName,
      createdAt: data.created_at ?? null,
      year: data.created_at ? new Date(data.created_at).getFullYear() : null,
      language: data.language ?? null,
      description: data.description ?? null,
    };
  } catch {
    return { name: fallbackName, createdAt: null, year: null, language: null, description: null };
  }
}
