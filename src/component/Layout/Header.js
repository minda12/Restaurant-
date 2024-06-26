import React from 'react'
import classes from './Header.module.css'
import Mealsimg from '../../assets/meals.jpg'

import HeaderCartButton  from './HeaderCartButton'

function Header(props) {
  return (
    <>

    <header className={classes.header}>
        <h1>React Meals</h1>
    
        <HeaderCartButton onClick ={props.onShowCart}/>
    </header>
    <div className={classes['main-image']}>
    <img src={Mealsimg} alt ='Food '/>
    

    </div>
   

    </>
  )
}

export default Header