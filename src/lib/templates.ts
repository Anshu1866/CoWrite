export const templates = [
  {
    id: "blank",
    label: "Blank Document",
    imageUrl: "/blank-document.svg",
    initialContent: "",
  },
  {
    id: "resume",
    label: "Resume",
    imageUrl: "/resume.svg",
    initialContent: `
      <h1>Your Name</h1>
      <p>your.email@example.com | (555) 123-4567</p>
      <h2>Experience</h2>
      <p>Job Title — Company Name (Year–Year)</p>
      <ul><li>Accomplishment or responsibility</li></ul>
      <h2>Education</h2>
      <p>Degree — School Name (Year)</p>
      <h2>Skills</h2>
      <p>Skill 1, Skill 2, Skill 3</p>
    `,
  },
  {
    id: "cover-letter",
    label: "Cover Letter",
    imageUrl: "/cover-letter.svg",
    initialContent: `
      <p>Dear Hiring Manager,</p>
      <p>I am writing to express my interest in the [Position] role at [Company]...</p>
      <p>Sincerely,<br/>Your Name</p>
    `,
  },
  {
    id: "project-proposal",
    label: "Project Proposal",
    imageUrl: "/project-proposal.svg",
    initialContent: `
      <h1>Project Proposal</h1>
      <h2>Overview</h2>
      <p>Describe the project goal here.</p>
      <h2>Timeline</h2>
      <p>Estimated timeline and milestones.</p>
      <h2>Budget</h2>
      <p>Estimated costs.</p>
    `,
  },
  {
    id: "meeting-notes",
    label: "Meeting Notes",
    imageUrl: "/meeting-notes.svg",
    initialContent: `
      <h1>Meeting Notes</h1>
      <p>Date: </p>
      <p>Attendees: </p>
      <h2>Agenda</h2>
      <ul><li>Topic 1</li></ul>
      <h2>Action Items</h2>
      <ul><li>Task — Owner</li></ul>
    `,
  },
];