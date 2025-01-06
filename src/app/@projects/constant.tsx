import Image from "next/image";
import emotagCommit from "../../../public/emotagCommits.png";
import portfolioWeb from "../../../public/portfolioWeb.png";
import roveImage from "../../../public/rove.png";
import roveBanner from "../../../public/roveBanner.png";
import rumeImage from "../../../public/rume.png";
import { CoverFlowSlideType } from "./swiper/cover-flow-slider/types";

export const PROJECTS: CoverFlowSlideType[] = [
  {
    backgroundGradiant: "bg-gradient-project-portfolio",
    summary: <Image src={portfolioWeb} alt="portfolio-web" />,
    details: {
      videoUrl:
        "https://ishan-trivedi-portfolio.s3.us-east-1.amazonaws.com/videos/portfolio.webm",
      title: "Portfolio Website",
      desc: "Loosely designed in Figma and coded in Visual Studio Code by yours truly. Built with Next.js and Tailwind CSS, deployed with Vercel.",
      features: [
        "Easy and simple to use.",
        "Generates emojified commits with a series of prompts.",
        "Supports semantic-release for common types : feat/fix/docs/refactor.",
        "Equipped with popular Git Emojis to cater your specific commit usecase.",
        "Preview commit errors or success in colors.",
      ],
      tech: [
        "TypeScript",
        "JavaScript",
        "Next.js",
        "Swiper",
        "TailwindCSS",
        "SCSS",
      ],
      githubLink: "https://github.com/ishantrivedi4046/my-portfolio",
      confidential: false,
    },
  },
  {
    backgroundGradiant: "bg-gradient-project-rove",
    imageContainerClassNames: "!bg-rove-gradient",
    zoomIconTheme: "light",
    summary: <Image src={roveImage} alt="rove-background-image" />,
    details: {
      banner: roveBanner,
      title: "Rove Charging",
      desc: "Rove Charging is a comprehensive EV charging solution featuring a React Native mobile app and an admin portal built with Next.js and GraphQL.The mobile app empowers users to initiate charging sessions, monitor real-time updates, and manage their EV charging experience seamlessly.The admin portal provides robust tools for administrators, including the ability to view and export detailed reports, as well as start and monitor ongoing charging sessions.This project showcases expertise in cross-platform app development, server-side rendering, and API integration to deliver a streamlined EV charging experience.",
      features: [
        "Locate our closest full-service charging center near you",
        "Check for available chargers before arriving at our centers",
        "Start and stop your EV charging session from anywhere",
        "Track the progress of your charge while you enjoy the center",
        "Buy and redeem Rove car washes",
        "Order food ahead from our onsite ReCharge by Gelson's market",
        "Manage your charging history",
      ],
      tech: [
        "React Native",
        "GraghQL",
        "Next.js",
        "OCPP & OCPI",
        "TypeScript",
        "TailwindCSS",
      ],
      playStoreLink:
        "https://play.google.com/store/apps/details?id=com.rovecharging.app&pcampaignid=web_share",
      appStoreLink: "https://apps.apple.com/us/app/rove-charging/id6475951818",
      confidential: true,
    },
  },
  {
    backgroundGradiant: "bg-gradient-project-rume",
    summary: <Image src={rumeImage} alt="rume-mvp" className="self-baseline" />,
    details: {
      videoUrl:
        "https://ishan-trivedi-portfolio.s3.us-east-1.amazonaws.com/videos/rume.webm",
      title: "Rume",
      desc: "RUME is a tool that simplifies the networking process between Brands and Influencers by giving each group direct exposure to each other.",
      features: [
        "Responsive design optimized for seamless functionality and user experience across multiple devices and screen sizes.",
        "Engaging animations that enhance and elevate the user experience.",
        "Seamless Sign-Up and Sign-In flows designed for a quick and effortless start.",
      ],
      tech: [
        "Typescript",
        "React.js",
        "Ant Design",
        "SCSS",
        "TailwindCSS",
        "Redux",
      ],
      confidential: true,
    },
  },
  {
    backgroundGradiant: "bg-gradient-project-npm",
    summary: <Image src={emotagCommit} alt="emotag-commit" />,
    details: {
      videoUrl:
        "https://ishan-trivedi-portfolio.s3.amazonaws.com/videos/emotag-commits.mp4",
      title: "Emotag Commits",
      desc: "A CLI for creating commits with Git Emojis \n Let's celebrate each and every commit with a corresponding emoji!",
      features: [
        "Easy and simple to use.",
        "Generates emojified commits with a series of prompts.",
        "Supports semantic-release for common types : feat/fix/docs/refactor.",
        "Equipped with popular Git Emojis to cater your specific commit usecase.",
        "Preview commit errors or success in colors.",
      ],
      tech: [
        "Typescript",
        "@clack/prompts",
        "semantic-release",
        "Github Action",
      ],
      githubLink: "https://github.com/ishantrivedi4046/emotag-commits",
      confidential: false,
    },
  },
];
