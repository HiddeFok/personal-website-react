export const personalInfo: { [key: string]: string } = {
  Firstname: "Hidde",
  LastName: "Fokkema",
  profilePic: "HF_1_18032026.jpeg",
  github: "https://github.com/HiddeFok",
  bluesky: "https://bsky.app/profile/hiddefokkema.bsky.social",
  linkedin: "https://www.linkedin.com/in/hidde-fokkema-a1198a12a/",
  scholar: "https://scholar.google.com/citations?user=FkAOYFsAAAAJ",
  email: "mailto:hidde.fokkema@gmail.com",
};

export type ContactIcon = "scholar" | "bluesky" | "email" | "linkedin" | "github";

interface ContactItem {
  href: string;
  text: string;
  icon: ContactIcon;
}

export const contactItems: ContactItem[] = [
  {
    href: personalInfo.scholar,
    text: "Google Scholar",
    icon: "scholar",
  },
  {
    href: personalInfo.bluesky,
    text: "Bluesky",
    icon: "bluesky",
  },
  {
    href: personalInfo.email,
    text: "E-mail",
    icon: "email",
  },
  {
    href: personalInfo.linkedin,
    text: "LinkedIn",
    icon: "linkedin",
  },
  {
    href: personalInfo.github,
    text: "Github",
    icon: "github",
  },
];
