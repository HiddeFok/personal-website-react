export const personalInfo: { [key:string]: string } = {
    Firstname: "Hidde", 
    LastName: "Fokkema", 
    profilePic: "Square_Hidde.jpg", 
    github: "https://github.com/HiddeFok", 
    bitbucket: "https://bitbucket.org/hf_uva/", 
    twitter: "https://twitter.com/Hidde_Fokkema", 
    linkedin: "https://www.linkedin.com/in/hidde-fokkema-a1198a12a/"
}

interface ContactItem {
    href: string, 
    icon: string, 
    text: string
}

export const contactItems: ContactItem[] = [
    {
      href: personalInfo.linkedin,
      icon: "fa fa-linkedin",
      text: "LinkedIn",
    },
    {
      href: personalInfo.twitter,
      icon: "fa fa-twitter",
      text: "Twitter",
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