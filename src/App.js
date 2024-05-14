import { useState } from "react";
import Header from "./component/Layout/Header";
import Meals from "./component/Meals/Meals";
import Cart from "./component/Cart/Cart";
import CartProvider from "./store/CartProvider";
import Body from "./component/Layout/Body";
function App() {

  const [cartIsShown,setcartIsShown]=useState(false)
  const showCartHandler = ()=>{
    setcartIsShown(true)
  }
  const hideCartHandler = ()=>{
    setcartIsShown(false)
  }
  return (
    <CartProvider>
     {cartIsShown && <Cart onClose={hideCartHandler}/>}
     <Header onShowCart = {showCartHandler}/>
     <main><Meals/></main>
     <Body></Body>
    </CartProvider>
  );
}

export default App;
