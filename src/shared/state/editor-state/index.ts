import { proxy } from "valtio";
import { parseGameSettings } from "./utils";
import type { PROFILE_KEYS } from "./utils/parse-game-settings/shared";

const DEFAULT_STATE = {
	screen_height: 0,
	screen_width: 0,
	initialized: false,
};

export const editor_state = proxy<{
	screen_height: number;
	screen_width: number;
	initialized: boolean;
	profiles: Record<PROFILE_KEYS, unknown>[];
	hash: string;
	unhashed: string;
	reset: VoidFunction;
}>({
	screen_height: DEFAULT_STATE.screen_height,
	screen_width: DEFAULT_STATE.screen_width,
	initialized: DEFAULT_STATE.initialized,
	profiles: [],
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
				editor_state.profiles = parsed.profiles;

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
