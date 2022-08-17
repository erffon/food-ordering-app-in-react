import classes from "./Cart.module.css";
import Modal from "../../components/ui/Modal";
import { useContext } from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {

  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasitem = cartCtx.item.length >0;

    const cartItemRemoveHandler= ()=>{};
    const cartItemAddHandler= ()=>{};

  const cartitem = (
    <ul className={classes["cart-item"]}>
      {cartCtx.item.map((item) => {
        return (<CartItem key={item.id} name={item.name} price={item.price} amount={item.amount} onRemove={cartItemRemoveHandler.bind(null,item.id)} onAdd={cartItemAddHandler.bind(null,item)}/>);
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
