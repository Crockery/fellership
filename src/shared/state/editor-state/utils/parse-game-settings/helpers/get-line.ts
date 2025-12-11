type GetLineType = "filter" | "find";
type ReturnTypeBasedOnInput<T extends GetLineType> = T extends "filter"
	? string[]
	: string;

export const getLine = <T extends GetLineType>(args: {
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