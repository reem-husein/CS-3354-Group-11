import classes from "./UserHeader.module.css";
import ResourcesDropdown from "./ResourcesDropdown";
import { faUser } from "react-icons/fa";

function UserHeader() {
  return (
    <header className={classes.headBar}>
      <ResourcesDropdown />

      <div className={classes.spacerOne}></div>
      <h1 className={classes.logo}>Logo</h1>
      <div className={classes.spacerTwo}></div>
      <div className={classes.userInfoDiv}>
        <p>Points</p>
        <button>
          <FontAwesomeIcon icon={faUser} />
        </button>
      </div>
    </header>
  );
}

export default UserHeader;
