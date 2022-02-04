import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () =>{
        // console.log("Uppercase was Clicked:" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase", "success");
    }
    const handleLowClick = () =>{
        // console.log("Uppercase was Clicked:" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase", "success");
    }
    const handleClear = () =>{
        let newText = "";
        setText(newText);
        props.showAlert("Text cleared", "success");
    }
    const handleOnChange = (event) =>{
        // console.log("Uppercase was Clicked");
        setText(event.target.value);
    }
    const handleCopy = () =>{
        // let newText = document.getElementById("myBox");
        // newText.select();
        navigator.clipboard.writeText(text);
        // document.getSelection().removeAllRanges();
        props.showAlert("Copied to Clipboard", "success");
    }
    const handleExtraSpaces = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("ExtraSpaces Removed", "success");
    }
    const [text, setText] = useState("");
    // text = "new text" // wrong way to change the state
    // setText("Nnew text") // Correct way to change the state
    return (
        <>
        <div className="container" style={{color: props.mode === 'dark'?'white':'#042743'}} >
            <h1 className='mb-4'>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'?'#13466e':'white', color: props.mode === 'dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
            </div>
            <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to Upercase</button>
            <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleLowClick}>Convert to Lowercase</button>
            <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleClear}>Clear Text</button>
            <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy Text </button>
            <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces </button>
        </div>
        <div className="container mi-3" style={{color: props.mode === 'dark'?'white':'#042743'}}>
            <h2>your text summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes read</p>
            <h2>Preview</h2>
            <p>{text.length > 0?text: "nothing to preview"}</p>
        </div>
        </>
    )
}
