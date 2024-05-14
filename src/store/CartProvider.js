import React , {useState}from 'react'
import CartContext from './CartContext'




function CartProvider(props) {
 

  const [items, setItems] = useState([]);

   
  const addItemToCart = (item) =>{
    
    const exItem = items.findIndex((cartItem)=>cartItem.id===item.id)

   if(exItem!== -1)
   {
    const updatedItems = [...items]
    updatedItems[exItem].Qty +=item.Qty
    setItems(updatedItems)
   }
   else
   {
   setItems((prevItems) => [...prevItems, item]);

      }
    }   


      const removeItemCart = id  =>{
        setItems((prevItems) => prevItems.filter((item) => item.id !== id));
      }

      const total = items.reduce((acc, item) => acc + item.price* item.Qty, 0).toFixed(2);;
    
      const cartContext = {
          
          items: items,
          total:total,
          Qty:items.reduce((acc, item) => acc + item.Qty, 0),
          addItem:addItemToCart,
          removeitem: removeItemCart 
        }
        

    return <CartContext.Provider value ={cartContext}>
          {console.log("Cartprovider",items.Qty)}
           {props.children}
        </CartContext.Provider>
    
  
}

export default CartProvider