import React, { useContext, useRef } from 'react';
import classes from './Mealitemform.module.css';
import Input from '../../UI/input';
import CartContext from '../../../store/CartContext';


function Mealitemform(props) {
  const cartContext = useContext(CartContext);
  const amountInputRef = useRef();

  const addToCartHandler = () => {
   
    const Qty = +amountInputRef.current.value; 
    
    if(Qty === 0)
    {
      return
    }

    const totalPrice = props.price * Qty
    cartContext.addItem({ id: props.id, Qty:Qty ,price: totalPrice,items:props.name});
     
     console.log("Mealitem",props)
  };

  return (
    <div className={classes.form}>
      <Input
        label='Quantity'
        input={{
          id: 'amount',
          type: 'number',
          min: '1', 
          max: '5', 
          defaultValue: '0'
        }}
        forwardedRef={amountInputRef} 
      />
      <button onClick={addToCartHandler}>Add Item</button>
    </div>
  );
}

export default Mealitemform;
