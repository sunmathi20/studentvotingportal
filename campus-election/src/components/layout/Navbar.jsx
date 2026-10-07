import {
  Bell,
  Vote,
} from "lucide-react";

import { useAuth } from "../../context/AuthContext";

const Navbar = () => {
  const { user } = useAuth();

  return (
    <header className="topbar">
      <div className="topbar-brand">
        <div className="brand-mark">
          <Vote size={20} />
        </div>

        <div>
          <strong>Campus'26</strong>
          <span>Student Elections</span>
        </div>
      </div>

      <div className="topbar-right">
        <button className="notification-button">
          <Bell size={19} />
          <span className="notification-dot" />
        </button>

        <div className="user-profile">
          <div className="user-avatar">
            {user?.name?.charAt(0) || "S"}
          </div>

          <div className="user-info">
            <strong>
              {user?.name || "Student"}
            </strong>

            <span>
              {user?.studentId || "Student ID"}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;