
import { NavLink, useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useEffect, useState } from "react";
import API from "../api/api";

function Navbar() {
  const navigate = useNavigate();
  const { isAuthenticated, user, logout } = useAuth();
  const [unread, setUnread] = useState(0);

  useEffect(() => {
    const fetchUnread = async () => {
      if (!isAuthenticated) {
        setUnread(0);
        return;
      }

      try {
        const res = await API.get("/notifications");
        const list = res.data.notifications || [];
        setUnread(list.filter((n) => !n.isRead).length);
      } catch (err) {
        setUnread(0);
      }
    };

    fetchUnread();
  }, [isAuthenticated]);

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        <span className="brand-icon">S</span>
        <span>
          Skill<span className="brand-highlight">Hive</span>
          <small className="brand-caption">Learn together. Grow together.</small>
        </span>
      </Link>

      <div className="navbar-links">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/skills">Explore Skills</NavLink>

        {isAuthenticated && (
          <>
            <NavLink to="/dashboard">Dashboard</NavLink>
            <NavLink to="/notifications" className="nav-notifications">
              Notifications
              {unread > 0 && (
                <span className="notif-badge">{unread}</span>
              )}
            </NavLink>
            <NavLink to="/add-skill">+ Add Skill</NavLink>
            <NavLink to="/profile">Profile</NavLink>
          </>
        )}

        {!isAuthenticated ? (
          <div className="nav-auth-actions">
            <NavLink to="/login" className="nav-login">Log in</NavLink>
            <Link to="/register" className="nav-register">
              Get Started <span aria-hidden="true">↗</span>
            </Link>
          </div>
        ) : (
          <button
            type="button"
            className="btn btn-secondary btn-small"
            onClick={handleLogout}
          >
            Log out
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
