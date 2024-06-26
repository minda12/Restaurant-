import classes from './Input.module.css'

import React from 'react'

function input(props) {
  return (
    <div className={classes.input}>
        <label htmlFor={props.input.id}>{props.label}</label>
        <input  ref={props.forwardedRef} {...props.input}/>

    </div>
  )
}

export default input