import React from "react";

function Awards() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col p-5">
          <img src="/Media/largestBroker.svg" alt="awards" />
        </div>
        <div className="col p-5">
          <h1>Largest stock broker in India</h1>
          <p className="mb-5">
            2+ million Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>
          <div className="row" style={{ padding: "0 18px" }}>
            <ul className="col">
              <li>Features and Options</li>
              <li>Commodity derivatives</li>
              <li>Currency derivatives</li>
            </ul>
            <ul className="col">
              <li>Stocks & IPOs</li>
              <li>Direct mutual funds</li>
              <li>Bonds and</li>
            </ul>
          </div>
          <img
            style={{ width: "100%" }}
            src="/Media/pressLogos.png"
            alt="pressImg"
          />
        </div>
      </div>
    </div>
  );
}

export default Awards;
