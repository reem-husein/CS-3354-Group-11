import classes from "./WelcomePageBody.module.css";
import image from "/src/assets/NC_WelcomeImage4.jpg";

function WelcomePageBody() {
  return (
    <div>
      <div
        className={classes.pageBody}
        style={{
          backgroundImage: `url(${image})`,
          width: "100vw",
          height: "140vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className={classes.spacer}></div>
        <div className={classes.welcomeTop}>
          {/* <div className={classes.spacer}></div> */}
          {/* <img className={classes.ncImage} src={image} alt="Forest Image" /> */}

          <div className={classes.textContainer}>
            <h1 className={classes.welcomeText}>Welcome</h1>
            <h3 className={classes.descriptionText}>
              Goal setting to help you reconnect with nature
            </h3>
            <button className={classes.joinButton}>Join now</button>
          </div>
        </div>
      </div>

      <div className={classes.textBody}>
        <h2 className={classes.textHeading}>Our Mission</h2>
        <p className={classes.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className={classes.textBody}>
        <h2 className={classes.textHeading}>Meet the Team</h2>
        <p className={classes.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  );
}

export default WelcomePageBody;
