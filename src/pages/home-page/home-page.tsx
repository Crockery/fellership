import { memo } from "react";
import { block_variants, home_page } from "./home-page.css";
import { Link } from "@tanstack/react-router";

export const HomePage = memo(() => {
  return (
    <div className={home_page}>
      <div className={block_variants.one}>FELLERSHIP</div>
      <div className={block_variants.two}></div>
      <div className={block_variants.three}></div>
      <div className={block_variants.four}>
        <Link to="/editor">UI EDITOR</Link>
      </div>
    </div>
  );
});
