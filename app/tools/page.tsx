export default function Tools() {
  return (
    <>
      <h1 className="page-title">Tools</h1>
      <p className="page-subtitle">
        Small utilities I built for myself. Nothing fancy — just things that save a few minutes.
      </p>

      <div className="section">
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
    </>
  );
}
