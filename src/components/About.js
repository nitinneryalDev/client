import React, { useEffect, useState } from "react";
import user from "../images/user.jpg";
import { useNavigate } from "react-router-dom";
import thapapic from "../images/profilealternate.jpg";

function About() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});

  const callAboutPage = async () => {
    try {
      const res = await fetch("/about", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await res.json();
      setUserData(data);

      if (!res.status === 200) {
        console.log("this is the error on not getting data");
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      navigate("/login");
    }
  };

  useEffect(() => {
    callAboutPage();
  }, []);

  if (!userData) {
    return <div>Loading...</div>; // Render a loading state until data is fetched
  }

  return (
    <>
      <div className="container mt-5">
        <form method="GET" className="card">
          <div className="card-body p-5">
            <div className="row">
              <div className="col-md-4 p-5">
                <img
                  src={userData.name === "thapa" ? thapapic : user}
                  alt="Profile"
                  className="img-fluid rounded-circle mb-3"
                  style={{ width: "150px", height: "150px" }}
                />
                <div className="work-links">
                  <p>WORK LINK</p>
                  <ul className="list-unstyled">
                    <li>
                      <a href="#">Youtube</a>
                    </li>
                    <li>
                      <a href="#">Instagram</a>
                    </li>
                    <li>
                      <a href="#">Thapa Technical</a>
                    </li>
                    <li>
                      <a href="#">WebsiteGitHubMERN Dev</a>
                    </li>
                    <li>
                      <a href="#">Web Developer</a>
                    </li>
                    <li>
                      <a href="#">Figma</a>
                    </li>
                    <li>
                      <a href="#">Software Engineer</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-8 p-5">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div>
                    <h3>{userData.name}</h3>
                    <h5 className="text-muted">{userData.work}</h5>
                    <p className="text-muted">RANKINGS: 1/10</p>
                  </div>
                  <button className="btn btn-secondary">Edit Profile</button>
                </div>
                <ul className="nav nav-tabs" id="profileTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <a
                      className="nav-link active"
                      id="about-tab"
                      data-bs-toggle="tab"
                      href="#about"
                      role="tab"
                      aria-controls="about"
                      aria-selected="true"
                    >
                      About
                    </a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a
                      className="nav-link"
                      id="timeline-tab"
                      data-bs-toggle="tab"
                      href="#timeline"
                      role="tab"
                      aria-controls="timeline"
                      aria-selected="false"
                    >
                      Timeline
                    </a>
                  </li>
                </ul>
                <div className="tab-content" id="profileTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="about"
                    role="tabpanel"
                    aria-labelledby="about-tab"
                  >
                    <table className="table mt-3">
                      <tbody>
                        <tr>
                          <th scope="row">Experience</th>
                          <td>Expert</td>
                        </tr>
                        <tr>
                          <th scope="row">Hourly Rate</th>
                          <td>10$/hr</td>
                        </tr>
                        <tr>
                          <th scope="row">Email</th>
                          <td>{userData.email}</td>
                        </tr>
                        <tr>
                          <th scope="row">English Level</th>
                          <td>Expert</td>
                        </tr>
                        <tr>
                          <th scope="row">Availability</th>
                          <td>6 months</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="timeline"
                    role="tabpanel"
                    aria-labelledby="timeline-tab"
                  >
                    {/* Timeline content goes here */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default About;
