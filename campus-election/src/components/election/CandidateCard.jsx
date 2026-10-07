import { ArrowUpRight } from "lucide-react";

const CandidateCard = ({
  candidate,
  onView,
}) => {
  return (
    <article className="candidate-card">
      <div
        className="candidate-photo"
        style={{
          background: candidate.color,
        }}
      >
        <img
          src={candidate.photo}
          alt={candidate.name}
        />

        <div className="candidate-number">
          0{candidate.id}
        </div>
      </div>

      <div className="candidate-info">
        <span className="candidate-position">
          {candidate.position}
        </span>

        <h3>{candidate.name}</h3>

        <p>
          {candidate.department} ·{" "}
          {candidate.year}
        </p>

        <button
          className="view-candidate"
          onClick={() => onView(candidate)}
        >
          View profile
          <ArrowUpRight size={17} />
        </button>
      </div>
    </article>
  );
};

export default CandidateCard;