import React from "react";
import "./projects.css";
import seattle_transit_icon from "../images/seattle_transit_icon.png";
import yocal_logo from "../images/yocal_logo.png";

const Projects = () => (
  <div className="Projects">
    {/* Yocal Section */}
    <div className="center hero hero1">
      <img
        src={yocal_logo}
        width={`${300}em`}
        height={`${300}em`}
        alt="yocal"
      />
    </div>
    <div className="center giph1">
      <img
        className="giphyOne"
        src="https://media.giphy.com/media/63LM6J7Vr5RLlWKvY6/giphy.gif"
        alt="yocal-gif"
      />
    </div>
    <div className="align details details1">
      <div>
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
    </div>
    <hr className="line divider1" />
    {/* Seattle Transit Section */}
    <div className="center hero hero2">
      <img
        src={seattle_transit_icon}
        width={`${350}em`}
        height={`${350}em`}
        alt="seattle-transit"
      />
    </div>
    <div className="align details details2">
      <div>
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
    </div>
    <div className="center giph2">
      <img
        className="giphyOne"
        src="https://media.giphy.com/media/Ah9wTBkfaxZpKuUwpI/giphy.gif"
        alt="seattle-transit-gif"
      />
    </div>
    <hr className="line divider2" />
    {/* Bug Invaders Section */}
    <div className="center hero hero3">
      <h2 className="bug-invaders">BUG INVADERS</h2>
    </div>
    <div className="center giph3">
      <img
        className="giphyTwo"
        src="https://media.giphy.com/media/1kTOfry9f5sxuYM3Fa/giphy.gif"
        width={`${900}em`}
        height={`${200}em`}
        alt="bug-invaders-gif"
      />
    </div>
    <div className="align details details3">
      <div>
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
    </div>
    <hr className="line divider3" />
  </div>
);

export default Projects;
