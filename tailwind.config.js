import defaultTheme from "tailwindcss/defaultTheme";

export default {
  theme: {
    extend: {
      fontFamily: {
        sans: ["Instrument Sans", ...defaultTheme.fontFamily.sans],
      },
    },
  },
};
