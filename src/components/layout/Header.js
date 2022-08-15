import react, { Fragment } from "react";
import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton/>
      </header>
      <div>
        <img
          className={classes["main-image"]}
          src={mealsImage}
          alt="a table of full delicious food!"
        />
      </div>
    </Fragment>
  );
};
export default Header;
