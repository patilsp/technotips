// config/docs.ts
import { NavItem } from "types/nav";

interface DocsConfig {
  mainNav: NavItem[];
  sidebarNav: NavItem[];
}

export const docsConfig: DocsConfig = {
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
      title: "Communities",
      href: "/Communities",
    },
    {
      title: "Popular",
      href: "/Popular",
    },
    {
      title: "Most Upoveted",
      href: "/",
    },{
      title: "Bookmarks",
      href: "/",
    },
     {
      title: "Settings",
      href: "/forms",
    },
   
    
  ],
  sidebarNav: [
    {
      title: "General",
      items: [
        {
          title: "Help",
          href: "/helps",
        },
        {
          title: "Settings",
          href: "/forms",
        },
        {
          title: "Sign Up",
          href: "/authentication",
        },
      ],
    },
  ],
};
