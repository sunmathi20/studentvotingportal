import { useState } from "react";

import {
  CheckCircle2,
  Vote as VoteIcon,
} from "lucide-react";

import { candidates } from "../data/candidates";
import VoteModal from "../components/election/VoteModal";

const Vote = () => {
  const [selected, setSelected] =
    useState(null);

  const [showModal, setShowModal] =
    useState(false);

  const [confirmed, setConfirmed] =
    useState(
      !!localStorage.getItem(
        "votedCandidate"
      )
    );

  const handleConfirm = () => {
    localStorage.setItem(
      "votedCandidate",
      JSON.stringify(selected)
    );

    setConfirmed(true);
    setShowModal(false);
    setSelected(null);
  };

  if (confirmed) {
    return (
      <div className="page">
        <div className="vote-success">
          <div className="success-circle">
            <CheckCircle2 size={42} />
          </div>

          <span className="page-label">
            VOTE RECORDED
          </span>

          <h1>
            Your voice has been counted.
          </h1>

          <p>
            Thank you for participating in the
            Campus'26 Student Elections.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="page">
      <div className="page-heading">
        <span className="page-label">
          CAST YOUR VOTE
        </span>

        <h1>Who gets your vote?</h1>

        <p>
          Select one candidate. You can review
          your choice before submitting.
        </p>
      </div>

      <div className="vote-screen">
        {candidates.map((candidate) => (
          <button
            key={candidate.id}
            className={`vote-choice ${
              selected?.id === candidate.id
                ? "active"
                : ""
            }`}
            onClick={() =>
              setSelected(candidate)
            }
          >
            <div
              className="vote-avatar"
              style={{
                background: candidate.color,
              }}
            >
              <img
                src={candidate.photo}
                alt={candidate.name}
              />
            </div>

            <div className="vote-choice-info">
              <strong>
                {candidate.name}
              </strong>

              <span>
                {candidate.department}
              </span>
            </div>

            <div className="radio">
              {selected?.id ===
                candidate.id && (
                <span />
              )}
            </div>
          </button>
        ))}
      </div>

      {selected && (
        <div className="vote-footer">
          <div>
            <VoteIcon size={18} />

            <span>
              Selected:{" "}
              <strong>
                {selected.name}
              </strong>
            </span>
          </div>

          <button
            onClick={() =>
              setShowModal(true)
            }
            className="primary-button"
          >
            Review vote
          </button>
        </div>
      )}

      <VoteModal
        candidate={
          showModal ? selected : null
        }
        onClose={() =>
          setShowModal(false)
        }
        onConfirm={handleConfirm}
      />
    </div>
  );
};

export default Vote;