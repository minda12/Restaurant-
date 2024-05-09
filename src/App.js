import { useState } from "react";
import Header from "./component/Layout/Header";
import Meals from "./component/Meals/Meals";
import Cart from "./component/Cart/Cart";
function App() {

  const [cartIsShown,setcartIsShown]=useState(false)
  const showCartHandler = ()=>{
    setcartIsShown(true)
  }
  const hideCartHandler = ()=>{
    setcartIsShown(false)
  }
  return (
    <>
     {cartIsShown && <Cart onClose={hideCartHandler}/>}
     <Header onShowCart = {showCartHandler}/>
     <main><Meals/></main>
    </>
  );
}

export default App;
