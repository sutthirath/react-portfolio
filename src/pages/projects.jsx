import React from "react";
import "./projects.css";
import seattle_transit_icon from "../images/seattle_transit_icon.png";
import yocal_logo from "../images/yocal_logo.png";

const Projects = () => (
  <div>
    {/* Yocal Section */}
    <section className="project-section section-hero1">
      <img
        className="yocal-img"
        src={yocal_logo}
        width={`${400}em`}
        height={`${400}em`}
      />
    </section>
    <section className="project-section section-info1">
      <div className="yocal-gif">
        <img src="https://media.giphy.com/media/63LM6J7Vr5RLlWKvY6/giphy.gif" />
      </div>
      <div className="details">
        <h4>A Social App for Curious Travelers.</h4>
        <p>
          Explore the unknown or get help from locals. Yocal is mobile app using
          the Foursquare API to search hundreds of local businesses. Users can
          signup to become a yocal in their area to guide travellers. Real-time
          chat is intergrated to connect users with yocals to get advise when
          they're out adventuring.
        </p>
        <a
          href="https://github.com/sutthirath/yocal"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="projects-btn">Source Code</button>
        </a>
        <a
          href="https://yocal.herokuapp.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="projects-btn right-btn">View App</button>
        </a>
      </div>
    </section>
    <hr />
    {/* Seattle Transit Section */}
    <section className="project-section">
      <img src={seattle_transit_icon} width={`${400}em`} height={`${400}em`} />
    </section>
    <section className="project-section section-info2">
      <div className="details">
        <h4>Simple and Easy to Use Public Transit App.</h4>
        <p>
          An interactive public transit app for the Seattle, WA area. Created
          with the OneBusAway API but designed with the collaboration of Sean
          Vilaysane, Henry Hong, and Chris Tack. Easy to navigate interface with
          a beautiful visualization of local transit data.
        </p>
        <a
          href="https://github.com/sutthirath/SeattleTransit"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="projects-btn">Source Code</button>
        </a>
        <a
          href="https://nameless-harbor-37613.herokuapp.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="projects-btn right-btn">View App</button>
        </a>
      </div>
      <div className="seattle-transit-gif">
        <img src="https://media.giphy.com/media/Ah9wTBkfaxZpKuUwpI/giphy.gif" />
      </div>
    </section>
    <hr />

    {/* Bug Invaders Section */}
    <section className="project-section section-hero3">
      <h2 className="bug-invaders">BUG INVADERS</h2>
    </section>
    <section className="project-section section-info3">
      <div>
        <img
          src="https://media.giphy.com/media/1kTOfry9f5sxuYM3Fa/giphy.gif"
          width={`${900}em`}
          height={`${200}em`}
        />
      </div>
      <div className="details">
        <h4>"Addictive" "Fun" "Cool Game"</h4>
        <p>
          Lightweight web browser game that is built with intuiutive javascript.
          No extra libraries or frameworks invovled. Delivering a simple but
          enjoyable experience.
        </p>
        <a
          href="https://github.com/sutthirath/BugInvaders"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="projects-btn">Source Code</button>
        </a>
        <a
          href="https://sutthirath.github.io/BugInvaders/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="projects-btn right-btn">Play Game</button>
        </a>
      </div>
    </section>
    <hr />
  </div>
);

export default Projects;
