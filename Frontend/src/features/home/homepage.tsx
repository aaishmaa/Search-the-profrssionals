import { useState } from "react";
import { getAllUser } from "../../shared/config/api";
import "./homepage.css";
import { useNavigate } from "react-router-dom";

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
    <div className="homepage-container">
      {/* Top section with specific color background */}
      <div className="top-section">
        <div className="search-container">
          <h2 className="page-title">Search Professionals</h2>

          {/* Search Bar */}
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

          {/* Filter badges */}
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
      {/* Bottom white section */}
      <button onClick={() => navigate("/profile")}>
        <div className="results-section">
          <div className="results-container">
            {/* Filter dropdown in top right */}
            <div className="filter-top-right">
              <select className="filter-select-bottom">
                <option>Filter</option>
              </select>
            </div>

            {loading && <p className="loading-text">Loading...</p>}
            {error && <p className="error-text">{error}</p>}

            {userList.length > 0 && (
              <div>
                <h3 className="results-title">Results:</h3>
                <ul className="results-list">
                  {userList.map((user) => (
                    <li key={user._id} className="user-item">
                      <strong className="username">{user.username}</strong>{" "}
                      <br />
                      <small className="user-date">
                        {new Date(user.createdAt).toLocaleString()}
                      </small>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </button>
         
    </div>
  );
}
