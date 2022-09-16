import React from "react";
import './ColorBlock.css'

function ColorBlock(props) {
  return (
   <div className="colorBlock">
    <div className="color" style={{'backgroundColor': props.color}}/>
    <p>{props.color}</p>
   </div>
  )
}

export default ColorBlock