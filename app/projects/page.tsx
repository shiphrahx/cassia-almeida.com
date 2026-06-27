import type { Metadata } from "next";
import projects, { type Project } from "@/data/projects";
import { getRepoMeta } from "@/lib/github";
import GitHubIcon from "@/components/GitHubIcon";

export const metadata: Metadata = {
  title: "Projects",
  description: "Things I've built on the side. Building in public.",
};

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
        {p.language && <span className="project-tag">{p.language}</span>}
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

type EnrichedProject = Omit<Project, "language"> & {
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
        language: project.language ?? (meta.language ? meta.language.toLowerCase() : null),
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
                  {p.language && <span className="card-tag">{p.language}</span>}
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
