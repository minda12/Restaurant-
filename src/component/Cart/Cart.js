import React from 'react'
import classes from './Cart.module.css'
import Modal from '../UI/Modal'

function Cart(props) {
    const cartItems =<ul className={classes['cart-items']}>{[{

            id:1,
            name:'sushi',
            amount:2,
            price:19.08
    }].map(items=><li>{items.name}</li>)}</ul>


  return (
    <Modal onClose={props.onClose}>
      
     {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.77</span>
      </div>
      <div className={classes.actions}>
      <button onClick ={props.onClose} className = {classes['button--alt']}>Close</button>
      <button className ={classes.button}>Order</button>
      </div>

    </Modal>
  )
}

export default Cart
