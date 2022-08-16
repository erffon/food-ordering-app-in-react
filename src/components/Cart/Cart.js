import classes from "./Cart.module.css";

const Cart = props=>{
    const cartItems = (
    <ul className={classes['cart-items']}>{
        [{id:'c1', name:'Sushi', amount:2, price:12.99}].map((item) =>{
        <li>{item.name}</li>
    })}
    </ul>); 

    return(
        <div>
            {cartItems}
            <div className={classes.total}>
                <span>total amount</span>
                <span>35.62</span>
            </div>
            <div className={classes.actions}>
                <button className={classes.['button--alt']}>close</button>
                <button className={classes.button}>order</button>
            </div>
        </div>
    );
}
export default Cart;