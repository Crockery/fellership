import { memo } from "react";
import { spinner_style } from "./spinner.css";

export const Spinner = memo(() => {
  return <span className={spinner_style} />;
});
