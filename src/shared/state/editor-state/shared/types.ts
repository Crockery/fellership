import type { PROFILE_KEYS } from "./constants";

export interface EditorState {
	screen_height: number;
	screen_width: number;
	initialized: boolean;
	active_profile: string | undefined;
	profiles: Record<PROFILE_KEYS, unknown>[];
	hash: string;
	unhashed: string;
	profile_names: string[];
}
