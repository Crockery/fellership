import { memo } from "react";
import { Text } from "../../shared/components";

export const HomePage = memo(() => {
  return <Text text="Hello!" size="title" color="yellow" />;
});
