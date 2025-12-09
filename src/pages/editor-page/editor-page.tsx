import { memo } from "react";
import { editor_page, back_button_wrapper } from "./editor-page.css";
import { editor_state } from "../../shared/state";
import { useSnapshot } from "valtio";
import { EditorUninitialized } from "./components/editor-uninitialized";
import { Link } from "@tanstack/react-router";
import { Button } from "../../shared";
import { ArrowLeft } from "lucide-react";
import { Route as Home } from "../../routes";
import cx from "classnames";

export const EditorPage = memo(() => {
  const { initialized, hash, unhashed } = useSnapshot(editor_state);

  console.log({ hash, unhashed });

  return (
    <div className={editor_page}>
      <Link className={cx(back_button_wrapper, { initialized })} to={Home.to}>
        <Button color="red" text="BACK" icon={<ArrowLeft />} />
      </Link>
      {!initialized ? <EditorUninitialized /> : <div />}
    </div>
  );
});
