import { useState } from "react";

import CandidateList from "../components/election/CandidateList";
import CandidateProfile from "../components/election/CandidateProfile";
import VoteModal from "../components/election/VoteModal";

const Candidates = () => {
  const [selectedCandidate, setSelectedCandidate] =
    useState(null);

  const [showVoteModal, setShowVoteModal] =
    useState(false);

  const handleVote = (candidate) => {
    setSelectedCandidate(candidate);
    setShowVoteModal(true);
  };

  const confirmVote = () => {
    localStorage.setItem(
      "votedCandidate",
      JSON.stringify(selectedCandidate)
    );

    setShowVoteModal(false);
    setSelectedCandidate(null);
  };

  return (
    <div className="page">
      <div className="page-heading">
        <span className="page-label">
          CANDIDATES
        </span>

        <h1>Meet your candidates.</h1>

        <p>
          Learn about their priorities before
          making your choice.
        </p>
      </div>

      <CandidateList
        onView={setSelectedCandidate}
      />

      <CandidateProfile
        candidate={selectedCandidate}
        onClose={() =>
          setSelectedCandidate(null)
        }
        onVote={handleVote}
      />

      <VoteModal
        candidate={
          showVoteModal
            ? selectedCandidate
            : null
        }
        onClose={() =>
          setShowVoteModal(false)
        }
        onConfirm={confirmVote}
      />
    </div>
  );
};

export default Candidates;