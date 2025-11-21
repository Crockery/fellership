import { createGlobalTheme } from "@vanilla-extract/css";

// const jost = "Jost";

// globalFontFace(jost, [
//   {
//     src: 'url("./fonts/Jost-Medium.ttf")',
//     fontWeight: "normal",
//   },
//   {
//     src: 'url("./fonts/Jost-ExtraBold.ttf")',
//     fontWeight: "bold",
//   },
// ]);

export const theme_vars = createGlobalTheme(":root", {
  color: {
    red: "#e2625e",
    yellow: "#ffefae",
    green: "#489b6e",
    gray: "#b6bfc1",
    black: "#111314",
    white: "#f0f0f0ff",
  },
  spacing: {
    4: "4px",
    8: "8px",
    12: "12px",
    16: "16px",
    20: "20px",
    24: "24px",
    28: "28px",
    32: "32px",
    36: "36px",
    40: "40px",
  },
  font: {
    small: "12px",
    body: "14px",
    title: "36px",
    family: `"Jost", sans-serif`,
  },
});
