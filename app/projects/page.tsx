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
        <div className="card-grid">
          <a className="card" href="https://github.com/shiphrahx/pixpaws" target="_blank" rel="noopener noreferrer">
            <div className="card-name">pixpaws</div>
            <div className="card-desc">A free, client-side pixel art generator for pet photos. Drag, drop, and pixelify using classic gaming palettes.</div>
            <span className="card-tag">javascript</span>
          </a>
          <a className="card" href="https://github.com/shiphrahx/AI-for-engineering-leaders" target="_blank" rel="noopener noreferrer">
            <div className="card-name">AI-for-engineering-leaders</div>
            <div className="card-desc">Practical AI playbooks for engineering leaders to improve delivery, decision-making, and team productivity with real workflows, prompts, and systems.</div>
          </a>
          <a className="card" href="https://github.com/shiphrahx/Pulse" target="_blank" rel="noopener noreferrer">
            <div className="card-name">Pulse</div>
            <div className="card-desc">A modern one-page portfolio and vCard template built with Vite and React — focused on clarity, smooth navigation, and easy customisation.</div>
            <span className="card-tag">javascript</span>
          </a>
          <a className="card" href="https://github.com/shiphrahx/Ashenveld" target="_blank" rel="noopener noreferrer">
            <div className="card-name">Ashenveld</div>
            <div className="card-desc">An experimental text-driven RPG exploring branching storytelling, world simulation, and choice-driven gameplay in a dark fantasy setting.</div>
            <span className="card-tag">typescript</span>
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
