import { createFileRoute } from "@tanstack/react-router";
import { EditorPage } from "../pages/editor-page";

interface EditorSearch {
	hash?: string;
}

export const Route = createFileRoute("/editor")({
	component: EditorPage,
	validateSearch: (search): EditorSearch => {
		if (search["hash"]) {
			return { hash: search["hash"] as string };
		}

		return {};
	},
});
