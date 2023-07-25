import { marked } from "marked";
import { useState } from "react";
import { DefaultValue } from "../DefaultValue";
export default function Markdown() {
  const [value, setValue] = useState(DefaultValue);
  const markedHtml = (value) => {
    const html = marked.parse(value, {
      mangle: false,
      headerIds: false,
      breaks: true,
    });
    return { __html: html };
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div className="container text-center">
      <div className="row gap-5">
        <div className="col form-floating">
          <p>
            <label htmlFor="editor">Markdown Editor:</label>
          </p>
          <textarea
            className="form-control"
            id="editor"
            value={value}
            onChange={handleChange}
            style={{ height: "80vh", width: "30vw" }}
          ></textarea>
        </div>
        <div className="col">
          <p>
            <label htmlFor="preview">Markdown Previewer:</label>
          </p>
          <div
            className="border border-primary rounded"
            id="preview"
            dangerouslySetInnerHTML={markedHtml(value)}
            style={{ height: "80vh", width: "30vw", overflow: "scroll" }}
          ></div>
        </div>
      </div>
    </div>
  );
}
