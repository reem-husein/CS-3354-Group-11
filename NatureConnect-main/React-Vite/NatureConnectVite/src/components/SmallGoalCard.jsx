import classes from "./SmallGoalCard.module.css";
import { FaChevronDown } from "react-icons/fa";

function SmallGoalCard({ goalType, name }) {
  return (
    <div className={classes.card}>
      <h1 className={classes.goalTypeHeading}>{goalType}</h1>
      <h2 className={classes.name}>{name}</h2>

      <div className={classes.expandButtonDiv}>
        <button className={classes.expandButton}>
          <FaChevronDown className={classes.icon} />
        </button>
      </div>
    </div>
  );
}
export default SmallGoalCard;
