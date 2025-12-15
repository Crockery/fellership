import { Select as BaseSelect } from "@base-ui/react/select";
import { Toolbar } from "@base-ui/react/toolbar";
import { ArrowLeft, ChevronsUpDown } from "lucide-react";
import { memo } from "react";
import { Button, Select } from "../../../../shared";

export const EditorToolbar = memo(() => {
	return (
		<Toolbar.Root>
			<Button
				Render={Toolbar.Button}
				color="red"
				text="BACK"
				icon={<ArrowLeft />}
			/>
			<Toolbar.Separator />
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
		</Toolbar.Root>
	);
});
