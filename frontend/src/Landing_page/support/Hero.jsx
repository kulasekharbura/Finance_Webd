import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="row p-5 " id="supportWrapper">
        <h2 className="col">Support Portal</h2>
        <a className="col" href="">
          Track Tickets
        </a>
      </div>
      <div className="row p-5 m-3">
        <div className="col-6 p-3">
          <h4>Search for an answer or browse help topics to create a ticket</h4>
          <input placeholder="Eg. how do I activate F&O" />
          <br />
          <a style={{ paddingRight: "10px" }} href="">
            Track account opening
          </a>
          <a style={{ paddingRight: "10px" }} href="">
            Track segment activation
          </a>
          <a style={{ paddingRight: "10px" }} href="">
            Intraday margins
          </a>
          <a style={{ paddingRight: "10px" }} href="">
            Kite user manual
          </a>
        </div>
        <div className="col-6 p-3">
          <h4>Featured</h4>
          <ol>
            <li>
              <a href="">Current Takeovers and Delisting - January 2024</a>
            </li>
            <li>
              <a href="">Latest Intraday leverages - MIS & CO</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
