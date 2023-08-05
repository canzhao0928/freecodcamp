import { useState } from "react";

export default function Calculator() {
  const [formula, setFormula] = useState("0");
  const [lastNum, setLastNum] = useState("0");
  const handleClear = () => {
    setFormula("0");
    setLastNum("");
  };
  const checkLastOperator = (str) => {
    //if the last element is an operator, delete it
    const array = str.split("");
    while (
      array[array.length - 1] === "+" ||
      array[array.length - 1] === "-" ||
      array[array.length - 1] === "*" ||
      array[array.length - 1] === "/"
    ) {
      array.pop();
    }
    return array.join("");
  };

  const handleClick = (e) => {
    if (formula === "0") {
      if (
        e.target.innerText === "+" ||
        e.target.innerText === "-" ||
        e.target.innerText === "*" ||
        e.target.innerText === "/" ||
        e.target.innerText === "."
      ) {
        if (e.target.innerText === ".") {
          setLastNum("0.");
        } else {
          setLastNum("");
        }
        setFormula(formula + e.target.innerText);
      } else {
        setFormula(e.target.innerText);
        setLastNum(e.target.innerText);
      }
    } else {
      if (
        e.target.innerText === "+" ||
        e.target.innerText === "*" ||
        e.target.innerText === "/"
      ) {
        setLastNum("");
        const str = checkLastOperator(formula) + e.target.innerText;
        setFormula(str);
      } else if (e.target.innerText === "-") {
        const array = formula.split("");
        if (array[array.length - 1] !== "-") {
          setFormula(formula + e.target.innerText);
          setLastNum("");
        }
      } else if (e.target.innerText === "." && lastNum.includes(".")) {
        return;
      } else {
        if (lastNum === "0" && e.target.innerText === "0") {
          setFormula(formula);
          setLastNum("0");
        } else {
          setFormula(formula + e.target.innerText);
          setLastNum(lastNum + e.target.innerText);
        }
      }
    }
  };
  const handleCal = () => {
    const newFormula = checkLastOperator(formula);
    let result = eval(newFormula);
    const str = String(result);
    if (str.includes(".") && str.split(".")[1].length > 4) {
      result = result.toFixed(4);
    }
    setFormula(String(result));
  };
  return (
    <div className="container mt-5" style={{ width: "600px" }}>
      <div className="row">
        <input
          className="text-end fs-1"
          style={{ height: "100px" }}
          id="display"
          type="text"
          value={formula}
          readOnly
        />
      </div>
      <div className="row">
        <button
          className="col-6 btn btn-outline-secondary rounded-0"
          id="clear"
          style={{ height: "100px" }}
          onClick={handleClear}
        >
          AC
        </button>
        <button
          className="col btn btn-outline-secondary rounded-0"
          id="divide"
          onClick={handleClick}
        >
          /
        </button>
        <button
          className="col btn btn-outline-secondary rounded-0"
          id="multiply"
          onClick={handleClick}
        >
          *
        </button>
      </div>
      <div className="row">
        <button
          className="col btn btn-outline-secondary rounded-0"
          id="seven"
          style={{ height: "100px" }}
          onClick={handleClick}
        >
          7
        </button>
        <button
          className="col btn btn-outline-secondary rounded-0"
          id="eight"
          onClick={handleClick}
        >
          8
        </button>
        <button
          className="col btn btn-outline-secondary rounded-0"
          id="nine"
          onClick={handleClick}
        >
          9
        </button>
        <button
          className="col btn btn-outline-secondary rounded-0"
          id="subtract"
          onClick={handleClick}
        >
          -
        </button>
      </div>
      <div className="row">
        <button
          className="col btn btn-outline-secondary rounded-0"
          id="four"
          style={{ height: "100px" }}
          onClick={handleClick}
        >
          4
        </button>
        <button
          className="col btn btn-outline-secondary rounded-0"
          id="five"
          onClick={handleClick}
        >
          5
        </button>
        <button
          className="col btn btn-outline-secondary rounded-0"
          id="six"
          onClick={handleClick}
        >
          6
        </button>
        <button
          className="col btn btn-outline-secondary rounded-0"
          id="add"
          onClick={handleClick}
        >
          +
        </button>
      </div>
      <div className="row">
        <div className="col-9">
          <div className="row">
            <button
              className="col btn btn-outline-secondary rounded-0"
              id="one"
              style={{ height: "100px" }}
              onClick={handleClick}
            >
              1
            </button>
            <button
              className="col btn btn-outline-secondary rounded-0"
              id="two"
              onClick={handleClick}
            >
              2
            </button>
            <button
              className="col btn btn-outline-secondary rounded-0"
              id="three"
              onClick={handleClick}
            >
              3
            </button>
          </div>
          <div className="row">
            <button
              className="col-8 btn btn-outline-secondary rounded-0"
              id="zero"
              style={{ height: "100px" }}
              onClick={handleClick}
            >
              0
            </button>
            <button
              className="col btn btn-outline-secondary rounded-0"
              id="decimal"
              onClick={handleClick}
            >
              .
            </button>
          </div>
        </div>
        <button
          className="col-3 btn btn-outline-secondary rounded-0"
          id="equals"
          onClick={handleCal}
        >
          =
        </button>
      </div>
    </div>
  );
}
