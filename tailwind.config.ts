import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-conic":
          "conic-gradient( from 180deg at 50% 50%, #0aefff -69.37deg, #0f83ff 31.88deg, #b056e7 120deg, #ff9966 204.37deg, #0aefff 290.63deg, #0f83ff 391.87deg)",
      },
      screens: {
        xxxxs: "360px",
        xxxs: "375px",
        xxs: "390px",
        xs: "412px",
        sm: "810px",
        md: "1280px",
        lg: "1366px",
        lg2: "1440px",
        lg3: "1536px",
        lg4: "1600px",
        lg5: "1920px",
        lg6: "2560px",
      },
      colors: {
        gray: {
          200: "#f9f8f8",
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
