const ResultCard = ({ candidate, votes, totalVotes }) => {

  const percentage =
    totalVotes === 0
      ? 0
      : Math.round((votes / totalVotes) * 100);

  return (
    <div className="result-card">

      <div className="result-header">

        <div>
          <h3>{candidate.name}</h3>
          <p>{candidate.department}</p>
        </div>

        <strong>
          {percentage}%
        </strong>

      </div>

      <div className="progress-bar">

        <div
          className="progress"
          style={{
            width: `${percentage}%`,
          }}
        />

      </div>

      <p className="vote-count">
        {votes} votes
      </p>

    </div>
  );
};

export default ResultCard;