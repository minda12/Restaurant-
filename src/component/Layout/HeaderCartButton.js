import classes from './HeaderCartButton.module.css'
import CartIcon from '../Cart/CartIcon' 
import CartContext from '../../store/CartContext'
import React, { useContext } from 'react'



function HeaderCartButton(props) {

  

  const cartCTX = useContext(CartContext)

  const numberOfCartItems = cartCTX.items.reduce((curr,item)=>{
    return curr + item.Qty
  },0)


  // console.log("number of cartitem ",{numberOfCartItems})

  return (
    <button onClick ={props.onClick} className={classes.button}> 
     <span className={classes.icon}>
         <CartIcon/>
     </span>
     <span>Your Cart</span>
     <span className={classes.badge}>{numberOfCartItems}</span>

    </button>
  )
}

export default HeaderCartButton