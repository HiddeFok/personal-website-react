export const personalInfo = {
  name: "Hidde Fokkema",
  jobTitle: "AI Research Engineer",
  employer: "Plumerai",
  github: "https://github.com/HiddeFok",
  bluesky: "https://bsky.app/profile/hiddefokkema.bsky.social",
  linkedin: "https://www.linkedin.com/in/hidde-fokkema-a1198a12a/",
  scholar: "https://scholar.google.com/citations?user=FkAOYFsAAAAJ",
  email: "mailto:hidde.fokkema@gmail.com",
};

export const contactItems = [
  { icon: "scholar", text: "Google Scholar", href: personalInfo.scholar },
  { icon: "bluesky", text: "Bluesky", href: personalInfo.bluesky },
  { icon: "email", text: "E-mail", href: personalInfo.email },
  { icon: "linkedin", text: "LinkedIn", href: personalInfo.linkedin },
  { icon: "github", text: "Github", href: personalInfo.github },
] as const;

export type ContactIcon = (typeof contactItems)[number]["icon"];
