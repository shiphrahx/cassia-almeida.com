import projects, { type Project } from "@/data/projects";
import { getRepoMeta } from "@/lib/github";

type EnrichedProject = Project & {
  name: string;
  year: number | null;
  language: string | null;
  createdAt: string | null;
  caption: string | null;
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
              <a key={p.url} className="card" href={p.url} target="_blank" rel="noopener noreferrer">
                <div className="card-name">{p.name}</div>
                {p.caption && <div className="card-desc">{p.caption}</div>}
                {p.language && <span className="card-tag">{p.language.toLowerCase()}</span>}
              </a>
            ))}
          </div>
        </div>
      )}

      {other.length > 0 && (
        <div className="section">
          <div className="section-header"><span className="section-title">Other Projects</span></div>
          <div className="list">
            {other.map((p) => (
              <a key={p.url} className="list-item" href={p.url} target="_blank" rel="noopener noreferrer">
                <div>
                  <div className="list-item-title">{p.name}</div>
                  {p.caption && <div className="list-item-sub">{p.caption}</div>}
                </div>
                {p.year && <span className="list-item-meta">{p.year}</span>}
              </a>
            ))}
          </div>
        </div>
      )}

      {archived.length > 0 && (
        <div className="section">
          <div className="section-header"><span className="section-title">Archived</span></div>
          <div className="list">
            {archived.map((p) => (
              <a key={p.url} className="list-item" href={p.url} target="_blank" rel="noopener noreferrer">
                <span className="list-item-title">{p.name}</span>
                {p.year && <span className="list-item-meta">{p.year}</span>}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
