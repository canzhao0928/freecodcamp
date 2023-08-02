export default function Calculator() {
  return (
    <div className="container mt-5" style={{ width: "600px" }}>
      <div className="row">
        <button
          className="col-6 btn btn-outline-secondary rounded-0"
          id="clear"
          style={{ height: "100px" }}
        >
          AC
        </button>
        <button className="col btn btn-outline-secondary rounded-0" id="divide">
          /
        </button>
        <button
          className="col btn btn-outline-secondary rounded-0"
          id="multiply"
        >
          *
        </button>
      </div>
      <div className="row">
        <button
          className="col btn btn-outline-secondary rounded-0"
          id="seven"
          style={{ height: "100px" }}
        >
          7
        </button>
        <button className="col btn btn-outline-secondary rounded-0" id="eight">
          8
        </button>
        <button className="col btn btn-outline-secondary rounded-0" id="nine">
          9
        </button>
        <button
          className="col btn btn-outline-secondary rounded-0"
          id="subtract"
        >
          -
        </button>
      </div>
      <div className="row">
        <button
          className="col btn btn-outline-secondary rounded-0"
          id="four"
          style={{ height: "100px" }}
        >
          4
        </button>
        <button className="col btn btn-outline-secondary rounded-0" id="five">
          5
        </button>
        <button className="col btn btn-outline-secondary rounded-0" id="six">
          6
        </button>
        <button className="col btn btn-outline-secondary rounded-0" id="add">
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
            >
              1
            </button>
            <button
              className="col btn btn-outline-secondary rounded-0"
              id="two"
            >
              2
            </button>
            <button
              className="col btn btn-outline-secondary rounded-0"
              id="three"
            >
              3
            </button>
          </div>
          <div className="row">
            <button
              className="col-8 btn btn-outline-secondary rounded-0"
              id="zero"
              style={{ height: "100px" }}
            >
              0
            </button>
            <button
              className="col btn btn-outline-secondary rounded-0"
              id="decimal"
            >
              .
            </button>
          </div>
        </div>
        <button
          className="col-3 btn btn-outline-secondary rounded-0"
          id="equals"
        >
          =
        </button>
      </div>
    </div>
  );
}
