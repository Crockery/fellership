import { memo, useCallback, type ChangeEvent } from "react";
import { Text } from "../../shared/components";
import {
  // explanation_text,
  editor_page,
  editor_page_inner,
  // upload_input,
  // upload_label,
} from "./editor-page.css";
import { initValidator } from "../../shared";

export const EditorPage = memo(() => {
  const onUpload = useCallback(async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.item(0);
    const text = await file?.text();

    if (text) {
      const lines = text.split("\r\n");
      if (initValidator(lines)) {
        console.log("thanks!");
        console.log(lines);
      }
    }
  }, []);

  return (
    <div className={editor_page}>
      <div className={editor_page_inner}></div>
      {/* <Text bold color="yellow" size="title" text="Hello!" />
      <div className={explanation_text}>
        <Text
          color="white"
          size="body"
          align="center"
          text="This editor requires the 'GameSettings.ini' file from your fellowship installation."
        />
        <Text
          color="white"
          align="center"
          size="body"
          text="On Windows, you can find this file here: '%localappdata%\fellowship\Saved\Config\Windows'"
        />
      </div>
      <label className={upload_label} htmlFor="settings_upload">
        Click Here To Upload
      </label>
      <input
        onChange={onUpload}
        type="file"
        className={upload_input}
        id="settings_upload"
        name="settings_upload"
        accept=".ini"
        multiple={false}
      /> */}
    </div>
  );
});
