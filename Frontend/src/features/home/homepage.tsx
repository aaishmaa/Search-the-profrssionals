import { useState } from "react";
import { getAllUser } from "../../shared/config/api";
import "./homepage.css";
import { useNavigate } from "react-router-dom";
import ProfileHeader from "../../shared/components/header/ProfileHeader";

interface User {
  _id: string;
  username: string;
  createdAt: string;
}

export default function Homepage() {
  const [search, setSearch] = useState("");
  const [userList, setUserList] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  const fetchUsers = (term: string) => {
    setLoading(true);
    setError(null);
    getAllUser(term)
      .then((res) => setUserList(res.data))
      .catch(() => setError("Failed to fetch users"))
      .finally(() => setLoading(false));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetchUsers(search.trim());
  };

  return (
    <>
      <ProfileHeader />
      <div className="homepage-container">
        {/* Top section */}
        <div className="top-section">
          <div className="search-container">
            <h2 className="page-title">Search Professionals</h2>
            <form className="search-wrapper" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Search by username..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="search-input"
              />
              <button type="submit" className="search-button">
                Search
              </button>
            </form>
            <div className="filter-badges">
              <span className="badge">All</span>
              <span className="badge">Designers</span>
              <span className="badge">Developers</span>
              <span className="badge">Consultants</span>
              <span className="badge">Marketing</span>
              <span className="badge">Managers</span>
            </div>
          </div>
        </div>
        {/* Results section */}
        <div className="results-section">
          <div className="results-header">
            <div className="results-title-container">
              <h3 className="results-title">Results</h3>
            </div>
            <div className="filter-top-right">
              <select className="filter-select-bottom">
                <option>Filter</option>
              </select>
            </div>
          </div>
          <div className="results-container">
            {loading && <p className="loading-text">Loading...</p>}
            {error && <p className="error-text">{error}</p>}
            {userList.length > 0 ? (
              <ul className="results-list">
                {userList.map((user) => (
                  <li
                    key={user._id}
                    className="user-item"
                    onClick={() => navigate("/profile")}
                    tabIndex={0}
                    role="button"
                  >
                    <strong className="username">{user.username}</strong>
                    <br />
                    <small className="user-date">
                      {new Date(user.createdAt).toLocaleString()}
                    </small>
                  </li>
                ))}
              </ul>
            ) : (
              !loading && <p className="no-results-text">No users found.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
