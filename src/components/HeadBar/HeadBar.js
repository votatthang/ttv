import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import './HeadBar.css';
import { RxHamburgerMenu } from "react-icons/rx";

export default function HeadBar() {
  const [isToggleOpen, setIsToggleOpen] = useState(false);

  const handleToggleOpen = () => {
    setIsToggleOpen(!isToggleOpen);
    console.log(isToggleOpen);
  };
  const allLinks = [
    { name: "About Me", link: "/" },
    { name: "Research", link: "/Research" },
    { name: "Teaching", link: "/Teaching" },
    { name: "My Team", link: "/MyTeam" },
    { name: "Publications", link: "/Publications" },
  ];
  return <div className="HeadBar">
    <div className="links">
      <div className="menuToggleBtn" onClick={handleToggleOpen}>
        <RxHamburgerMenu size={50} color="white" />
      </div>
      <div className={`navLinks ${isToggleOpen ? 'show' : ''}`}>
        {allLinks.map((link) => {
          return <NavLink
            onClick={handleToggleOpen}
            key={link.name}
            to={link.link}
            activeClassName="active"
          >
            {link.name}
          </NavLink>;
        }
        )}
      </div>
    </div>
  </div>;
}
