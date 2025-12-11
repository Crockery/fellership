import { getLine } from "./helpers/get-line";
import { parseProfile } from "./parse-profile/parse-profile";
import { parseField } from "./shared";
import { ROOT_KEYS } from "./shared/constants";

export const parseGameSettings = (file: string) => {
	const lines = file.split("\r\n");

	if (!lines.length) {
		throw "No lines.";
	}

	if (!lines[0].startsWith(";METADATA=")) {
		throw "No METADATA header.";
	}

	const profile_lines = getLine({
		lines,
		cb: (line) => line.startsWith(ROOT_KEYS.HUDSettingsProfile),
		error_msg: "No profiles in file",
		type: "filter",
	});

	const x_resolution_line = getLine({
		lines,
		cb: (line) => line.startsWith(ROOT_KEYS.ResolutionSizeX),
		error_msg: "No X resolution line.",
		type: "find",
	});

	const y_resolution_line = getLine({
		lines,
		cb: (line) => line.startsWith(ROOT_KEYS.ResolutionSizeY),
		error_msg: "No Y resolution line.",
		type: "find",
	});

	// const selected_huds_line = getLine({
	// 	lines,
	// 	cb: (line) => line.startsWith(ROOT_KEYS.SELECTED_HUD),
	// 	error_msg: "No selected profile mapping.",
	// 	type: "find",
	// });

	// const ability_mapping_lines = getLine({
	// 	lines,
	// 	cb: (line) => line.startsWith(ROOT_KEYS.ABILITY_MAPPING),
	// 	error_msg: "No ability mapping lines.",
	// 	type: "filter",
	// });

	// const dammage_meter_line = getLine({
	// 	lines,
	// 	cb: (line) => line.startsWith(ROOT_KEYS.DAMAGE_METER),
	// 	error_msg: "No damage meter line.",
	// 	type: "find",
	// });

	return {
		screen_height: Number(parseField(y_resolution_line)[1]),
		screen_width: Number(parseField(x_resolution_line)[1]),
		profiles: profile_lines.map(parseProfile),
	};
};
