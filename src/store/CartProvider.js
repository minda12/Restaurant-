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

          const index = items.findIndex(item=>item.id===id)

          if(index!==-1)
          {
               items[index].Qty -=1
               items.total -=items[index].price

               if(items[index].Qty===0)
               {
                items.splice(index,1)
               }

                 setItems([...items])
                 console.log(items.total)

          }
          


      }

      const addItemCart = (id) =>{
        const index = items.findIndex(item=>item.id===id)

        if(index!==-1)
        {
             items[index].Qty +=1
             items.total +=items[index].price

               setItems([...items])
               console.log(items.total)

        }
        
         }   


      const total = items.reduce((acc, item) => acc + item.price* item.Qty, 0).toFixed(2);;
    
      const cartContext = {
          
          items: items,
          total:total,
          Qty:items.reduce((acc, item) => acc + item.Qty, 0),
          addItem:addItemToCart,
          removeitem: removeItemCart ,
          addItemCart:addItemCart
        }
        

    return <CartContext.Provider value ={cartContext}>
          {console.log("Cartprovider",items.Qty)}
           {props.children}
        </CartContext.Provider>
    
  
}

export default CartProvider