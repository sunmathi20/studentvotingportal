import { useState } from "react";
import {
  CheckCircle2,
  Users,
  Vote,
  ArrowRight,
} from "lucide-react";

import { Link } from "react-router-dom";

import { useAuth } from "../context/AuthContext";
import { candidates } from "../data/candidates";

import ElectionHero from "../components/election/ElectionHero";
import CandidateList from "../components/election/CandidateList";
import CandidateProfile from "../components/election/CandidateProfile";
import VoteModal from "../components/election/VoteModal";

const Dashboard = () => {
  const { user } = useAuth();

  const [selectedCandidate, setSelectedCandidate] =
    useState(null);

  const [showVoteModal, setShowVoteModal] =
    useState(false);

  const [voted, setVoted] = useState(
    !!localStorage.getItem("votedCandidate")
  );

  const handleVote = (candidate) => {
    setSelectedCandidate(candidate);
    setShowVoteModal(true);
  };

  const confirmVote = () => {
    localStorage.setItem(
      "votedCandidate",
      JSON.stringify(selectedCandidate)
    );

    setVoted(true);
    setShowVoteModal(false);
    setSelectedCandidate(null);
  };

  return (
    <div className="page">
      <section className="welcome-section">
        <div>
          <span className="page-label">
            STUDENT ELECTION 2026
          </span>

          <h1>
            Good evening, {user?.name || "Student"}.
          </h1>

          <p>
            Make your voice count today.
          </p>
        </div>

        <div className="eligible-badge">
          <CheckCircle2 size={17} />
          Eligible to vote
        </div>
      </section>

      <ElectionHero />

      <section className="section-header">
        <div>
          <span className="page-label">
            MEET THE CANDIDATES
          </span>

          <h2>Choose who represents you.</h2>
        </div>

        <Link
          to="/candidates"
          className="text-link"
        >
          View all
          <ArrowRight size={17} />
        </Link>
      </section>

      <CandidateList
        onView={setSelectedCandidate}
      />

      <section className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon purple">
            <Users size={21} />
          </div>

          <div>
            <strong>3</strong>
            <span>Candidates</span>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon pink">
            <Vote size={21} />
          </div>

          <div>
            <strong>
              {voted ? "Voted" : "Pending"}
            </strong>

            <span>Your voting status</span>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon green">
            <CheckCircle2 size={21} />
          </div>

          <div>
            <strong>LIVE</strong>
            <span>Election status</span>
          </div>
        </div>
      </section>

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

export default Dashboard;