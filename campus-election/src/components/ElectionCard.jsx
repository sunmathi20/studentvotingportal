import { CalendarDays, Clock, CheckCircle } from "lucide-react";

const ElectionCard = () => {
  return (
    <div className="election-card">

      <div>
        <span className="status-badge">
          <CheckCircle size={15} />
          Voting Open
        </span>

        <h2>Student Council Election 2026</h2>

        <p>
          Choose your preferred candidate for Student President.
        </p>
      </div>

      <div className="election-details">

        <div>
          <CalendarDays size={18} />
          <span>7 October 2026</span>
        </div>

        <div>
          <Clock size={18} />
          <span>9:00 AM - 5:00 PM</span>
        </div>

      </div>

    </div>
  );
};

export default ElectionCard;