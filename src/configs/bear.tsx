import { FaPaw } from "react-icons/fa";
import { GiNinjaHeroicStance } from "react-icons/gi";
import { GoBrowser } from "react-icons/go";

import { BearData } from "../types";

const bear: BearData[] = [
  {
    id: "profile",
    title: "Profile",
    icon: <FaPaw />,
    md: [
      {
        id: "about-me",
        title: "About Me",
        file: "markdown/about-me.md",
        icon: <GiNinjaHeroicStance />,
        excerpt: "Hey there! I'm a Full-Stack Developer..."
      },
      {
        id: "about-site",
        title: "About This Site",
        file: "markdown/about-site.md",
        icon: <GoBrowser />,
        excerpt: "Something about this personal portfolio site..."
      }
    ]
  }
  // {
  //   id: "project",
  //   title: "Projects",
  //   icon: <GoRepo />,
  //   md: [
  //     {
  //       id: "flint",
  //       title: "Flint",
  //       file: "https://raw.githubusercontent.com/Renovamen/flint/main/README.md",
  //       icon: <HiFire />,
  //       excerpt: "A deep learning framework implemented in Numpy...",
  //       link: "https://github.com/Renovamen/flint"
  //     }
  //   ]
  // }
];

export default bear;
