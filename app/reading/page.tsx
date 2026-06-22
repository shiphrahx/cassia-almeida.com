import books, { type Book } from "@/data/books";

type CategoryGroup = { category: string; books: Book[] };

function groupByCategory(books: Book[]): CategoryGroup[] {
  const map = new Map<string, Book[]>();
  for (const book of books) {
    if (!map.has(book.category)) map.set(book.category, []);
    map.get(book.category)!.push(book);
  }
  return Array.from(map.entries()).map(([category, books]) => ({ category, books }));
}

export default function Reading() {
  const groups = groupByCategory([...books].reverse());

  return (
    <>
      <h1 className="page-title">Reading</h1>
      <p className="page-subtitle">
        Books I&apos;ve read, by category. A mix of tech, leadership, and everything in between.
      </p>

      {groups.map(({ category, books: groupBooks }) => (
        <div key={category} className="reading-group">
          <div className="reading-group-title">{category}</div>
          <div className="list">
            {groupBooks.map((book) => (
              <div key={book.title} className="book-item">
                <div>
                  <div className="book-title">{book.title}</div>
                  <div className="book-author">{book.author}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}
