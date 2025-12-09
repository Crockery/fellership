import { memo, useCallback, useState, type ChangeEvent } from "react";
import { button_variants, Spinner, Text } from "../../../shared";
import {
  editor_page_inner,
  upload_input,
  upload_section,
} from "./editor-uninitialized.css";
import { FileUp } from "lucide-react";
import { initEditor } from "../../../shared/state";

export const EditorUninitialized = memo(() => {
  const [loading, setLoading] = useState(false);

  const onUpload = useCallback(async (e: ChangeEvent<HTMLInputElement>) => {
    try {
      setLoading(true);
      const file = e.target.files?.item(0);
      const text = await file?.text();

      if (text) {
        initEditor(text);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <div className={editor_page_inner}>
      <div className={upload_section}>
        <Text bold color="yellow" text="UPLOAD GAMEUSERSETTINGS" size="title" />

        <label className={button_variants["red"]} htmlFor="settings_upload">
          {loading ? <Spinner /> : <FileUp />}
          UPLOAD
        </label>
        <input
          onChange={onUpload}
          type="file"
          className={upload_input}
          id="settings_upload"
          name="settings_upload"
          accept=".ini"
          multiple={false}
        />
      </div>
    </div>
  );
});
