import React from 'react'

export default function TextForm(props) {
  return (
    <div>
        <div class="mb-3">
        <label for="mybox" class="form-label">{props.heading}</label>
        <textarea class="form-control" id="mybox" rows="3"></textarea>
        </div>
    </div>
  )
}
