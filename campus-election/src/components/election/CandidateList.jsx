import CandidateCard from "./CandidateCard";
import { candidates } from "../../data/candidates";

const CandidateList = ({ onView }) => {
  return (
    <div className="candidate-grid">
      {candidates.map((candidate) => (
        <CandidateCard
          key={candidate.id}
          candidate={candidate}
          onView={onView}
        />
      ))}
    </div>
  );
};

export default CandidateList;