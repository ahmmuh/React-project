import React from "react";

function Button(props) {
  return (
    <button id="toggle-btn" className="btn bordered btn-auth  " onClick={props.handlerClick}>
      {props.title}
    </button>
  );
}

export default Button;
