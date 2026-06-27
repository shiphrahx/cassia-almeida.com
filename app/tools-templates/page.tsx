import type { Metadata } from "next";
import templates from "@/data/templates";

export const metadata: Metadata = {
  title: "Tools & Templates",
  description: "Free Notion templates I've built and published.",
};

function NotionIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
      <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466l1.823 1.447zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952l1.448.327s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854l-1.167-.094c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.14c-.093-.514.28-.887.747-.933l3.222-.186z" />
    </svg>
  );
}

export default function ToolsTemplates() {
  return (
    <>
      <h1 className="page-title">Tools &amp; Templates</h1>
      <p className="page-subtitle">
        Notion templates I&apos;ve built and published on my{" "}
        <a href="https://www.notion.com/@shiphrah" target="_blank" rel="noopener noreferrer">
          creator profile
        </a>
        . All free to duplicate and make your own.
      </p>

      <div className="section">
        <div className="section-header">
          <span className="section-title">Templates</span>
        </div>
        <div className="card-grid">
          {templates.map((t) => (
            <div key={t.url} className="card">
              <a
                className="card-name card-link"
                href={t.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.name}
              </a>
              <div className="card-desc">{t.description}</div>
              <div className="card-footer">
                <span className="card-tag">{t.price}</span>
                <a
                  className="card-repo"
                  href={t.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${t.name} on Notion`}
                >
                  <NotionIcon />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
