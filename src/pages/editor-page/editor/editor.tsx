import { memo } from "react";
import { useSnapshot } from "valtio";
import { editor_state } from "../../../shared/state";
import { EditorToolbar } from "./editor-toolbar/editor-toolbar";

export const Editor = memo(() => {
	const state = useSnapshot(editor_state);

	return (
		<div>
			<EditorToolbar />
		</div>
	);
});
