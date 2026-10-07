import {
  X,
  CheckCircle2,
} from "lucide-react";

const CandidateProfile = ({
  candidate,
  onClose,
  onVote,
}) => {
  if (!candidate) return null;

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
    >
      <div
        className="profile-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="modal-close"
          onClick={onClose}
        >
          <X size={20} />
        </button>

        <div
          className="profile-photo"
          style={{
            background: candidate.color,
          }}
        >
          <img
            src={candidate.photo}
            alt={candidate.name}
          />
        </div>

        <div className="profile-details">
          <span className="candidate-position">
            {candidate.position}
          </span>

          <h2>{candidate.name}</h2>

          <p className="profile-course">
            {candidate.department} ·{" "}
            {candidate.year}
          </p>

          <blockquote>
            “{candidate.quote}”
          </blockquote>

          <h4>Manifesto</h4>

          <div className="manifesto-list">
            {candidate.manifesto.map(
              (item, index) => (
                <div
                  key={index}
                  className="manifesto-item"
                >
                  <CheckCircle2 size={17} />
                  <span>{item}</span>
                </div>
              )
            )}
          </div>

          <button
            className="primary-button full-button"
            onClick={() => {
              onClose();
              onVote(candidate);
            }}
          >
            Vote for {candidate.name}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CandidateProfile;