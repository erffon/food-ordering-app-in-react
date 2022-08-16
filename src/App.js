import './App.css';
import Header from "./components/layout/Header";
import {Fragment} from "react";
import Meals from './components/meals/Meals';
import Cart from "./components/Cart/Cart";
import {useState} from "react";



function App() {

  const [modalIsShowed,setModalIsShowed]=useState(false);

  const showCartHandler = ()=>{
    setModalIsShowed(true);
  }
  const hideCartHandler = ()=>{
    setModalIsShowed(false);
  }

  return (
    <Fragment>
      {modalIsShowed && <Cart onHideCart={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meals/>
      </main>
    </Fragment>
  );
} 

export default App;
