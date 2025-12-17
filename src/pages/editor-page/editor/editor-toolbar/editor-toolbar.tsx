import { Toolbar } from "@base-ui/react/toolbar";
import { Trash } from "lucide-react";
import { memo } from "react";
import { useSnapshot } from "valtio";
import { IconButton, Select, Text } from "../../../../shared";
import { editor_state, resetEditor } from "../../../../shared/state";
import * as styles from "./editor-toolbar.css";

export const EditorToolbar = memo(() => {
	const { profile_names, active_profile, screen_width, screen_height } =
		useSnapshot(editor_state);

	return (
		<Toolbar.Root className={styles.toolbar}>
			<Toolbar.Group className={styles.group}>
				<Text size="body" color="white" text="PROFILE" />
				<Select<string>
					value={active_profile}
					onValueChange={(value) => {
						if (value) {
							editor_state.active_profile = value;
						}
					}}
					color="black"
					in_toolbar
					trigger_class={styles.profile_selector}
					align_with_trigger={false}
					options={profile_names.map((profile_name) => ({
						label: profile_name,
						value: profile_name,
					}))}
				/>
			</Toolbar.Group>
			<Toolbar.Separator className={styles.seperator} />
			<Text
				text={`${screen_width}x${screen_height}`}
				size="body"
				color="green"
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
