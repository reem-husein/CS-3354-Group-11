import classes from "./ExpandedGoalCard.module.css";
import goalImage from "/src/assets/natureImage.png";
import stepsImage from "/src/assets/goalSteps.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

function ExpandedGoalCard(props) {
  return (
    <div className={classes.card}>
      <div className={classes.columnOne}>
        <img
          className={classes.goalImage}
          src={goalImage}
          alt="Enjoying Nature"
        />
        <div className={classes.resourcesTextDiv}>
          <h2 className={classes.resourcesHeading}>External Links/Resources</h2>
          <div className={classes.resourcesLinkTxt}>
            <a
              className={classes.linkItem}
              href="https://www.seasonalfoodguide.org/"
            >
              Seasonal Food Guide{" "}
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
            <a
              className={classes.linkItem}
              href="https://www.boggycreekfarm.com/"
            >
              Boggy Creek Farm in Austin{" "}
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
            <a
              className={classes.linkItem}
              href="https://communitygardensaustin.org/gardens"
            >
              Community Gardens in Austin{" "}
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </div>
        </div>
        <p className={classes.endDateTxt}>CLOSES {props.endDate} 11:59.59 PM</p>
      </div>
      <div className={classes.columnTwo}>
        <h1 className={classes.goalHeading}>{props.goalType} Goal:</h1>
        <h3 className={classes.goalName}>{props.name}</h3>
        <p className={classes.goalLongDesc}>{props.longDesc}</p>
        <div className={classes.goalStepsDiv}>
          <img
            className={classes.stepsImage}
            src={stepsImage}
            alt="Nature Connect"
          />
        </div>
        <button className={classes.completeButton}>Mark Complete</button>
      </div>
      <div className={classes.columnThree}>
        <h2 className={classes.exitButton}>
          <FontAwesomeIcon icon={faXmark} />
        </h2>
      </div>
    </div>
  );
}
export default ExpandedGoalCard;
