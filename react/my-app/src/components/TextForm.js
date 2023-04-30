import React,{useState} from 'react';

export default function TextForm(props) {

  const HandleLowClick =() =>{
    console.log("lower button clicked");
    let low = text.toLowerCase();
    setText(low);
  };
  const HandleUpClick= () =>{
    console.log("convert but was clicked");
    let up = text.toUpperCase();
    setText(up); //here setText is a hook (since we are not able to directly change state(for that we need to use className based components), instead we need to use setText hook(for function based components))
  };
  const handleOnChange=(event)=>{
    console.log("on change");
    setText(event.target.value);
  };
  
    const [text,setText] = useState('Enter the text'); //here text is a variable, 'enter the text' is a default string for text, and setText is the function that we will call to give value to text variable.
  return (
    <>
    <div className='container'>
        <div className="mb-3">
        <label htmlFor="mybox" className="form-label">{props.heading}</label>
        <textarea className="form-control" id="mybox" rows="8" value={text} onChange={handleOnChange}></textarea>
        
        </div>
        <button className="btn btn-primary mx-2" onClick={HandleUpClick}>Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={HandleLowClick}>Lowercase</button>
    </div>
    <div className="container my-3">
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words, {text.length} characters, </p>
        <p> {0.008 * ((text.split(" ").length))} minutes to read </p>
        <h3>Preview</h3>
        <p>{text}</p>
    </div>
    </>
  )
}
