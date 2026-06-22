export type Book = {
  title: string;
  author: string;
  category: string;
};

// To add a book, add a line under the relevant category. Books are grouped by
// category on the page, in the order the categories first appear below.
const books: Book[] = [
  // — Software & Engineering —
  { title: "Clean Architecture", author: "Robert C. Martin", category: "Software & Engineering" },
  { title: "Accelerate", author: "Nicole Forsgren, Jez Humble, Gene Kim", category: "Software & Engineering" },

  // — Product & Design —
  { title: "Inspired / Empowered / Transformed", author: "Marty Cagan", category: "Product & Design" },
  { title: "The Design of Everyday Things", author: "Don Norman", category: "Product & Design" },

  // — Game Design & Games —
  { title: "The Art of Game Design", author: "Jesse Schell", category: "Game Design & Games" },
  { title: "Masters of Doom", author: "David Kushner", category: "Game Design & Games" },
  { title: "Extra Lives", author: "Tom Bissell", category: "Game Design & Games" },
  { title: "Reality Is Broken", author: "Jane McGonigal", category: "Game Design & Games" },

  // — Leadership & Teams —
  { title: "Turn the Ship Around!", author: "L. David Marquet", category: "Leadership & Teams" },
  { title: "The Five Dysfunctions of a Team", author: "Patrick Lencioni", category: "Leadership & Teams" },
  { title: "Start with Why", author: "Simon Sinek", category: "Leadership & Teams" },
  { title: "The Culture Map", author: "Erin Meyer", category: "Leadership & Teams" },
  { title: "Extreme Ownership", author: "Jocko Willink, Leif Babin", category: "Leadership & Teams" },
  { title: "The Habit of Excellence", author: "Langley Sharp", category: "Leadership & Teams" },
  { title: "Measure What Matters", author: "John Doerr", category: "Leadership & Teams" },
  { title: "The No Asshole Rule", author: "Robert I. Sutton", category: "Leadership & Teams" },
  { title: "The Coaching Habit", author: "Michael Bungay Stanier", category: "Leadership & Teams" },

  // — Business & Startups —
  { title: "The Lean Startup", author: "Eric Ries", category: "Business & Startups" },
  { title: "Shoe Dog", author: "Phil Knight", category: "Business & Startups" },
  { title: "The Hard Thing About Hard Things", author: "Ben Horowitz", category: "Business & Startups" },
  { title: "Scaling Up", author: "Verne Harnish", category: "Business & Startups" },
  { title: "The Diary of a CEO", author: "Steven Bartlett", category: "Business & Startups" },
  { title: "It Doesn't Have to Be Crazy at Work", author: "Jason Fried, David Heinemeier Hansson", category: "Business & Startups" },

  // — Finance & Economics —
  { title: "The Psychology of Money", author: "Morgan Housel", category: "Finance & Economics" },
  { title: "One Up On Wall Street", author: "Peter Lynch", category: "Finance & Economics" },
  { title: "The Trading Game", author: "Gary Stevenson", category: "Finance & Economics" },
  { title: "Liar's Poker", author: "Michael Lewis", category: "Finance & Economics" },
  { title: "Best Loser Wins", author: "Tom Hougaard", category: "Finance & Economics" },
  { title: "Edible Economics", author: "Ha-Joon Chang", category: "Finance & Economics" },

  // — Psychology & Decision-Making —
  { title: "Thinking, Fast and Slow", author: "Daniel Kahneman", category: "Psychology & Decision-Making" },
  { title: "Surrounded by Idiots", author: "Thomas Erikson", category: "Psychology & Decision-Making" },
  { title: "The Black Swan", author: "Nassim Nicholas Taleb", category: "Psychology & Decision-Making" },
  { title: "Never Split the Difference", author: "Chris Voss", category: "Psychology & Decision-Making" },
  { title: "Where Good Ideas Come From", author: "Steven Johnson", category: "Psychology & Decision-Making" },

  // — Productivity & Personal Growth —
  { title: "Atomic Habits", author: "James Clear", category: "Productivity & Personal Growth" },
  { title: "Deep Work", author: "Cal Newport", category: "Productivity & Personal Growth" },
  { title: "Four Thousand Weeks", author: "Oliver Burkeman", category: "Productivity & Personal Growth" },
  { title: "Be Useful", author: "Arnold Schwarzenegger", category: "Productivity & Personal Growth" },
  { title: "The Almanack of Naval Ravikant", author: "Eric Jorgenson", category: "Productivity & Personal Growth" },
];

export default books;
