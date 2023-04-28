import React from "react";
import './Button.css'

function Button(props) {
  return (
    <div className="ButtonSection">
      <button>{props.children} {props.name}</button>
    </div>
  );
}

export default Button;
