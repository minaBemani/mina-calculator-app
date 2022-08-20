import React, { useState } from "react";
import Calculator from "./Calculator";
import "./Toggle.css";

const Toggle = () => {
  const [toggle, setToggle] = useState(false);

  const toggleHandler = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <div className="toggle-switch" onChange={toggleHandler}>
        <label className="switch">
          <input type="checkbox" />
          <span className="slider round"></span>
        </label>
      </div>
      <Calculator toggle={toggle} />
    </>
  );
};

export default Toggle;
