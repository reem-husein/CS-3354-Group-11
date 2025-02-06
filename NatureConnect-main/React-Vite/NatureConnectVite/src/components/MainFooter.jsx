import classes from "./MainFooter.module.css";
import image from "/src/assets/NCLogoDark.png";

function MainFooter() {
  return (
    <div className={classes.footerDiv}>
      <div className={classes.orgTextDiv}>
        <img className={classes.logoNC} src={image} alt="Nature Connect" />
        <h1 className={classes.headerTxt}>Nature Connect</h1>
        <p className={classes.gwcTxt}>A Girls Who Code Project</p>
      </div>
      <div className={classes.attributesDiv}>
        <a className={classes.attribute} href="https://storyset.com/people">
          People illustrations by Storyset
        </a>
        <a className={classes.attribute} href="https://storyset.com/nature">
          Nature illustrations by Storyset
        </a>
      </div>
    </div>
  );
}

export default MainFooter;
