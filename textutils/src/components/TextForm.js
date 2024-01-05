import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick= ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText= text.toUpperCase();
        setText(newText);
        if(newText===''){
            props.showAlert("Please enter text!","warning");
        }
        else{
            props.showAlert("Converted to uppercase!","success");
        }
    }
    const handleLowClick= ()=>{
        // console.log("Lowercase was clicked" + text);
        let newText= text.toLowerCase();
        setText(newText);
        if(newText===''){
            props.showAlert("Please enter text!","warning");
        }
        else{
            props.showAlert("Converted to lowercase!","success");
        }
    }
    const handleOnChange= (event)=>{
        // console.log("On change");
        setText(event.target.value);
    }
    const handleExtraSpaces= ()=>{
        let newText=text
        if(newText===''){
            props.showAlert("Please enter text!","warning");
        }
        else{
            props.showAlert("Extra spaces removed!","success");
            newText = text.split(/[ ]+/);
            setText(newText.join(" "));
        }
    }
    
    const[text, setText]=useState('');
    // text="new text"; Wrong way to change the state
    // setText=("new text") Right way to change the state
  return (
    <>
<div className="container" style={{color: props.mode==='dark'?'white':'#001734'}}>
        <h1>{props.heading}</h1>
    <div className="mb-3">
         <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#001734'}} id="myBox" rows="8"></textarea>
    </div>
         <button className="btn btn-primary mx-1" onClick={handleUpClick} >Convert to Uppercase</button>
         <button className="btn btn-primary mx-1 my-2" onClick={handleLowClick} >Convert to Lowercase</button>
         <button className="btn btn-primary mx-1" onClick={handleExtraSpaces} >Remove Extra Space</button>

    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#001734'}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length-1} words and  {text.length} characters </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
