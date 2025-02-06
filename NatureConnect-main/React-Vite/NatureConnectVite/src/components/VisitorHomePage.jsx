import classes from "./VisitorHomePage.module.css";
import WelcomePageBody from "./WelcomePageBody";
import MainFooter from "./MainFooter";
import MainHeader from "./mainHeader";
import VisitorGoalCard from "./VisitorGoalCard";
import SmallGoalCard from "./SmallGoalCard";

function VisitorHomePage() {
  return (
    <div className={classes.page}>
      <div>
        <MainHeader />
      </div>
      <div className={classes.content}>
        <WelcomePageBody />
      </div>

      <MainFooter />
    </div>
  );
}

export default VisitorHomePage;
