import { useNavigate } from "react-router-dom";

import classes from "./VisitorGoalCard.module.css";
import image from "/src/assets/natureImage.png";

function VisitorGoalCard({ goalType, name, shortDesc, endDate }) {
  const navigate = useNavigate();
  return (
    <div className={classes.card}>
      <div className={classes.image}>
        <img className={classes.image} src={image} alt="Enjoying nature" />
      </div>
      <div className={classes.textButtonDiv}>
        <div className={classes.spacer}></div>
        <div className={classes.textContainer}>
          <h1 className={classes.goalTypeHeading}>{goalType} Goal:</h1>
          <h2 className={classes.name}>{name}</h2>
          <p className={classes.shortDesc}>{shortDesc}</p>
          <p className={classes.date}>CLOSES {endDate}</p>
        </div>
        \
        <button
          className={classes.showMoreButton}
          onClick={() => navigate("/ExpandedGoalCard")}
        >
          Show More
        </button>
        <div className={classes.spacer}></div>
      </div>
    </div>
  );
}
export default VisitorGoalCard;
