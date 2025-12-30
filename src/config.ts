import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://ageprotect.org/",
  author: "Paul Trevithick",
  desc: "AgeProtect site",
  title: "AgeProtect",
  ogImage: "agent-presentation.jpg", // TODO replace me with real image
  lightAndDarkMode: true,
  postPerPage: 3,
};

export const LOCALE = ["en-EN"]; // set to [] to use the environment default

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/MeeFoundation/ageprotect-landing",
    linkTitle: ` ${SITE.title} on Github`,
    active: false,
  },
];
