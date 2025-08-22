import React, { useState } from "react";
import "./Profile.css";
import ProfileHeader from "../../shared/components/header/ProfileHeader";

export default function Profile() {
  const [activeTab, setActiveTab] = useState("posts");

  return (
    <>
      <ProfileHeader />
      <div className="profile-container">
        <div className="profile-card">
          <div className="profile-header">
            <div className="avatar-section">
              <img
                src="../../src/assets/profile.png"
                alt="Avatar"
                className="avatar"
              />
              <div className="status-indicator"></div>
            </div>

            <div className="profile-main-info">
              <div className="user-details">
                <h1>Alex Morgan</h1>
                <p className="headline">
                  UX/UI Designer & Front-End Developer | Passionate about Design
                  & Innovation
                </p>
                <p className="location">
                  San Francisco, California, United States{" "}
                  <span className="contact-info">Contact info</span>
                </p>
                <p className="connections">245 connections</p>
              </div>

              <div className="action-buttons">
                <button className="btn btn-primary">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                  >
                    <path d="M9.4 3.4L8 0 6.6 3.4 3 4.1 5.5 6.7 5 10.3 8 8.8 11 10.3 10.5 6.7 13 4.1 9.4 3.4z" />
                  </svg>
                  Open to
                </button>
                <button className="btn btn-primary">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                  >
                    <path d="M8.5 1a.5.5 0 0 0-1 0v6H1a.5.5 0 0 0 0 1h6.5v6a.5.5 0 0 0 1 0V8H15a.5.5 0 0 0 0-1H8.5V1z" />
                  </svg>
                  Add profile section
                </button>
                <button className="btn btn-outline">More</button>
              </div>
            </div>
          </div>

          <div className="profile-stats">
            <div className="stat-item">
              <span className="stat-number">500+</span>
              <span className="stat-label">connections</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">2,345</span>
              <span className="stat-label">followers</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <img
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iIzAwNzNiNSI+PHBhdGggZD0iTTggMUM0LjEgMSAxIDQuMSAxIDhzMy4xIDcgNyA3IDctMy4xIDctNy0zLjEtNy03LTd6bTAgMTNjLTMuMyAwLTYtMi43LTYtNnMyLjctNiA2LTYgNiAyLjcgNiA2LTIuNyA2LTYgNnoiLz48cGF0aCBkPSJNMTAgN0g2djVoNFY3eiIvPjwvc3ZnPg=="
                alt="Company"
                className="company-icon"
              />
              <span className="stat-label">Freelance</span>
            </div>
          </div>
        </div>

        <div className="profile-content">
          <div className="main-column">
            <div className="profile-section">
              <div className="section-header">
                <h2>About</h2>
                <button className="edit-btn">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                  >
                    <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                  </svg>
                </button>
              </div>
              <p className="about-text">
                I'm a dedicated goal-oriented individual with a high energy
                level, honed communication skills, strong organization skills,
                and meticulous attention to detail. Currently I'm a UX/UI
                designer with 3+ years of experience creating user-centered
                digital solutions. I'm experienced in UX/UI design using Figma,
                Adobe XD, and have a strong background in front-end development.
                I'm passionate about designing intuitive interfaces and bringing
                creative ideas to life through code. I absolutely love what I do
                and am passionate about continuous learning and growth in the
                design and development field.
              </p>
            </div>

            <div className="profile-section">
              <div className="section-header">
                <h2>Activity</h2>
                <div className="section-actions">
                  <button className="edit-btn">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                    >
                      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="activity-empty">
                <h3>You haven't posted lately</h3>
                <p>
                  Recent posts you share or comment on will be displayed here.
                </p>
                <button className="btn btn-outline">Start a post</button>
              </div>
            </div>

            <div className="profile-section">
              <div className="section-header">
                <h2>Experience</h2>
                <div className="section-actions">
                  <button className="edit-btn">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                    >
                      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                    </svg>
                  </button>
                  <button className="edit-btn">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                    >
                      <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="experience-list">
                <div className="experience-item">
                  <div className="company-logo">
                    <div className="logo-placeholder">FL</div>
                  </div>
                  <div className="experience-details">
                    <h3>UX/UI Designer</h3>
                    <p className="company-name">Freelance</p>
                    <p className="duration">Jan 2023 - Present · 1 yr 8 mos</p>
                    <p className="location">Remote</p>
                    <p className="description">
                      Designing user-centered digital experiences for various
                      clients across different industries. Specialized in
                      creating wireframes, prototypes, and high-fidelity designs
                      using Figma and Adobe XD.
                    </p>
                    <div className="skills-tags">
                      <span className="skill-tag">Figma</span>
                      <span className="skill-tag">User Research</span>
                      <span className="skill-tag">Prototyping</span>
                    </div>
                  </div>
                </div>

                <div className="experience-item">
                  <div className="company-logo">
                    <div className="logo-placeholder">PL</div>
                  </div>
                  <div className="experience-details">
                    <h3>Design Intern</h3>
                    <p className="company-name">Pixel Labs</p>
                    <p className="duration">Mar 2022 - Dec 2022 · 10 mos</p>
                    <p className="location">San Francisco, CA</p>
                    <p className="description">
                      Collaborated with senior designers on mobile and web
                      application projects. Gained hands-on experience in user
                      research, wireframing, and design systems.
                    </p>
                    <div className="skills-tags">
                      <span className="skill-tag">Adobe XD</span>
                      <span className="skill-tag">Design Systems</span>
                      <span className="skill-tag">User Testing</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="profile-section">
              <div className="section-header">
                <h2>Education</h2>
                <div className="section-actions">
                  <button className="edit-btn">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                    >
                      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="experience-item">
                <div className="company-logo">
                  <div className="logo-placeholder">SU</div>
                </div>
                <div className="experience-details">
                  <h3>Stanford University</h3>
                  <p className="company-name">
                    Bachelor of Science, Computer Science
                  </p>
                  <p className="duration">2017 - 2021</p>
                  <p className="location">Palo Alto, California</p>
                </div>
              </div>
            </div>

            <div className="profile-section">
              <div className="section-header">
                <h2>Skills</h2>
                <div className="section-actions">
                  <button className="edit-btn">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                    >
                      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="skills-grid">
                <div className="skill-item">
                  <h4>Figma</h4>
                  <div className="endorsement-bar">
                    <div
                      className="endorsement-fill"
                      style={{ width: "90%" }}
                    ></div>
                  </div>
                  <p className="skill-endorsements">15 endorsements</p>
                </div>
                <div className="skill-item">
                  <h4>User Experience Design (UED)</h4>
                  <div className="endorsement-bar">
                    <div
                      className="endorsement-fill"
                      style={{ width: "85%" }}
                    ></div>
                  </div>
                  <p className="skill-endorsements">12 endorsements</p>
                </div>
                <div className="skill-item">
                  <h4>React.js</h4>
                  <div className="endorsement-bar">
                    <div
                      className="endorsement-fill"
                      style={{ width: "80%" }}
                    ></div>
                  </div>
                  <p className="skill-endorsements">18 endorsements</p>
                </div>
              </div>

              <button className="show-more-btn">Show all 15 skills →</button>
            </div>
          </div>

          <div className="sidebar-column">
            <div className="profile-section">
              <div className="section-header">
                <h2>People also viewed</h2>
              </div>
              <div className="recommendation-list">
                <div className="recommendation-item">
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgZmlsbD0iI2U0ZTRlNCI+PHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjZTRlNGU0IiByeD0iMjAiLz48cGF0aCBkPSJNMjAgMTBjMy4zIDAgNiAyLjcgNiA2cy0yLjcgNi02IDYtNi0yLjctNi02IDIuNy02IDYtNnptMCAyYy0yLjIgMC00IDEuOC00IDRzMS44IDQgNCA0IDQtMS44IDQtNC0xLjgtNC00LTR6bTAgMTBjLTMuMyAwLTEwIDEuNy0xMCA1djJoMjB2LTJjMC0zLjMtNi43LTUtMTAtNXoiIGZpbGw9IiM5OTkiLz48L3N2Zz4="
                    alt="Sarah Johnson"
                    className="recommendation-avatar"
                  />
                  <div className="recommendation-details">
                    <h4>Sarah Johnson</h4>
                    <p>Product Designer at Meta</p>
                    <button className="btn-connect">Connect</button>
                  </div>
                </div>
                <div className="recommendation-item">
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgZmlsbD0iI2U0ZTRlNCI+PHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjZTRlNGU0IiByeD0iMjAiLz48cGF0aCBkPSJNMjAgMTBjMy4zIDAgNiAyLjcgNiA2cy0yLjcgNi02IDYtNi0yLjctNi02IDIuNy02IDYtNnptMCAyYy0yLjIgMC00IDEuOC00IDRzMS44IDQgNCA0IDQtMS44IDQtNC0xLjgtNC00LTR6bTAgMTBjLTMuMyAwLTEwIDEuNy0xMCA1djJoMjB2LTJjMC0zLjMtNi43LTUtMTAtNXoiIGZpbGw9IiM5OTkiLz48L3N2Zz4="
                    alt="Michael Chen"
                    className="recommendation-avatar"
                  />
                  <div className="recommendation-details">
                    <h4>Michael Chen</h4>
                    <p>Senior UX Researcher at Google</p>
                    <button className="btn-connect">Connect</button>
                  </div>
                </div>
                <div className="recommendation-item">
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgZmlsbD0iI2U0ZTRlNCI+PHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjZTRlNGU0IiByeD0iMjAiLz48cGF0aCBkPSJNMjAgMTBjMy4zIDAgNiAyLjcgNiA2cy0yLjcgNi02IDYtNi0yLjctNi02IDIuNy02IDYtNnptMCAyYy0yLjIgMC00IDEuOC00IDRz1.OCA0IDQgNCA0LTEuOCA0LTQtMS44LTQtNC00em0wIDEwYy0zLjMgMC0xMCAxLjctMTAgNXYyaDIwdi0yYzAtMy4zLTYuNy01LTEwLTV6IiBmaWxsPSIjOTk5Ii8+PC9zdmc+"
                    alt="Jessica Williams"
                    className="recommendation-avatar"
                  />
                  <div className="recommendation-details">
                    <h4>Jessica Williams</h4>
                    <p>Frontend Developer at Airbnb</p>
                    <button className="btn-connect">Connect</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="profile-section">
              <div className="section-header">
                <h2>You might like</h2>
              </div>
              <div className="recommendation-list">
                <div className="recommendation-item">
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgZmlsbD0iI2U0ZTRlNCI+PHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjZTRlNGU0IiByeD0iMjAiLz48cGF0aCBkPSJNMjAgMTBjMy4zIDAgNiAyLjcgNiA2cy0yLjcgNi02IDYtNi0yLjctNi02IDIuNy02IDYtNnptMCAyYy0yLjIgMC00IDEuOC00IDRzMS44IDQgNCA0IDQtMS44IDQtNC0xLjgtNC00LTR6bTAgMTBjLTMuMyAwLTEwIDEuNy0xMCA1djJoMjB2LTJjMC0zLjMtNi43LTUtMTAtNXoiIGZpbGw9IiM5OTkiLz48L3N2Zz4="
                    alt="UX Design Collective"
                    className="recommendation-avatar"
                  />
                  <div className="recommendation-details">
                    <h4>UX Design Collective</h4>
                    <p>Group • 125k members</p>
                    <button className="btn-follow">Follow</button>
                  </div>
                </div>
                <div className="recommendation-item">
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgZmlsbD0iI2U0ZTRlNCI+PHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjZTRlNGU0IiByeD0iMjAiLz48cGF0aCBkPSJNMjAgMTBjMy4zIDAgNiAyLjcgNiA2cy0yLjcgNi02IDYtNi0yLjctNi02IDIuNy02IDYtNnptMCAyYy0yLjIgMC00IDEuOC00IDRzMS44IDQgNCA0IDQtMS44IDQtNC0xLjgtNC00LTR6bTAgMTBjLTMuMyAwLTEwIDEuNy0xMCA1djJoMjB2LTJjMC0zLjMtNi43LTUtMTAtNXoiIGZpbGw9IiM5OTkiLz48L3N2Zz4="
                    alt="React Developers"
                    className="recommendation-avatar"
                  />
                  <div className="recommendation-details">
                    <h4>React Developers</h4>
                    <p>Group • 98k members</p>
                    <button className="btn-follow">Follow</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
