export type Template = {
  name: string;
  url: string; // Notion template URL
  description: string;
  price: string; // e.g. "Free"
};

// Notion templates published on my creator profile: notion.com/@shiphrah
const templates: Template[] = [
  {
    name: "Engineering Manager Starter Pack",
    url: "https://www.notion.com/templates/engineering-manager-starter-pack",
    description:
      "A practical Engineering Manager Starter Pack with templates for onboarding, team charters, rituals, feedback, delivery checks, and a weekly dashboard. Designed to bring clarity, structure, and healthy leadership to any engineering team.",
    price: "Free",
  },
  {
    name: "1:1 Management Hub",
    url: "https://www.notion.com/templates/1-1-management-hub",
    description:
      "A friendly, flexible workspace to help you run better 1:1s, keep track of actions, and stay on top of team conversations. Includes six ready-to-use 1:1 templates, direct report profiles, pulse checks, and an easy way to follow up.",
    price: "Free",
  },
  {
    name: "Job Hunt Command Centre",
    url: "https://www.notion.com/templates/job-hunt-command-centre",
    description:
      "Most job search trackers are just a list of company names and dates. I believe a job search should be treated like a strategic operation. This keeps everything in one place: applications, companies, contacts and interview prep so you can focus on the actual work of getting hired.",
    price: "Free",
  },
  {
    name: "Side Project Tracker",
    url: "https://www.notion.com/templates/side-project-tracker-485",
    description:
      "Manage your side projects from ideas to ship. Track status, tech stack, time invested and revenue, break work into milestones, and use the built-in launch checklist. Includes a graveyard for projects that didn't make it.",
    price: "Free",
  },
  {
    name: "Career Growth Plan",
    url: "https://www.notion.com/templates/career-growth-plan-986",
    description:
      "A practical career growth plan template to help you structure short-, mid-, and long-term goals. Designed to be adapted to your role and ambitions, it supports reflection, prioritisation, and continuous development with clear focus areas and measurable goals.",
    price: "Free",
  },
];

export default templates;
