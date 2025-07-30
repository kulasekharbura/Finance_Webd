import React from "react";

function Stats() {
  return (
    <div className="container p-3">
      <div className="row p-5">
        <div className="col p-5">
          <h1 className="mb-5">Trust with confidence</h1>
          <h2 className="fs-4">Customer-first always</h2>
          <p className="text-muted">
            That's why 1.3+ crore customers trust Zerodha wit 3.5+ lakh crores
            worth of equity inverstments.
          </p>
          <h2 className="fs-4">No spam or gimmicks</h2>
          <p className="text-muted">
            NO dimmicks, spam, "gamification", or annoying push notifications,
            High quality apps that you use at your pace, the way you like.
          </p>
          <h2 className="fs-4">The Zerodha universe</h2>
          <p className="text-muted">
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>
          <h2 className="fs-4">Do better with money</h2>
          <p className="text-muted">
            With initiatives like Nudge and KIll Switch, we don't jus
            tfacilitate transactions, but actively help you do better with your
            money.
          </p>
        </div>
        <div className="col p-5">
          <img
            style={{ width: "100%" }}
            src="\Media\ecosystem.png"
            alt="ecoImg"
          />
          <div className="text-center">
            <a className="mx-5" style={{ textDecoration: "none" }} href="">
              Explore our prodects
              <i class="fa fa-arrow-right" aria-hidden="true"></i>
            </a>
            <a style={{ textDecoration: "none" }} href="">
              Try Kite demo<i class="fa fa-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
