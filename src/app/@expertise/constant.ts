import adonisjs from "../../../public/adonis.svg";
import electronjs from "../../../public/electronjs.svg";
import figma from "../../../public/figma.svg";
import git from "../../../public/git.svg";
import graphql from "../../../public/graphql.svg";
import html from "../../../public/html.svg";
import javascript from "../../../public/javascript-js.svg";
import nextjs from "../../../public/next-js.svg";
import reactjs from "../../../public/react.svg";
import reactNative from "../../../public/reactnative.svg";
import redux from "../../../public/redux.svg";
import bash from "../../../public/scripts.svg";
import scss from "../../../public/scss.svg";
import tailwindcss from "../../../public/tailwindcss-icon.svg";
import typescript from "../../../public/typescript-icon.svg";

export const EXPERTISE_ROW_ONE: Array<{ image: any; alt: string }> = [
  { image: nextjs, alt: "Next.js" },
  { image: reactjs, alt: "React.js" },
  { image: reactNative, alt: "React Native" },
  { image: electronjs, alt: "Electron.js" },
  { image: tailwindcss, alt: "TailwindCss" },
  { image: typescript, alt: "Typescript" },
  { image: graphql, alt: "Graphql" },
  { image: redux, alt: "Redux" },
];

export const EXPERTISE_ROW_TWO: Array<{ image: any; alt: string }> = [
  { image: adonisjs, alt: "Adonis.js" },
  { image: javascript, alt: "Javascript" },
  { image: html, alt: "HTML" },
  { image: scss, alt: "SCSS" },
  { image: git, alt: "Git" },
  { image: figma, alt: "Figma" },
  { image: bash, alt: "Bash Scripts" },
];
