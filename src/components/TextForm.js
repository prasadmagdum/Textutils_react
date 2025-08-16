import React, { useState } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState('');

  const handleUpClick = () => setText(text.toUpperCase());
  const handleLoClick = () => setText(text.toLowerCase());
  const handleClearClick = () => setText('');
  const handleCopyClick = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to Clipboard!", "success");
  };
  const handleExtraSpaces = () => setText(text.split(/[ ]+/).join(" "));
  const handleCapitalize = () =>
    setText(text.replace(/\b\w/g, char => char.toUpperCase()));

  const handleOnChange = (event) => setText(event.target.value);

  return (
    <>
      <div
        className="container my-3"
        style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}
      >
        <h2 className="mb-3">
          {props.heading}
        </h2>

        <textarea
          className="form-control mb-3"
          value={text}
          onChange={handleOnChange}
          style={{
            backgroundColor: props.mode === 'dark' ? '#555' : 'white',
            color: props.mode === 'dark' ? 'white' : '#042743'
          }}
          rows="8"
          placeholder="Enter your text here..."
        ></textarea>

        {/* Responsive buttons */}
        <div className="d-flex flex-wrap gap-2 mb-3">
          <button disabled={!text} className="btn btn-primary" onClick={handleUpClick}>Uppercase</button>
          <button disabled={!text} className="btn btn-primary" onClick={handleLoClick}>Lowercase</button>
          <button disabled={!text} className="btn btn-primary" onClick={handleClearClick}>Clear</button>
          <button disabled={!text} className="btn btn-primary" onClick={handleCopyClick}>Copy</button>
          <button disabled={!text} className="btn btn-primary" onClick={handleExtraSpaces}>Remove Spaces</button>
          <button disabled={!text} className="btn btn-primary" onClick={handleCapitalize}>Capitalize</button>
        </div>

        <div className="mt-3">
          <h4>Your Text Summary</h4>
          <p>{text.split(/\s+/).filter(word => word.length !== 0).length} words and {text.length} characters</p>
          <p>{0.008 * text.split(/\s+/).filter(word => word.length !== 0).length} Minutes read</p>
          <h5>Preview</h5>
          <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
        </div>
      </div>
    </>
  );
}
