import './App.css';
import Header from "./components/layout/Header";
import {Fragment} from "react";
import Meals from './components/meals/Meals';


function App() {
  return (
    <Fragment>
      <Header/>
      <main>
        <Meals/>
      </main>
    </Fragment>
  );
} 

export default App;
