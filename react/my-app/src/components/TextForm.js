import React,{useState} from 'react'

export default function TextForm(props) {
    const HandleUpClick= () =>{
      console.log("convert but was clicked");
      let up = text.toUpperCase();
      setText(up);
    };
    const handleOnChange=(event)=>{
      console.log("on change");
      setText(event.target.value);
    };
     const [text,setText] = useState('Enter the text'); //here text is a variable, 'enter the text' is a default string for text, and setText is the function that we will call to give value to text variable.
    
  return (
    <div>
        <div class="mb-3">
        <label for="mybox" class="form-label">{props.heading}</label>
        <textarea class="form-control" id="mybox" rows="8" value={text} onChange={handleOnChange}></textarea>
        
        </div>
        <button class="btn-upper" onClick={HandleUpClick}>Uppercase</button>
    </div>
  )
}
