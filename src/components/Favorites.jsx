import React from 'react'
import { useCart } from '../useCart'
import product_lists from "../utils/product_lists.json"

const Favorites = () => {
  const {fav} = useCart();
  const matchId = (product_lists, fav) => product_lists
  .filter(item => fav?.includes(item.productId))
  .map(item => item);
  
  
  return (
    <div className='mainContainer'>
        {matchId(product_lists, fav).map(item =>{
            return(
                <div className='iContainer'  key ={item.productId} >
                    
                    <div id ={item.productId} >
                    <img className='iImage' src={item.imageURL} alt="product-i" />
                    <h4 className='iName'>{item.name}</h4>
                    <p className='iPrice'>Rs. {item.price}</p>
                    </div>
                </div>
            )
        })}
      </div>
  )
}

export default Favorites