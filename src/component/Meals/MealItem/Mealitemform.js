import React from 'react'
import classes from './Mealitemform.module.css'
import Input from '../../UI/input'
function Mealitemform() {
  return (
    <form className={classes.form}> 
         <Input label ='Amount' input ={{
            id:'amount',
            type:'number',
            min:'5',
            max:'1',
            defaultValue:'0'
         }}/>
        <button> + Add Item </button>
    </form>
  )
}

export default Mealitemform
