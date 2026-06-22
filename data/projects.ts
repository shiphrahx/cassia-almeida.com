export type ProjectCategory = "starred" | "other" | "archived";

export type Project = {
  url: string; // GitHub repo URL — the name, year and language are pulled from GitHub
  category: ProjectCategory;
  description?: string; // optional caption; falls back to the repo's GitHub description
};

// To add or remove a project, just add or delete a line below.
// The creation year is extracted automatically from the GitHub repo.
const projects: Project[] = [
  {
    url: "https://github.com/shiphrahx/git-tomato",
    category: "starred",
    description:
      "Pomodoro timer that logs your git commits per focus session. See exactly what you built, not just how long you worked.",
  },
  {
    url: "https://github.com/shiphrahx/Caliber",
    category: "starred",
    description:
      "A lightweight web platform for engineering managers to run their day-to-day in one place — teams, 1:1s, tasks, delivery signals, and personal growth.",
  },
  {
    url: "https://github.com/shiphrahx/pixpaws",
    category: "other",
    description:
      "A free, client-side pixel art generator for pet photos using classic gaming palettes.",
  },
  {
    url: "https://github.com/shiphrahx/AI-for-engineering-leaders",
    category: "other",
    description:
      "Practical AI playbooks for engineering leaders to improve delivery, decisions, and team productivity.",
  },
  {
    url: "https://github.com/shiphrahx/Ashenveld",
    category: "other",
    description:
      "An experimental text-driven RPG with branching storytelling in a dark fantasy setting.",
  },
  {
    url: "https://github.com/shiphrahx/Pulse",
    category: "other",
    description:
      "A modern one-page portfolio and vCard template built with Vite and React.",
  },
  { url: "https://github.com/shiphrahx/mdsite", category: "other" },
  { url: "https://github.com/shiphrahx/VouJuntoCom", category: "archived" },
  { url: "https://github.com/shiphrahx/CasaLiberdade.github.io", category: "archived" },
];

export default projects;
