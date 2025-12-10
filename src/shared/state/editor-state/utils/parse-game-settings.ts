import {
	ABILITY_MAPPING_KEY,
	DAMAGE_METER_KEY,
	HUD_SETTINGS_KEY,
	SELECTED_HUD_KEY,
	X_RES_KEY,
	Y_RES_KEY,
} from "../constants";

type GetLineType = "filter" | "find";
type ReturnTypeBasedOnInput<T extends GetLineType> = T extends "filter"
	? string[]
	: string;

const getLine = <T extends GetLineType>(args: {
	lines: string[];
	cb: (line: string) => boolean;
	type: T;
	error_msg: string;
}): ReturnTypeBasedOnInput<T> => {
	if (args.type === "filter") {
		const found = args.lines.filter(args.cb);

		if (!found.length) {
			throw args.error_msg;
		}
		// @ts-expect-error
		return found;
	}

	const found = args.lines.find(args.cb);

	if (!found) {
		throw args.error_msg;
	}

	// @ts-expect-error
	return found;
};

const parseField = (field: string) => {
	const parts = field.split("=");

	return [parts[0], parts[1]];
};

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
		cb: (line) => line.startsWith(HUD_SETTINGS_KEY),
		error_msg: "No profiles in file",
		type: "filter",
	});

	const x_resolution_line = getLine({
		lines,
		cb: (line) => line.startsWith(X_RES_KEY),
		error_msg: "No X resolution line.",
		type: "find",
	});

	const y_resolution_line = getLine({
		lines,
		cb: (line) => line.startsWith(Y_RES_KEY),
		error_msg: "No Y resolution line.",
		type: "find",
	});

	const selected_hud_line = getLine({
		lines,
		cb: (line) => line.startsWith(SELECTED_HUD_KEY),
		error_msg: "No selected profile mapping.",
		type: "find",
	});

	const ability_mapping_lines = getLine({
		lines,
		cb: (line) => line.startsWith(ABILITY_MAPPING_KEY),
		error_msg: "No ability mapping lines.",
		type: "filter",
	});

	const dammage_meter_line = getLine({
		lines,
		cb: (line) => line.startsWith(DAMAGE_METER_KEY),
		error_msg: "No damage meter line.",
		type: "find",
	});

	console.log({
		profile_lines,
		dammage_meter_line,
		selected_hud_line,
		x_resolution_line,
		y_resolution_line,
		ability_mapping_lines,
	});

	return {
		screen_height: Number(parseField(y_resolution_line)[1]),
		screen_width: Number(parseField(x_resolution_line)[1]),
	};
};
