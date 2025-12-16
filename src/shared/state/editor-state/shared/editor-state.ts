import { proxy } from "valtio";
import { DEFAULT_EDITOR_STATE, type PROFILE_KEYS } from "./constants";

export const editor_state = proxy<{
	screen_height: number;
	screen_width: number;
	initialized: boolean;
	profiles: Record<PROFILE_KEYS, unknown>[];
	hash: string;
	unhashed: string;
}>({
	screen_height: DEFAULT_EDITOR_STATE.screen_height,
	screen_width: DEFAULT_EDITOR_STATE.screen_width,
	initialized: DEFAULT_EDITOR_STATE.initialized,
	profiles: [],
	get hash() {
		return window.btoa(JSON.stringify([this.screen_height, this.screen_width]));
	},
	get unhashed() {
		return window.atob(this.hash);
	},
});
