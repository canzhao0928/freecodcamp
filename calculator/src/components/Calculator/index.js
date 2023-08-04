import { useState } from "react";

export default function Calculator() {
  const [formula, setFormula] = useState("123");
  const [lastNum, setLastNum] = useState("");
  const handleClear = () => {
    setFormula("");
  };

  const handleClick = (e) => {
    if (
      e.target.innerText === "+" ||
      e.target.innerText === "-" ||
      e.target.innerText === "*" ||
      e.target.innerText === "/"
    ) {
      setLastNum("");
    } else {
      setLastNum(lastNum + e.target.innerText);
    }
    if (e.target.innerText === "." && lastNum.includes(".")) {
      return;
    }
    setFormula(formula + e.target.innerText);
  };
  const handleCal = () => {
    const nums = formula.split(/[+|*|/|-]/).filter((num) => num !== "");
    let operator = formula.split(/[0-9|.]+/).filter((op) => op !== "");

    operator = operator.map((op) => {
      if (op.length > 1) {
        console.log("in");
        op = op.slice(op.length - 1);
        console.log(op);
      }
      return op;
    });
    console.log(nums);
    console.log(operator);
    let newFormula = "";
    for (let i = 0; i < nums.length; i++) {
      if (nums.length === operator.length) {
        newFormula += operator[i] + nums[i];
      } else {
        if (i === nums.length - 1) {
          newFormula += nums[i];
        } else {
          newFormula += nums[i] + operator[i];
        }
      }
    }
    let result = eval(newFormula);
    const str = String(result);
    if (str.includes(".") && str.split(".")[1].length > 4) {
      result = result.toFixed(4);
    }
    setFormula(result);
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
