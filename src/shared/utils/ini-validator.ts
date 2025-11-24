export const initValidator = (lines: string[]) => {
  if (!lines[0].startsWith(";METADATA=")) {
    return false;
  }

  return true;
};
