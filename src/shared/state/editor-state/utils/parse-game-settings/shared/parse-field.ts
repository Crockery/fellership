export const parseField = (
	field: string,
):
	| [string, string]
	| [undefined, undefined]
	| [string, undefined]
	| [undefined, string] => {
	const parts = field.split("=");

	return [parts[0], parts[1]];
};
