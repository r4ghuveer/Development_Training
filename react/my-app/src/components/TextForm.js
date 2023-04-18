import React,{useState} from 'react'

export default function TextForm(props) {
    const [text,setText] = useState('Enter the text'); //here text is a variable, 'enter the text' is a default string for text, and setText is the function that we will call to give value to text variable.
  return (
    <div>
        <div class="mb-3">
        <label for="mybox" class="form-label">{props.heading}</label>
        <textarea class="form-control" id="mybox" rows="8"></textarea>
        
        </div>
        <button class="btn-upper">Uppercase</button>
    </div>
  )
}
