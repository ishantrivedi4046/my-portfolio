import Image from "next/image";
import emotagCommit from "../../../public/emotagCommits.png";
import portfolioWeb from "../../../public/portfolioWeb.png";
import { CoverFlowSlideType } from "./swiper/cover-flow-slider/types";

export const PROJECTS: CoverFlowSlideType[] = [
  {
    backgroundGradiant: "bg-gradient-project-one",
    summary: <Image src={portfolioWeb} alt="portfolio-web" />,
    details: {
      videoUrl:
        "https://ishan-trivedi-portfolio.s3.amazonaws.com/videos/emotag-commits.mp4",
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
    backgroundGradiant: "bg-gradient-project-two",
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
  {
    backgroundGradiant: "bg-gradient-to-br from-green-100 to-green-900",
    summary: "Slide 3",
    details: {
      videoUrl:
        "https://ishan-trivedi-portfolio.s3.amazonaws.com/videos/emotag-commits.mp4",
      title: "Emotag Commits",
      desc: "A CLI for creating commits with Git Emojis \n Let's celebrate each and every commit with a corresponding emoji!",
      features: [
        "Easy and simple to use.",
        "Generates emojified commits with a series of prompts",
        "Supports semantic-release for common types : feat/fix/docs/refactor",
        "Equipped with popular Git Emojis to cater your specific commit usecase.",
        "Preview commit errors or success in colors.",
      ],
      tech: [
        "Typescript",
        "@clack/prompts",
        "semantic-release",
        "Github Action",
      ],
      confidential: false,
    },
  },
];
