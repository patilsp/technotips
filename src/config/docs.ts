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
      title: "Most Upvote",
      href: "/",
    },{
      title: "Bookmarks",
      href: "/",
    },
    
    
  ],
  sidebarNav: [
    {
      
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
