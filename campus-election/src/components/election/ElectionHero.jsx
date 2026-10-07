import {
  ArrowRight,
  CheckCircle2,
  Clock,
} from "lucide-react";

import { Link } from "react-router-dom";

const ElectionHero = () => {
  return (
    <section className="election-hero">
      <div className="hero-glow" />

      <div className="hero-content">
        <div className="hero-status">
          <CheckCircle2 size={17} />
          VOTING IS LIVE
        </div>

        <h1>
          Your voice.
          <br />
          <span>Your campus.</span>
        </h1>

        <p>
          Student Council Election 2026
        </p>

        <Link
          to="/vote"
          className="hero-button"
        >
          Cast your vote
          <ArrowRight size={18} />
        </Link>
      </div>

      <div className="countdown">
        <div className="countdown-title">
          <Clock size={17} />
          Voting closes in
        </div>

        <div className="countdown-grid">
          <div>
            <strong>08</strong>
            <span>HRS</span>
          </div>

          <i>:</i>

          <div>
            <strong>42</strong>
            <span>MIN</span>
          </div>

          <i>:</i>

          <div>
            <strong>17</strong>
            <span>SEC</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ElectionHero;