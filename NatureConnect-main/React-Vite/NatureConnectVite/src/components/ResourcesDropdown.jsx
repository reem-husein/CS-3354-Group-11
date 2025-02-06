import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import classes from "./ResourcesDropdown.module.css";
import image from "/src/assets/AustinParkImage2.png";

function ResourcesDropdown(props) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={dropdownRef}
      style={{ position: "relative", display: "inline-block" }}
    >
      <button className={classes.resourcesButton} onClick={toggleDropdown}>
        Resources
        <FaChevronDown className={classes.icon} />
      </button>
      {isOpen && (
        <div className={classes.menuCard}>
          <div className={classes.menuItemsDiv}>
            <h2 className={classes.menuHeaderItem}>General</h2>
            <p className={classes.menuItem}>Mental health and nature</p>
            <p className={classes.menuItem}>How tos</p>
            <p className={classes.menuItem}>Helpful sites</p>
            <h2 className={classes.menuHeaderItem}>Austin Area Resources</h2>
            <p className={classes.menuItem}>Events</p>
            <p className={classes.menuItem}>Getting Involved</p>
            <Link
              className={classes.menuItem}
              to="/SignUpForm"
              onClick={() => setIsOpen(false)}
            >
              Profile
            </Link>
            <Link
              className={classes.menuHeaderItem}
              to="/VisitorGoalsPage"
              onClick={() => setIsOpen(false)}
            >
              View Goals
            </Link>

            <div className={classes.spacer}></div>
          </div>
          <div className={classes.menuSideCard}>
            <img className={classes.image} src={image} alt="Forest" />
            <div className={classes.spacerTwo}></div>
            <div className={classes.sideCardTextDiv}>
              <h2 className={classes.sideCardHeading}>
                {props.menuSideHeading}
              </h2>
              <p className={classes.sideCardText}>{props.menuSideText}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ResourcesDropdown;
