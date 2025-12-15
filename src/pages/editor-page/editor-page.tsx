import { Link } from "@tanstack/react-router";
import cx from "classnames";
import { ArrowLeft } from "lucide-react";
import { memo } from "react";
import { useSnapshot } from "valtio";
import { Route as Home } from "../../routes";
import { Button } from "../../shared";
import { editor_state } from "../../shared/state";
import { EditorUninitialized } from "./components/editor-uninitialized";
import { Editor } from "./editor/editor";
import { back_button_wrapper, editor_page } from "./editor-page.css";

// const route = getRouteApi("/editor");

export const EditorPage = memo(() => {
	const { initialized } = useSnapshot(editor_state);

	// TODO: Enable initialization with hash.
	// const { hash } = route.useSearch();

	// useEffect(() => {
	// 	try {
	// 		if (!initialized && !!hash) {
	// 			initEditor({ hash });
	// 		}
	// 	} catch (error) {
	// 		console.error(error);
	// 	}
	// }, [hash, initialized]);

	return (
		<div className={editor_page}>
			{!initialized ? (
				<>
					<Link
						className={cx(back_button_wrapper, { initialized })}
						to={Home.to}
					>
						<Button color="red" text="BACK" icon={<ArrowLeft />} />
					</Link>
					<EditorUninitialized />
				</>
			) : (
				<Editor />
			)}
		</div>
	);
});
