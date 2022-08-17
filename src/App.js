import './App.css';
import Header from "./components/layout/Header";
import Meals from './components/meals/Meals';
import Cart from "./components/Cart/Cart";
import {useState} from "react";
import CartProvider from "./store/CartProvider";



function App() {

  const [modalIsShowed,setModalIsShowed]=useState(false);

  const showCartHandler = ()=>{
    setModalIsShowed(true);
  }
  const hideCartHandler = ()=>{
    setModalIsShowed(false);
  }

  return (
    <CartProvider>
      {modalIsShowed && <Cart onHideCart={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meals/>
      </main>
    </CartProvider>
  );
} 

export default App;
