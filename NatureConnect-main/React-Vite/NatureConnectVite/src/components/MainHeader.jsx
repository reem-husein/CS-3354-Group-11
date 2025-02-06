import classes from "./MainHeader.module.css";
import ResourcesDropdown from "./ResourcesDropdown";
import image from "/src/assets/FullNatureConnectLogo.png";

function MainHeader() {
  const menuSideHeadingTxt = "Visit local state parks and reserves";
  const menuText =
    "Spending time outdoors can improve your health and well-being. By visiting and supporting parks and reserves, you can help preserve these natural resources for future generations";
  return (
    <header className={classes.headBar}>
      <ResourcesDropdown
        menuSideHeading={menuSideHeadingTxt}
        menuSideText={menuText}
      />

      <div className={classes.spacerOne}></div>
      <h1 className={classes.logo}>
        <img className={classes.logoNC} src={image} alt="Nature Connect" />
      </h1>
      <div className={classes.spacerTwo}></div>
      <div className={classes.buttonsDiv}>
        <button className={classes.logInButton}>Log in</button>
        <button className={classes.signUpButton}>Sign up</button>
      </div>
    </header>
  );
}

export default MainHeader;
