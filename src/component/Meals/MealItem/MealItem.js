import React from 'react'
import classes from './Mealitem.module.css'
import Mealitemform from './Mealitemform'


function MealItem(props) {
    const price =`$${props.price.toFixed(2)}`
  return (
    <li className={classes.meal}>
        <div>
        <h3>{props.name}</h3>
       
     <div className={classes.description}>{props.description}</div>
     <div className={classes.price}>{price}</div>
     </div>
     <div>
          <Mealitemform id={props.id} price = {props.price} name = {props.name}/>
          
     </div>
 
    </li>
  )
}

export default MealItem