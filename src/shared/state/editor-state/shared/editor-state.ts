import { proxy } from "valtio";
import { DEFAULT_EDITOR_STATE, type PROFILE_KEYS } from "./constants";
import type { EditorState } from "./types";

export const editor_state = proxy<EditorState>({
	active_profile: DEFAULT_EDITOR_STATE.active_profile,
	screen_height: DEFAULT_EDITOR_STATE.screen_height,
	screen_width: DEFAULT_EDITOR_STATE.screen_width,
	initialized: DEFAULT_EDITOR_STATE.initialized,
	profiles: [],
	get profile_names() {
		return this.profiles
			.map((p: Record<PROFILE_KEYS, unknown>) => p.ProfileName)
			.sort((a: string, b: string) => {
				return a.localeCompare(b);
			});
	},
	get hash() {
		return window.btoa(JSON.stringify([this.screen_height, this.screen_width]));
	},
	get unhashed() {
		return window.atob(this.hash);
	},
});
