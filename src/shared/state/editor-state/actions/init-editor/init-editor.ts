import { editor_state } from "../../shared/editor-state";
import { parseGameSettings } from "./parse-game-settings";

interface InitEditorArgs {
	file?: string;
	hash?: string;
}

export const initEditor = ({
	file,
	hash,
}: InitEditorArgs): Promise<string | undefined> => {
	return new Promise((resolve, reject) => {
		try {
			if (!file && !hash) {
				console.error("Tried to initialize editor without a hash or file.");
				resolve(undefined);
			}

			if (file) {
				const parsed = parseGameSettings(file);

				editor_state.screen_height = parsed.screen_height;
				editor_state.screen_width = parsed.screen_width;
				editor_state.initialized = true;
				editor_state.profiles = parsed.profiles;
				editor_state.active_profile = editor_state.profile_names[0];

				console.log(parsed);

				resolve(editor_state.hash);
			} else if (hash) {
				const un_hashed = JSON.parse(window.atob(hash));

				console.log(un_hashed);

				resolve(undefined);
			}
		} catch (error) {
			reject(error);
		}
	});
};
