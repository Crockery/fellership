import { Link } from "@tanstack/react-router";
import { memo } from "react";
import { useSnapshot } from "valtio";
import { editor_state } from "../../shared/state";
import { block_variants, home_page } from "./home-page.css";

export const HomePage = memo(() => {
	const { hash } = useSnapshot(editor_state);

	return (
		<div className={home_page}>
			<div className={block_variants.one}>FELLERSHIP</div>
			<div className={block_variants.two}></div>
			<div className={block_variants.three}></div>
			<div className={block_variants.four}>
				<Link to="/editor" search={{ hash: hash ? hash : undefined }}>
					UI EDITOR
				</Link>
			</div>
		</div>
	);
});
