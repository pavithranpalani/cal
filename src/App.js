import React, { useState } from "react";
import "./App.css";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleInput = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleClear = () => {
    setInput("");
    setResult("");
  };
  
  const handleCalculate = () => {
    try {
      setResult(eval(input).toString());
    } catch (error) {
      setResult("Error");
    }
  };

  return (
    <div className="calculator">
      <h1>React Calculator</h1>
      <input type="text" className="input-field" value={input} readOnly />
      {result && <div className="result">{result}</div>}
      <div className="buttons">
        <div className="button-row">
          <button className="button" onClick={() => handleInput("7")}>
            7
          </button>
          <button className="button" onClick={() => handleInput("8")}>
            8
          </button>
          <button className="button" onClick={() => handleInput("9")}>
            9
          </button>
          <button className="button" onClick={() => handleInput("+")}>
            +
          </button>
        </div>
        <div className="button-row">
          <button className="button" onClick={() => handleInput("4")}>
            4
          </button>
          <button className="button" onClick={() => handleInput("5")}>
            5
          </button>
          <button className="button" onClick={() => handleInput("6")}>
            6
          </button>
          <button className="button" onClick={() => handleInput("-")}>
            -
          </button>
        </div>
        <div className="button-row">
          <button className="button" onClick={() => handleInput("1")}>
            1
          </button>
          <button className="button" onClick={() => handleInput("2")}>
            2
          </button>
          <button className="button" onClick={() => handleInput("3")}>
            3
          </button>
          <button className="button" onClick={() => handleInput("*")}>
            *
          </button>
        </div>
        <div className="button-row">
          <button className="button" onClick={handleClear}>
            C
          </button>
          <button className="button" onClick={() => handleInput("0")}>
            0
          </button>
          <button className="button" onClick={handleCalculate}>
            =
          </button>
          <button className="button" onClick={() => handleInput("/")}>
            /
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;