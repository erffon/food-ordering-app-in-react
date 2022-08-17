import React from "react";

const CartContext = React.createContext ({
    /* to manage couple of cart item */
    item:[],
    totalAmount: 0,
    /* two functions to update context */
    addItem: (item)=>{},
    removeItem: (id)=>{}
});

export default CartContext;