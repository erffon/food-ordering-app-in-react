import classes from "./Cart.module.css";
import Modal from "../../components/ui/Modal";
import { useContext } from "react";
import CartContext from "../../store/cart-context";

const Cart = (props) => {

  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasitem = cartCtx.item.length >0;

  const cartitem = (
    <ul className={classes["cart-item"]}>
      {cartCtx.item.map((item) => {
        return <li>{item.name}</li>;
      })}
    </ul>
  );

  return (
    <Modal onClick={props.onHideCart}>
      {cartitem}
      <div className={classes.total}>
        <span>total amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onHideCart}>
          close
        </button>
        {hasitem && <button className={classes.button}>order</button>}
      </div>
    </Modal>
  );
};
export default Cart;
