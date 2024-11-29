import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";

const Editor = ({
  code,
  onChange,
}: {
  code: string;
  onChange(updatedValue: string): void;
}) => {
  return (
    <CodeMirror
      value={code}
      minHeight="100vh"
      extensions={[javascript({ jsx: true })]}
      onChange={onChange}
      theme="dark"
      style={{
        fontSize: "30px",
      }}
    />
  );
};

export default Editor;
