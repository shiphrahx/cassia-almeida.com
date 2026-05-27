export default function Reading() {
  return (
    <>
      <h1 className="page-title">Reading</h1>
      <p className="page-subtitle">
        Books I&apos;ve read, by year. A mix of tech, leadership, fiction, and everything in between.
      </p>

      <div className="reading-year">
        <div className="reading-year-title">2026</div>
        <div className="list">
          <div className="book-item">
            <div><div className="book-title">Designing Data-Intensive Applications</div><div className="book-author">Martin Kleppmann</div></div>
            <span className="book-rating">★★★★★</span>
          </div>
          <div className="book-item">
            <div><div className="book-title">The Staff Engineer&apos;s Path</div><div className="book-author">Tanya Reilly</div></div>
            <span className="book-rating">★★★★★</span>
          </div>
          <div className="book-item">
            <div><div className="book-title">An Elegant Puzzle</div><div className="book-author">Will Larson</div></div>
            <span className="book-rating">★★★★☆</span>
          </div>
        </div>
      </div>

      <div className="reading-year">
        <div className="reading-year-title">2025</div>
        <div className="list">
          <div className="book-item">
            <div><div className="book-title">The Pragmatic Programmer</div><div className="book-author">David Thomas, Andrew Hunt</div></div>
            <span className="book-rating">★★★★★</span>
          </div>
          <div className="book-item">
            <div><div className="book-title">Thinking in Systems</div><div className="book-author">Donella Meadows</div></div>
            <span className="book-rating">★★★★★</span>
          </div>
          <div className="book-item">
            <div><div className="book-title">The Making of a Manager</div><div className="book-author">Julie Zhuo</div></div>
            <span className="book-rating">★★★★☆</span>
          </div>
          <div className="book-item">
            <div><div className="book-title">Project Hail Mary</div><div className="book-author">Andy Weir</div></div>
            <span className="book-rating">★★★★★</span>
          </div>
        </div>
      </div>

      <div className="reading-year">
        <div className="reading-year-title">2024</div>
        <div className="list">
          <div className="book-item">
            <div><div className="book-title">Accelerate</div><div className="book-author">Nicole Forsgren, Jez Humble, Gene Kim</div></div>
            <span className="book-rating">★★★★★</span>
          </div>
          <div className="book-item">
            <div><div className="book-title">Team Topologies</div><div className="book-author">Matthew Skelton, Manuel Pais</div></div>
            <span className="book-rating">★★★★☆</span>
          </div>
          <div className="book-item">
            <div><div className="book-title">A Gentleman in Moscow</div><div className="book-author">Amor Towles</div></div>
            <span className="book-rating">★★★★★</span>
          </div>
        </div>
      </div>
    </>
  );
}
