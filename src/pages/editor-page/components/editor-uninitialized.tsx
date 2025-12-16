import { getRouteApi } from "@tanstack/react-router";
import { FileUp } from "lucide-react";
import { type ChangeEvent, memo, useCallback, useState } from "react";
import { button_variants, Spinner, Text } from "../../../shared";
import { initEditor, resetEditor } from "../../../shared/state";
import {
	editor_page_inner,
	upload_input,
	upload_section,
} from "./editor-uninitialized.css";

const route = getRouteApi("/editor");

export const EditorUninitialized = memo(() => {
	const [loading, setLoading] = useState(false);

	const nav = route.useNavigate();

	const onUpload = useCallback(
		async (e: ChangeEvent<HTMLInputElement>) => {
			try {
				setLoading(true);
				const file = e.target.files?.item(0);
				const text = await file?.text();

				if (text) {
					resetEditor();
					const hash = await initEditor({ file: text });

					if (hash) {
						nav({
							search: () => {
								return { hash };
							},
						});
					}
				}
			} catch (error) {
				console.log(error);
			} finally {
				setLoading(false);
			}
		},
		[nav],
	);

	return (
		<div className={editor_page_inner}>
			<div className={upload_section}>
				<Text bold color="yellow" text="UPLOAD GAMEUSERSETTINGS" size="title" />

				<label className={button_variants["red"]} htmlFor="settings_upload">
					{loading ? <Spinner /> : <FileUp />}
					UPLOAD
				</label>
				<input
					onChange={onUpload}
					type="file"
					className={upload_input}
					id="settings_upload"
					name="settings_upload"
					accept=".ini"
					multiple={false}
				/>
			</div>
		</div>
	);
});
