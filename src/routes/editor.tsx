import { createFileRoute } from "@tanstack/react-router";
import { EditorPage } from "../pages/editor-page";

export const Route = createFileRoute("/editor")({
  component: EditorPage,
});
