export default function ToolsTemplates() {
  return (
    <>
      <h1 className="page-title">Tools &amp; Templates</h1>
      <p className="page-subtitle">
        Small utilities I built for myself and starter kits I&apos;ve put together. Free to use, fork, and modify.
      </p>

      <div className="section">
        <div className="section-header">
          <span className="section-title">Tools</span>
        </div>
        <div className="compact-grid">
          <a className="compact-item" href="#">
            <span className="compact-icon">🎨</span>
            <div className="compact-name">Colour Picker</div>
            <div className="compact-meta">OKLCH + hex</div>
          </a>
          <a className="compact-item" href="#">
            <span className="compact-icon">⏱</span>
            <div className="compact-name">Pomodoro</div>
            <div className="compact-meta">25 / 5 timer</div>
          </a>
          <a className="compact-item" href="#">
            <span className="compact-icon">🔗</span>
            <div className="compact-name">OG Previewer</div>
            <div className="compact-meta">meta tags</div>
          </a>
          <a className="compact-item" href="#">
            <span className="compact-icon">🔤</span>
            <div className="compact-name">Font Tester</div>
            <div className="compact-meta">variable fonts</div>
          </a>
          <a className="compact-item" href="#">
            <span className="compact-icon">📐</span>
            <div className="compact-name">Spacing Scale</div>
            <div className="compact-meta">rem calculator</div>
          </a>
          <a className="compact-item" href="#">
            <span className="compact-icon">🌗</span>
            <div className="compact-name">Contrast Check</div>
            <div className="compact-meta">WCAG 2.1</div>
          </a>
        </div>
      </div>

      <div className="section">
        <div className="section-header">
          <span className="section-title">Templates</span>
        </div>
        <div className="compact-grid">
          <a className="compact-item" href="#">
            <span className="compact-icon">📄</span>
            <div className="compact-name">Blog Starter</div>
            <div className="compact-meta">HTML + CSS</div>
          </a>
          <a className="compact-item" href="#">
            <span className="compact-icon">📊</span>
            <div className="compact-name">Dashboard</div>
            <div className="compact-meta">React + Tailwind</div>
          </a>
          <a className="compact-item" href="#">
            <span className="compact-icon">📮</span>
            <div className="compact-name">Email Template</div>
            <div className="compact-meta">MJML</div>
          </a>
          <a className="compact-item" href="#">
            <span className="compact-icon">🧾</span>
            <div className="compact-name">Invoice PDF</div>
            <div className="compact-meta">LaTeX</div>
          </a>
          <a className="compact-item" href="#">
            <span className="compact-icon">📝</span>
            <div className="compact-name">Landing Page</div>
            <div className="compact-meta">Astro</div>
          </a>
          <a className="compact-item" href="#">
            <span className="compact-icon">📦</span>
            <div className="compact-name">CLI Scaffold</div>
            <div className="compact-meta">Go</div>
          </a>
        </div>
      </div>
    </>
  );
}
