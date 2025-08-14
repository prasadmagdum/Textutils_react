import React, { useState } from 'react';
export default function TextFormPlus(props) {
  const [text, setText] = useState('');

  const handleUpClick = () => {
    setText(text.toUpperCase());
    props.showAlert("Converted to uppercase", "success");
  };

  const handleLoClick = () => {
    setText(text.toLowerCase());
    props.showAlert("Converted to lowercase", "success");
  };

  const handleClearClick = () => {
    setText('');
    props.showAlert("Text cleared", "success");
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to clipboard", "success");
  };

  const handleExtraSpaces = () => {
    setText(text.split(/\s+/).join(' '));
    props.showAlert("Extra spaces removed", "success");
  };

  const handleCapitalize = () => {
    const newText = text
      .toLowerCase()
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    setText(newText);
    props.showAlert("Text capitalized", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const wordCount = text.trim().split(/\s+/).filter(Boolean).length;

  return (
    <>
      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
        <h1>{props.heading}</h1>
        <textarea
          className="form-control mb-3"
          value={text}
          onChange={handleOnChange}
          style={{
            backgroundColor: props.mode === 'dark' ? '#555' : 'white',
            color: props.mode === 'dark' ? 'white' : '#042743'
          }}
          rows="8"
        />
        <div className="btn-group mb-2">
          <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Uppercase</button>
          <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Lowercase</button>
          <button className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear</button>
          <button className="btn btn-primary mx-1 my-1" onClick={handleCopyClick}>Copy</button>
          <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Spaces</button>
          <button className="btn btn-primary mx-1 my-1" onClick={handleCapitalize}>Capitalize</button>
        </div>
      </div>

      <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
        <h2>Text Summary</h2>
        <p>{wordCount} words and {text.length} characters</p>
        <p>{(0.008 * wordCount).toFixed(2)} minutes to read</p>
        {text.length > 200 && <p className="text-danger">⚠️ Character limit exceeded (200)</p>}
        <h2>Preview</h2>
        <p>{text || "Nothing to preview!"}</p>
      </div>
    </>
  );
}
