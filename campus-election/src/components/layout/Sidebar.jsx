import {
  LayoutDashboard,
  Users,
  Vote,
  BarChart3,
  LogOut,
  Circle,
} from "lucide-react";

import { NavLink } from "react-router-dom";

import { useAuth } from "../../context/AuthContext";

const Sidebar = () => {
  const { logout } = useAuth();

  const navItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      name: "Candidates",
      path: "/candidates",
      icon: Users,
    },
    {
      name: "Cast Vote",
      path: "/vote",
      icon: Vote,
    },
    {
      name: "Results",
      path: "/results",
      icon: BarChart3,
    },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-label">
        ELECTION
      </div>

      <nav className="sidebar-nav">
        {navItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `nav-item ${
                  isActive ? "active" : ""
                }`
              }
            >
              <Icon size={19} />
              <span>{item.name}</span>
            </NavLink>
          );
        })}
      </nav>

      <div className="sidebar-bottom">
        <div className="election-status">
          <Circle
            size={9}
            fill="currentColor"
          />

          <div>
            <strong>Election Live</strong>
            <span>Voting is open</span>
          </div>
        </div>

        <button
          className="logout-button"
          onClick={logout}
        >
          <LogOut size={17} />
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;