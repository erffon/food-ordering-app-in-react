import './App.css';
import Header from "./components/layout/Header";
import {Fragment} from "react";
import Meals from './components/meals/Meals';
import Cart from "./components/Cart/Cart";



function App() {
  return (
    <Fragment>
      <Cart/>
      <Header/>
      <main>
        <Meals/>
      </main>
    </Fragment>
  );
} 

export default App;
