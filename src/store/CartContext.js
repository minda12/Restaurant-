import React from 'react'

const CartContext = React.createContext({
    
    items:[],
    total:0,
    Qty:[],
    addItem:(item) =>{},
    removeItem : (id) =>{}

})


export default CartContext