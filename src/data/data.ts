export const personalInfo: { [key:string]: string } = {
    Firstname: "Hidde", 
    LastName: "Fokkema", 
    profilePic: "Square_Hidde.jpg", 
    github: "https://github.com/HiddeFok", 
    bitbucket: "https://bitbucket.org/hf_uva/", 
    bluesky: "https://bsky.app/profile/hiddefokkema.bsky.social", 
    linkedin: "https://www.linkedin.com/in/hidde-fokkema-a1198a12a/",
    scholar: "https://scholar.google.com/citations?user=FkAOYFsAAAAJ",
    email: "mailto:h.j.fokkema@uva.nl"
}

interface ContactItem {
    href: string, 
    icon: string, 
    text: string
}

export const contactItems: ContactItem[] = [
    {
      href: personalInfo.scholar,
      icon: "fa fa-user",
      text: "Google Scholar"
    },
    {
      href: personalInfo.bluesky,
      icon: "fa fa-link",
      text: "Bluesky",
    }, 
    {
      href: personalInfo.email,
      icon: "fa fa-envelope", 
      text: "E-mail"
    },
    {
      href: personalInfo.linkedin,
      icon: "fa fa-linkedin",
      text: "LinkedIn",
    },
    {
      href: personalInfo.github,
      icon: "fa fa-github",
      text: "Github",
    },
    {
      href: personalInfo.bitbucket,
      icon: "fa fa-bitbucket",
      text: "Bitbucket",
    }
]