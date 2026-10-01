import React from "react";
import mypic from "../assets/myImg.png";

const AboutSectionNavbar = () => {
  return (
    <div className="about-section">

      {/* Developer */}
      <div
        className="group about-card about-profile-card"
      >

        <div className="about-profile-glow" />

        <div className="about-developer-layout">

          <div className="relative shrink-0">

            <div className="about-avatar-glow" />

            <div
              className="about-avatar-frame"
            >
              <img
                src={mypic}
                alt="Mohammad Zaid"
                className="about-avatar-image"
              />
            </div>

            <span className="about-online-indicator" />

          </div>


          <div className="about-developer-copy">

            <div className="about-developer-meta">

              <span className="about-eyebrow">
                About the Developer
              </span>

              <span className="about-meta-separator" />

              <span className="about-role">
                Web Developer
              </span>

            </div>

            <h2 className="about-developer-name">
              Mohammad Zaid
            </h2>

            <p className="about-copy about-developer-bio">
              Hello! I'm{" "}
              <span className="about-name-emphasis">
                Mohammad Zaid
              </span>
              , a B.Tech CSE student at Integral University and a passionate
              self-taught web developer. I specialize in building user-friendly
              tools using{" "}
                <span className="about-blue-emphasis">React</span> and{" "}
                <span className="about-purple-emphasis">Tailwind CSS</span>.
            </p>

          </div>

        </div>

      </div>



      {/* About this app */}
      <div
        className="group about-card about-app-card"
      >

        <div className="about-app-accent" />

        <div className="about-card-content">

          <div className="about-card-heading">

            <span className="about-app-icon">

              <svg
                className="about-heading-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
              </svg>

            </span>

            <h2 className="about-card-title">
              About This App
            </h2>

          </div>


          <p className="about-copy">

            <span className="about-app-name">
              Easy Page
            </span>{" "}
            is a front page generator tool for CSE assignments and lab reports.
            Built using{" "}
              <span className="about-blue-emphasis">
              React
            </span>{" "}
            and{" "}
              <span className="about-purple-emphasis">
              Tailwind CSS
            </span>
            , it allows students to quickly generate assignment covers and lab
            report templates with styling similar to official formats.

          </p>

        </div>

      </div>



      {/* Developer note */}
      <div
        className="about-card about-note-card"
      >

        <div className="about-note-accent" />

        <div className="about-card-content">

          <div className="about-card-heading">

            <span className="about-note-icon">

              <svg
                className="about-heading-icon about-note-heading-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M10.3 2.9 1.8 17a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 2.9a2 2 0 0 0-3.4 0Z" />
                <path d="M12 9v4" />
                <path d="M12 17h.01" />
              </svg>

            </span>

            <h2 className="about-card-title">
              Developer's Note
            </h2>

          </div>


          <p className="about-copy">

            This app is currently under optimization for mobile devices. For
            the best experience, please use it on a desktop browser.

            <br />

            <span className="about-note-paragraph">
              Please note that the cover page templates are custom-built and
              may slightly differ in design from official college formats.
            </span>

            <br />

            <span className="about-note-paragraph about-note-emphasis">
              If you encounter any bugs or layout issues, feel free to reach
              out and report them to me directly.
            </span>

          </p>

        </div>

      </div>

    </div>
  );
};



export default AboutSectionNavbar;
