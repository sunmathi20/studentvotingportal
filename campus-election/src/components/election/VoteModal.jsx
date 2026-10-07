import {
  X,
  AlertTriangle,
  CheckCircle2,
} from "lucide-react";

const VoteModal = ({
  candidate,
  onClose,
  onConfirm,
}) => {
  if (!candidate) return null;

  return (
    <div className="modal-overlay">
      <div className="vote-modal">
        <button
          className="modal-close"
          onClick={onClose}
        >
          <X size={20} />
        </button>

        <div className="confirm-icon">
          <CheckCircle2 size={28} />
        </div>

        <span className="page-label">
          CONFIRM YOUR VOTE
        </span>

        <h2>Vote for {candidate.name}?</h2>

        <p>
          You are about to cast your vote for
          <strong> {candidate.name}</strong>.
        </p>

        <div className="selected-candidate">
          <img
            src={candidate.photo}
            alt={candidate.name}
          />

          <div>
            <strong>{candidate.name}</strong>
            <span>
              {candidate.department} ·{" "}
              {candidate.year}
            </span>
          </div>
        </div>

        <div className="warning-box">
          <AlertTriangle size={18} />

          <span>
            Once submitted, your vote cannot be
            changed.
          </span>
        </div>

        <div className="modal-actions">
          <button
            className="secondary-button"
            onClick={onClose}
          >
            Go back
          </button>

          <button
            className="primary-button"
            onClick={onConfirm}
          >
            Confirm vote
          </button>
        </div>
      </div>
    </div>
  );
};

export default VoteModal;