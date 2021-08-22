import React, { useEffect, useState } from "react";
import KeyboardOb from "./KeyBoard";
import "./Main.css";

const Main = () => {
	const [result, setResult] = useState("");
  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  };

  const clear = () => {
    setResult("");
  };

  const backspace = () => {
    setResult(result.slice(0, -1));
  };

  const calculator = () => {
    try {
      setResult(eval(result).toString());
    } catch (err) {
      setResult("Error");
    }
  };

  return (
    <div className="container">
      <form>
        <input placeholder='0' autoFocus='on' className="input" value={result} />
      </form>
      <div className="keyboard">
        <button className="clear" onClick={clear}>
          Clear
        </button>
        <button className="backspace" onClick={backspace}>
          C
        </button>
        {KeyboardOb.map((item) => {
          return (
            <button
              className={item.className}
              onClick={handleClick}
              name={item.name}
            >
							{item.name}
            </button>
          );
        })}
        <button className="equal" onClick={calculator}>
          =
        </button>
      </div>
    </div>
  );
};

export default Main
