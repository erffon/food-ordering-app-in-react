import CartContext from "./cart-context";
import { useReducer } from "react";

const defaultCartState = {
    /* to manage couple of cart items */
    items:[],
    totalAmount: 0
}
const cartReducer=(state,action)=>{
    switch (action){
        case 'ADD':
          const updatedItems = state.items.concat(action.item) ;
          const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
          return {
            items:updatedItems,
            totalAmount: updatedTotalAmount
          }
            break;
        case 'REMOVE':
            break;
    }
    return defaultCartState;
}

const CartProvider = (props) => {

    const [cartState,dispatchCartAction]= useReducer(cartReducer,defaultCartState);

  const addItemToCartHandler = (item) => {
    dispatchCartAction({type:'ADD',item:item});
  };
  const removeItemToCartHandler = (id) => {
    dispatchCartAction({type:'REMOVE',id:id});
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: {},
    removeItem: {},
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
