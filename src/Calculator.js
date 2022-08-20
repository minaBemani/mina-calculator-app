import React, { useState } from "react";
import "./Calculator.css";

const Calculator = ({ toggle }) => {
  const [input, setInput] = useState("");

  const setButtonValue = (e) => {
    setInput(input + e.target.value);
  };
  const setPosNeg = () => {
    if (input < 0) setInput(Math.abs(input));
    else setInput(-Math.abs(input));
  };

  const calcPercent = () => {
    setInput(input / 100);
  };

  const evaluate = () => {
    try {
      setInput(eval(input));
    } catch (error) {
      setInput("error");
    }
  };

  const backSpace = () => {
    setInput(input.slice(0, -1));
  };

  return (
    <>
      <div className="calculator-container">
        <div
          className={
            toggle ? "calculator calculator2" : "calculator calculator1"
          }
        >
          <div className="inputContainer">
            <input
              type="text"
              value={input}
              className={toggle ? "inputBox inputBox2" : "inputBox inputBox1"}
            />
          </div>
          <div>
            <button
              onClick={(e) => setInput("")}
              className={
                toggle
                  ? "buttonBox buttonBox2 operatorBtn2"
                  : "buttonBox buttonBox1 operatorBtn1"
              }
            >
              C
            </button>
            <button
              onClick={setPosNeg}
              className={
                toggle
                  ? "buttonBox buttonBox2 operatorBtn2"
                  : "buttonBox buttonBox1 operatorBtn1"
              }
            >
              +/-
            </button>
            <button
              onClick={calcPercent}
              className={
                toggle
                  ? "buttonBox buttonBox2 operatorBtn2"
                  : "buttonBox buttonBox1 operatorBtn1"
              }
            >
              %
            </button>
            <button
              value="/"
              onClick={setButtonValue}
              className={
                toggle
                  ? "buttonBox buttonBox2 operatorBtn2"
                  : "buttonBox buttonBox1 operatorBtn1"
              }
            >
              ÷
            </button>
          </div>
          <div>
            <button
              value="7"
              onClick={setButtonValue}
              className={
                toggle ? "buttonBox buttonBox2" : "buttonBox buttonBox1"
              }
            >
              7
            </button>
            <button
              value="8"
              onClick={setButtonValue}
              className={
                toggle ? "buttonBox buttonBox2" : "buttonBox buttonBox1"
              }
            >
              8
            </button>
            <button
              value="9"
              onClick={setButtonValue}
              className={
                toggle ? "buttonBox buttonBox2" : "buttonBox buttonBox1"
              }
            >
              9
            </button>
            <button
              value="*"
              onClick={setButtonValue}
              className={
                toggle
                  ? "buttonBox buttonBox2 operatorBtn2"
                  : "buttonBox buttonBox1 operatorBtn1"
              }
            >
              ×
            </button>
          </div>
          <div>
            <button
              value="4"
              onClick={setButtonValue}
              className={
                toggle ? "buttonBox buttonBox2" : "buttonBox buttonBox1"
              }
            >
              4
            </button>
            <button
              value="5"
              onClick={setButtonValue}
              className={
                toggle ? "buttonBox buttonBox2" : "buttonBox buttonBox1"
              }
            >
              5
            </button>
            <button
              value="6"
              onClick={setButtonValue}
              className={
                toggle ? "buttonBox buttonBox2" : "buttonBox buttonBox1"
              }
            >
              6
            </button>
            <button
              value="-"
              onClick={setButtonValue}
              className={
                toggle
                  ? "buttonBox buttonBox2 operatorBtn2"
                  : "buttonBox buttonBox1 operatorBtn1"
              }
            >
              -
            </button>
          </div>
          <div>
            <button
              value="1"
              onClick={setButtonValue}
              className={
                toggle ? "buttonBox buttonBox2" : "buttonBox buttonBox1"
              }
            >
              1
            </button>
            <button
              value="2"
              onClick={setButtonValue}
              className={
                toggle ? "buttonBox buttonBox2" : "buttonBox buttonBox1"
              }
            >
              2
            </button>
            <button
              value="3"
              onClick={setButtonValue}
              className={
                toggle ? "buttonBox buttonBox2" : "buttonBox buttonBox1"
              }
            >
              3
            </button>
            <button
              value="+"
              onClick={setButtonValue}
              className={
                toggle
                  ? "buttonBox buttonBox2 operatorBtn2"
                  : "buttonBox buttonBox1 operatorBtn1"
              }
            >
              +
            </button>
          </div>
          <div>
            <button
              value="."
              onClick={setButtonValue}
              className={
                toggle ? "buttonBox buttonBox2" : "buttonBox buttonBox1"
              }
            >
              .
            </button>
            <button
              value="0"
              onClick={setButtonValue}
              className={
                toggle ? "buttonBox buttonBox2" : "buttonBox buttonBox1"
              }
            >
              0
            </button>
            <button
              onClick={backSpace}
              className={
                toggle ? "buttonBox buttonBox2" : "buttonBox buttonBox1"
              }
            >
              ⌫
            </button>
            <button
              value="="
              onClick={evaluate}
              className={
                toggle
                  ? "buttonBox buttonBox2 operatorBtn2"
                  : "buttonBox buttonBox1 operatorBtn1"
              }
            >
              =
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calculator;
