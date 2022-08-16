import { Fragment } from "react";
import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart}/>
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
