import { editor_state } from "..";
import { DEFAULT_EDITOR_STATE } from "../shared/constants";

export const resetEditor = () => {
	editor_state.screen_height = DEFAULT_EDITOR_STATE.screen_height;
	editor_state.screen_width = DEFAULT_EDITOR_STATE.screen_width;
	editor_state.initialized = false;
	editor_state.active_profile = undefined;
};
