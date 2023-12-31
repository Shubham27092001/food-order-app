import React from "react";

import Classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={Classes.Input}>
      <label htmlfor={props.input.id}>{props.label}</label>
      <input ref={ref}{...props.input} />
    </div>
  );
});
export default Input;
