import React, { useState } from "react";

export default function TextForm(props) {
  const [Text, setText] = useState("");

  const handleupclick = () => {
    // console.log("uppercase clicked " + Text)
    let newtext = Text.toUpperCase();
    setText(newtext);
    props.showAlert("Converted to UpperCase!", "success")
  };
  const handleLowerclick = () => {
    // console.log("uppercase clicked " + Text)
    let newtextlow = Text.toLowerCase();
    setText(newtextlow);
    props.showAlert("Converted to LowerCase!", "success")


  };

  const handleCopyClick = () => {
    console.log("Copy clicked: " + Text);
    navigator.clipboard.writeText(Text);
    props.showAlert("Copied to Clipboard!", "success")

  };

  const handleOnChange = (e) => {
    // console.log(" on changed clicked")
    setText(e.target.value);
  };
  const handleClearClick = (e) => {
    // console.log(" on changed clicked")
    setText(" ");
    props.showAlert("Clear Text!", "success")

  };
  return (
    <>
    
      <div >
        <div style={{ color:  props.mode=== 'dark'?'white':'black'}} className=" container mb-3">
          <h1>{props.heading} </h1>
          <textarea   
            className="form-control"
            style={{backgroundColor: props.mode=== 'dark'?'grey':'white', color:  props.mode=== 'dark'?'white':'black'}}
            value={Text}
            onChange={handleOnChange}
            id="exampleFormControlTextarea1"
            rows="10"
          >

          </textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleupclick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLowerclick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCopyClick}>
          Copy to Clipboard
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>
          Clear
        </button>
      </div>
      <div  style={{ color:  props.mode=== 'dark'?'white':'black'}} className="container my-4">
        <h2>Your Text Summery</h2>
        <p>
            {Text.split(" ").length} words and {Text.length} characters
        </p>
        <p>{0.008 * Text.split(" ").length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{Text.length>0?Text:'Enter some text in above Textbox to preview some text..'}</p>
      </div>
    
    </>
  );
}
