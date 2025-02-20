import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "infinite-scroll-left": "infinite-scroll-left 75s linear infinite",
        "infinite-scroll-right": "infinite-scroll-right 75s linear infinite",
      },
      keyframes: {
        "infinite-scroll-left": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "infinite-scroll-right": {
          from: { transform: "translateX(-50%)" },
          to: { transform: "translateX(0)" },
        },
      },
      backgroundImage: {
        "gradient-project-portfolio":
          "linear-gradient(45deg, #9862f0 0%, #3dc5be 100%)",
        "gradient-project-npm":
          "linear-gradient(45deg, #f4ba24 0%, #ed5456 100%)",
        "gradient-project-rume": "linear-gradient(to right, #ee0979, #ff6a00)",
        "gradient-project-rove":
          "linear-gradient(45deg, #13234b 0%, #13234b 100%)",
        "gradient-linear-text": "linear-gradient(58deg,#b94cdb,#fe815e)",
        "gradient-radial":
          "radial-gradient(circle farthest-side at 50% 50%, rgba(91,136,204,.2), rgba(91,136,204,0))",
        "gradient-linear": "linear-gradient(180deg, hsla(0,0%,100%,0), #fff)",
        "rove-gradient": "linear-gradient(180deg, #0F191F 16%, #237DA2 80%)",
        "gradient-conic":
          "conic-gradient( from 180deg at 50% 50%, #0aefff -69.37deg, #0f83ff 31.88deg, #b056e7 120deg, #ff9966 204.37deg, #0aefff 290.63deg, #0f83ff 391.87deg)",
      },
      screens: {
        xxxxs: "360px",
        xxxs: "375px",
        xxs: "390px",
        xs: "412px",
        "surface-duo": "540px",
        "ipad-mini": "760px",
        sm: "810px",
        md: "1280px",
        lg: "1366px",
        lg2: "1440px",
        lg3: "1536px",
        lg4: "1600px",
        lg5: "1900px",
        lg6: "2300px",
      },
      colors: {
        gray: {
          200: "#f9f8f8",
          300: "#d1caca",
          "text-dark": "#ecedee",
          dark: "#262626",
        },
        red: {
          100: "rgba(248, 0, 0, 0.7)",
        },
        orange: {
          100: "#FBA500",
        },
        purple: {
          900: "#2D043C",
        },
        green: {
          100: "#8FD004",
          900: "#004710",
        },
      },
    },
  },
  plugins: [],
};
export default config;
