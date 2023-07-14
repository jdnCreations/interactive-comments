import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      primaryBlue: "hsl(238, 40%, 52%)",
      primarySoftRed: "hsl(358, 79%, 66%)",
      primaryLightBlue: "hsl(239, 57%, 85%)",
      primaryPaleRed: "hsl(357, 100%, 86%)",
      
      neutralDarkBlue: "hsl(212, 24%, 26%)",
      neutralGrayBlue: "hsl(211, 10%, 45%)",
      neutralLightGray: "hsl(223, 19%, 93%)",
      neutralVeryLightGray: "hsl(228, 33%, 97%)",
      neutralWhite: "hsl(0, 0%, 100%)",
    },
    fontFamily: {
      custom: ["Rubik"],
    }
  },
  plugins: [],
} satisfies Config;
