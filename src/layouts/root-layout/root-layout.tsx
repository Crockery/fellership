import { memo } from "react";
import { root_layout_style } from "./root-layout.css";
import { Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

export const RootLayout = memo(() => {
  return (
    <div className={root_layout_style}>
      <Outlet />
      <TanStackRouterDevtools />
    </div>
  );
});
