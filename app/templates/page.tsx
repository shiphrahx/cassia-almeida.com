export default function Templates() {
  return (
    <>
      <h1 className="page-title">Templates</h1>
      <p className="page-subtitle">
        Starter kits and boilerplates I&apos;ve put together. Free to use, fork, and modify.
      </p>

      <div className="section">
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
