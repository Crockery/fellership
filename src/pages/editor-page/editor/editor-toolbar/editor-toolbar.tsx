import { Select as BaseSelect } from "@base-ui/react/select";
import { Toolbar } from "@base-ui/react/toolbar";
import { ChevronsUpDown, Trash } from "lucide-react";
import { memo } from "react";
import { IconButton, Select } from "../../../../shared";
import { resetEditor } from "../../../../shared/state";
import * as styles from "./editor-toolbar.css";

export const EditorToolbar = memo(() => {
	return (
		<Toolbar.Root className={styles.toolbar}>
			<Select
				trigger={
					<Toolbar.Button render={<BaseSelect.Trigger />}>
						<BaseSelect.Value />
						<BaseSelect.Icon>
							<ChevronsUpDown />
						</BaseSelect.Icon>
					</Toolbar.Button>
				}
				options={[
					{ label: "Hi", value: "hi" },
					{ label: "Bye", value: "bye" },
				]}
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
