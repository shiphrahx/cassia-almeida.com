export default function Projects() {
  return (
    <>
      <h1 className="page-title">Projects</h1>
      <p className="page-subtitle">
        Things I&apos;ve built on the side. Some still running, some archived. I&apos;m obsessed with{" "}
        <strong>building in public</strong>.
      </p>

      <div className="section">
        <div className="section-header"><span className="section-title">Active</span></div>
        <div className="card-grid">
          <a className="card" href="#">
            <div className="card-name">markdown-editor</div>
            <div className="card-desc">A distraction-free writing app with live preview and multi-format export.</div>
            <span className="card-tag">typescript</span>
          </a>
          <a className="card" href="#">
            <div className="card-name">palette-gen</div>
            <div className="card-desc">Generate accessible colour palettes from a single seed colour using OKLCH.</div>
            <span className="card-tag">svelte</span>
          </a>
          <a className="card" href="#">
            <div className="card-name">tiny-invoices</div>
            <div className="card-desc">Create and send invoices from a YAML file. No accounts, no SaaS.</div>
            <span className="card-tag">python</span>
          </a>
          <a className="card" href="#">
            <div className="card-name">link-garden</div>
            <div className="card-desc">Personal bookmarking with tags, full-text search, and daily digests.</div>
            <span className="card-tag">go</span>
          </a>
        </div>
      </div>

      <div className="section">
        <div className="section-header"><span className="section-title">Archived</span></div>
        <div className="list">
          <a className="list-item" href="#"><span className="list-item-title">csv-toolkit</span><span className="list-item-meta">2024</span></a>
          <a className="list-item" href="#"><span className="list-item-title">habit-tracker-cli</span><span className="list-item-meta">2023</span></a>
          <a className="list-item" href="#"><span className="list-item-title">static-site-starter</span><span className="list-item-meta">2022</span></a>
        </div>
      </div>
    </>
  );
}
