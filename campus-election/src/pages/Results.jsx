import { Trophy, Users } from "lucide-react";

const Results = () => {
  const results = [
    {
      id: 1,
      name: "Sunmathi",
      department: "MCA",
      votes: 142,
      color: "#635BFF",
    },
    {
      id: 2,
      name: "Rithika",
      department: "Zoology",
      votes: 118,
      color: "#EC4899",
    },
    {
      id: 3,
      name: "Shreeja",
      department: "Botany",
      votes: 86,
      color: "#F97316",
    },
  ];

  const totalVotes = results.reduce(
    (sum, candidate) =>
      sum + candidate.votes,
    0
  );

  return (
    <div className="page">
      <div className="page-heading">
        <span className="page-label">
          ELECTION RESULTS
        </span>

        <h1>Current results.</h1>

        <p>
          Live voting results for Campus'26.
        </p>
      </div>

      <div className="result-summary">
        <div>
          <div className="result-summary-icon">
            <Users size={22} />
          </div>

          <div>
            <span>Total votes</span>
            <strong>{totalVotes}</strong>
          </div>
        </div>

        <div>
          <div className="result-summary-icon">
            <Trophy size={22} />
          </div>

          <div>
            <span>Leading candidate</span>
            <strong>Sunmathi</strong>
          </div>
        </div>
      </div>

      <div className="results-list">
        {results.map(
          (candidate, index) => {
            const percentage = Math.round(
              (candidate.votes /
                totalVotes) *
                100
            );

            return (
              <div
                className={`result-card ${
                  index === 0
                    ? "winner"
                    : ""
                }`}
                key={candidate.id}
              >
                <div
                  className="result-rank"
                  style={{
                    background:
                      candidate.color,
                  }}
                >
                  {index + 1}
                </div>

                <div className="result-person">
                  <strong>
                    {candidate.name}
                  </strong>

                  <span>
                    {candidate.department}
                  </span>
                </div>

                <div className="result-progress">
                  <div className="progress-top">
                    <span>
                      {candidate.votes} votes
                    </span>

                    <strong>
                      {percentage}%
                    </strong>
                  </div>

                  <div className="progress-track">
                    <div
                      className="progress-fill"
                      style={{
                        width: `${percentage}%`,
                        background:
                          candidate.color,
                      }}
                    />
                  </div>
                </div>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default Results;