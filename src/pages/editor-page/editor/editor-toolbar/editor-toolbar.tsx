import { Toolbar } from "@base-ui/react/toolbar";
import { Trash } from "lucide-react";
import { memo } from "react";
import { useSnapshot } from "valtio";
import { IconButton, Select, Text } from "../../../../shared";
import { editor_state, resetEditor } from "../../../../shared/state";
import * as styles from "./editor-toolbar.css";

export const EditorToolbar = memo(() => {
	const { profile_names, active_profile } = useSnapshot(editor_state);

	return (
		<Toolbar.Root className={styles.toolbar}>
			<Toolbar.Group>
				<Text size="body" color="white" text="PROFILE:" />
			</Toolbar.Group>
			<Select<string>
				value={active_profile}
				onValueChange={(value) => {
					if (value) {
						editor_state.active_profile = value;
					}
				}}
				color="black"
				in_toolbar
				align_with_trigger={false}
				options={profile_names.map((profile_name) => ({
					label: profile_name,
					value: profile_name,
				}))}
			/>
			<IconButton
				className={styles.reset_button}
				color="black"
				Icon={Trash}
				onClick={resetEditor}
			/>
		</Toolbar.Root>
	);
});
