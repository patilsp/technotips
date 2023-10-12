export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "TechnoTips",
  description:
    "TechnoTips is a network of communities where people can dive into their interests, hobbies and passions. There's a community for whatever you're interested in",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "My Feeds",
      href: "/",
    },
    {
      title: "My Profile",
      href: "/profile",
    },
   
     {
      title: "Settings",
      href: "/forms",
    },
  ],
  links: {
    twitter: "https://twitter.com/patilsp",
    github: "https://github.com/patilsp",
    docs: "#",
    portfolio: "https://portfolio-santosh-patil.vercel.app/",
  },
}
