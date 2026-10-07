import { useState } from "react";
import { Vote, ArrowRight, ShieldCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [studentId, setStudentId] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!studentId.trim()) {
      setError("Please enter your Student ID.");
      return;
    }

    login(studentId.trim());

    navigate("/dashboard");
  };

  const handleDemoLogin = () => {
    login("MCA2026SUN");
    navigate("/dashboard");
  };

  return (
    <div className="login-page">
      <div className="login-left">
        <div className="login-brand">
          <div className="brand-icon">
            <Vote size={22} />
          </div>

          <div>
            <strong>Campus'26</strong>
            <span>Student Elections</span>
          </div>
        </div>

        <div className="login-content">
          <span className="eyebrow">
            STUDENT ELECTION 2026
          </span>

          <h1>
            Your voice.
            <br />
            Your campus.
          </h1>

          <p>
            A simple and secure way to participate in
            your campus election.
          </p>
        </div>

        {/* <div className="login-footer">
          <ShieldCheck size={17} />
          <span>Secure student voting portal</span>
        </div> */}
      </div>

      <div className="login-right">
        <div className="login-box">
          <div className="mobile-logo">
            <Vote size={25} />
          </div>

          <span className="page-label">
            WELCOME BACK
          </span>

          <h2>Sign in to vote.</h2>

          <p>
            Enter your student ID to access the election
            dashboard.
          </p>

          <form onSubmit={handleSubmit}>
            <label>Student ID</label>

            <input
              type="text"
              placeholder="e.g. MCA2026SUN"
              value={studentId}
              onChange={(e) => {
                setStudentId(e.target.value);
                setError("");
              }}
            />

            {error && (
              <div className="form-error">
                {error}
              </div>
            )}

            <button
              type="submit"
              className="primary-button login-button"
            >
              Continue
              <ArrowRight size={18} />
            </button>
          </form>

          <button
            className="demo-button"
            onClick={handleDemoLogin}
          >
            Use Demo Student Account
          </button>

          <div className="login-note">
            <ShieldCheck size={15} />
            <span>
              Your vote is recorded only once.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;