import projects, { type Project } from "@/data/projects";
import { getRepoMeta } from "@/lib/github";

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
      <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.05-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.49.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.49 5.92.43.37.81 1.1.81 2.22 0 1.61-.01 2.9-.01 3.29 0 .32.22.7.83.58A12 12 0 0 0 24 12.5C24 5.87 18.63.5 12 .5z" />
    </svg>
  );
}

function ProjectRow({ p, showCaption }: { p: EnrichedProject; showCaption: boolean }) {
  return (
    <div className="project-row">
      <a
        className="project-row-main"
        href={p.siteUrl ?? p.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="list-item-title">{p.name}</div>
        {showCaption && p.caption && <div className="list-item-sub">{p.caption}</div>}
      </a>
      <div className="project-row-right">
        {p.language && <span className="project-tag">{p.language.toLowerCase()}</span>}
        <a
          className="project-repo"
          href={p.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${p.name} source on GitHub`}
        >
          <GitHubIcon />
        </a>
      </div>
    </div>
  );
}

type EnrichedProject = Project & {
  name: string;
  year: number | null;
  language: string | null;
  createdAt: string | null;
  caption: string | null;
  siteUrl: string | null;
};

const byCreatedDesc = (a: EnrichedProject, b: EnrichedProject) =>
  (b.createdAt ?? "").localeCompare(a.createdAt ?? "");

export default async function Projects() {
  const enriched: EnrichedProject[] = await Promise.all(
    projects.map(async (project) => {
      const meta = await getRepoMeta(project.url);
      return {
        ...project,
        name: meta.name,
        year: meta.year,
        language: meta.language,
        createdAt: meta.createdAt,
        caption: project.description ?? meta.description,
        siteUrl: meta.siteUrl,
      };
    })
  );

  const starred = enriched.filter((p) => p.category === "starred").sort(byCreatedDesc);
  const other = enriched.filter((p) => p.category === "other").sort(byCreatedDesc);
  const archived = enriched.filter((p) => p.category === "archived").sort(byCreatedDesc);

  return (
    <>
      <h1 className="page-title">Projects</h1>
      <p className="page-subtitle">
        Things I&apos;ve built on the side. Some still running, some archived. I&apos;m obsessed with{" "}
        <strong>building in public</strong>.
      </p>

      {starred.length > 0 && (
        <div className="section">
          <div className="section-header"><span className="section-title">Starred</span></div>
          <div className="card-grid">
            {starred.map((p) => (
              <div key={p.url} className="card">
                <a
                  className="card-name card-link"
                  href={p.siteUrl ?? p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {p.name}
                </a>
                {p.caption && <div className="card-desc">{p.caption}</div>}
                <div className="card-footer">
                  {p.language && <span className="card-tag">{p.language.toLowerCase()}</span>}
                  <a
                    className="card-repo"
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${p.name} source on GitHub`}
                  >
                    <GitHubIcon />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {other.length > 0 && (
        <div className="section">
          <div className="section-header"><span className="section-title">Other Projects</span></div>
          <div className="list">
            {other.map((p) => (
              <ProjectRow key={p.url} p={p} showCaption />
            ))}
          </div>
        </div>
      )}

      {archived.length > 0 && (
        <div className="section">
          <div className="section-header"><span className="section-title">Archived</span></div>
          <div className="list">
            {archived.map((p) => (
              <ProjectRow key={p.url} p={p} showCaption={false} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
