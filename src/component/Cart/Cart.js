import React, { useContext } from 'react'
import classes from './Cart.module.css'
import Modal from '../UI/Modal'
import CartContext from '../../store/CartContext'


function Cart(props) {
   

  const Cartctx = useContext(CartContext)

  const removeCartitem =(id)=>{
    console.log("Cart remove button clicked", id)
     Cartctx.removeitem(id)
  }

  const increaseCartitem =(id)=>{
    console.log("Increaes Cart  button clicked",id )
    Cartctx.addItemCart(id)
  }

  return (
    <Modal onClose={props.onClose}>
     
   
     <div>
      <h2>Items</h2>
    
      <ul  className = 'List'>
        {Cartctx.items.map((items) => (
          <li  key={items.id} >{items.items}  

          <span id='quan'>x {items.Qty}</span>

          <button 
          onClick={()=>removeCartitem(items.id)}
          className={classes["cart-buttonremove"]}
          
         
           >-</button>
            

          <button  className={classes["cart-button"]}
           onClick={()=>increaseCartitem(items.id)}
         
          >+</button>
          
          
          </li>
          
        ))}
      </ul>
    </div>
    
      <div className={classes.total}>
        <span>Total Amount</span>
        {console.log("Cart Name",Cartctx.items)}
        {console.log("Cart QTY",Cartctx.Qty)}
        <span>${Cartctx.total}</span>
        {console.log("Cart total",Cartctx.total)}
      </div>
      <div className={classes.actions}>
      <button onClick ={props.onClose} className = {classes['button--alt']}>Close</button>
      <button className ={classes.button}>Order</button>
      </div>

    </Modal>
  )
}

export default Cart
