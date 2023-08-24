import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const BACKGROUND_WIDTH = {
  280: "280px",
  320: "320px",
  360: "360px",
  420: "420px",
};

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        buttonHover: "buttonHover 0.3s ease forwards",
      },
      colors: {
        tp: {
          blue100: "#ECF6FF",
          blue101: "#F2FBFE",
          blue200: "#2D9CDB",
          blue300: "#2F80ED",
          blue400: "#0E4E97",
          gray100: "#E8EBED",
          gray200: "#C9CDD2",
          gray300: "#9FA4AA",
          gray400: "#72787F",
          gray500: "#464C53",
          gray600: "#26282B",
          green100: "#EEFDFA",
          green200: "#00AF89",
          green300: "#14866D",
          red100: "#FEE7E6",
          red200: "#EB5757",
          red300: "#B32424",
          white100: "#FFFFFF",
          white200: "#F7F8F9",
          yellow100: "#FEF6E7",
          yellow200: "#FFCC33",
          yellow300: "#F2994A",
        },
      },
      fontSize: {
        body: ["16px", { fontWeight: "400", lineHeight: "24px" }],
        "body-bold": ["16px", { fontWeight: "500", lineHeight: "20px" }],
        caption1: ["14px", { fontWeight: "400", lineHeight: "20px" }],
        "caption1-bold": ["14px", { fontWeight: "500", lineHeight: "20px" }],
        caption2: ["12px", { fontWeight: "400", lineHeight: "18px" }],
        "caption2-bold": ["12px", { fontWeight: "600", lineHeight: "18px" }],
        caption3: ["11px", { fontWeight: "400", lineHeight: "14px" }],
        head: ["30px", { fontWeight: "500", lineHeight: "33px" }],
        "head-bold": ["24px", { fontWeight: "700", lineHeight: "33px" }],
        number: ["18px", { fontWeight: "400", lineHeight: "20px" }],
        "number-bold": ["18px", { fontWeight: "500", lineHeight: "20px" }],
        "number-extra-bold": [
          "18px",
          { fontWeight: "600", lineHeight: "20px" },
        ],
        subTitle: ["18px", { fontWeight: "500", lineHeight: "26px" }],
        "subTitle-bold": ["18px", { fontWeight: "600", lineHeight: "26px" }],
        title: ["21px", { fontWeight: "500", lineHeight: "30px" }],
        "title-bold": ["21px", { fontWeight: "600", lineHeight: "30px" }],
        "title-extra-bold": ["21px", { fontWeight: "700", lineHeight: "30px" }],
      },
      keyframes: (props: any) => {
        const { theme } = props;
        return {
          buttonHover: {
            "0%": {
              backgroundColor: theme("colors.tp.blue300"),
              boxShadow: theme("boxShadow.none"),
            },
            "100%": {
              backgroundColor: theme("colors.tp.blue400"),
              boxShadow: theme("boxShadow.lg"),
            },
          },
        };
      },
      maxWidth: { ...BACKGROUND_WIDTH },
      minWidth: { ...BACKGROUND_WIDTH },
      width: { ...BACKGROUND_WIDTH },
    },
    fontFamily: {
      pretendard: ["Pretendard", ...fontFamily.sans],
      cafe24: ["Cafe24Shiningstar", ...fontFamily.sans],
    },
  },
  plugins: [],
};
export default config;
