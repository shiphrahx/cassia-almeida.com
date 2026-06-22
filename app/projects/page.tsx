export default function Projects() {
  return (
    <>
      <h1 className="page-title">Projects</h1>
      <p className="page-subtitle">
        Things I&apos;ve built on the side. Some still running, some archived. I&apos;m obsessed with{" "}
        <strong>building in public</strong>.
      </p>

      <div className="section">
        <div className="section-header"><span className="section-title">Starred</span></div>
        <div className="card-grid">
          <a className="card" href="https://github.com/shiphrahx/git-tomato" target="_blank" rel="noopener noreferrer">
            <div className="card-name">git-tomato</div>
            <div className="card-desc">Pomodoro timer that logs your git commits per focus session. See exactly what you built, not just how long you worked.</div>
            <span className="card-tag">javascript</span>
          </a>
          <a className="card" href="https://github.com/shiphrahx/Caliber" target="_blank" rel="noopener noreferrer">
            <div className="card-name">Caliber</div>
            <div className="card-desc">A lightweight web platform for engineering managers to run their day-to-day in one place — teams, 1:1s, tasks, delivery signals, and personal growth.</div>
            <span className="card-tag">typescript</span>
          </a>
        </div>
      </div>

      <div className="section">
        <div className="section-header"><span className="section-title">Other Projects</span></div>
        <div className="list">
          <a className="list-item" href="https://github.com/shiphrahx/pixpaws" target="_blank" rel="noopener noreferrer"><span className="list-item-title">pixpaws</span><span className="list-item-meta">javascript</span></a>
          <a className="list-item" href="https://github.com/shiphrahx/AI-for-engineering-leaders" target="_blank" rel="noopener noreferrer"><span className="list-item-title">AI-for-engineering-leaders</span></a>
          <a className="list-item" href="https://github.com/shiphrahx/Pulse" target="_blank" rel="noopener noreferrer"><span className="list-item-title">Pulse</span><span className="list-item-meta">javascript</span></a>
          <a className="list-item" href="https://github.com/shiphrahx/Ashenveld" target="_blank" rel="noopener noreferrer"><span className="list-item-title">Ashenveld</span><span className="list-item-meta">typescript</span></a>
        </div>
      </div>

      <div className="section">
        <div className="section-header"><span className="section-title">Archived</span></div>
        <div className="list">
          <a className="list-item" href="https://github.com/shiphrahx/VouJuntoCom" target="_blank" rel="noopener noreferrer"><span className="list-item-title">VouJuntoCom</span><span className="list-item-meta">2016</span></a>
          <a className="list-item" href="https://github.com/shiphrahx/CasaLiberdade.github.io" target="_blank" rel="noopener noreferrer"><span className="list-item-title">CasaLiberdade.github.io</span><span className="list-item-meta">2015</span></a>
        </div>
      </div>
    </>
  );
}
