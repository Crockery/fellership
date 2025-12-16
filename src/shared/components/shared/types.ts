import type { ThemeColors } from "../../types";

export type ButtonColors = Exclude<ThemeColors, "white" | "gray">;
