import { createGlobalTheme } from "@vanilla-extract/css";

export const theme_vars = createGlobalTheme(":root", {
  color: {
    red: "#e2625e",
    red_darker: "rgba(198, 82, 78, 1)",
    red_lighter: "#f66f6aff",
    yellow: "#ffefae",
    yellow_darker: "#e5d591ff",
    yellow_lighter: "#fdf3c7ff",
    green_darker: "#3d865eff",
    green_lighter: "#57bc85ff",
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
    small: "14px",
    body: "16px",
    title: "36px",
    family: `"Jost", sans-serif`,
  },
});
