import { proxy } from "valtio";
import { parseGameSettings } from "./utils";

const DEFAULT_STATE = {
	screen_height: 0,
	screen_width: 0,
	initialized: false,
};

export const editor_state = proxy({
	screen_height: DEFAULT_STATE.screen_height,
	screen_width: DEFAULT_STATE.screen_width,
	initialized: DEFAULT_STATE.initialized,
	get hash() {
		return window.btoa(JSON.stringify([this.screen_height, this.screen_width]));
	},
	get unhashed() {
		return window.atob(this.hash);
	},
	reset() {
		this.screen_height = DEFAULT_STATE.screen_height;
		this.screen_width = DEFAULT_STATE.screen_width;
		this.initialized = DEFAULT_STATE.initialized;
	},
});

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

			editor_state.reset();

			if (file) {
				const parsed = parseGameSettings(file);

				editor_state.screen_height = parsed.screen_height;
				editor_state.screen_width = parsed.screen_width;
				editor_state.initialized = true;

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
