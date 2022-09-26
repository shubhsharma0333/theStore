import React from 'react'
import { useCart } from '../useCart'
import {ImBin} from "react-icons/im"
import { useEffect } from 'react';
import { useState } from 'react';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const navigate = useNavigate();
  const [total, setTotal] =useState(0)
  const {cart , increment, decrement} = useCart();
  const [showCheckout, setShowCheckout] = useState(false)
  const [formValues, setFormValues] = useState({phone:"", firstName:"", lastName:"", address:"", email:""})    
  useEffect(()=>{
    let sum = 0;
    if(cart){
      cart.forEach((item) =>{
        sum = sum + item.quantity * item.price 
      })
      setTotal(sum)
    }
  },[cart])

  const removeItem = (e) =>{
    decrement(e.currentTarget.id)
  }

  const handleCheckout =(e) =>{
    setShowCheckout(true)
  }

  const handleForm =(e)=>{
    setFormValues((prev)=>({
      ...prev,
      [e.target.name]:e.target.value
    }))
  }

  const closeForm = () =>{
    setShowCheckout(false)
    
  }

  const handleSubmit =() =>{
    setShowCheckout(false)
    navigate("/congo",{replace:true})
  }
  
  return (
    <div className='cartContainer'>
    {cart?.map(item =>{
        return(
            <div className='cContainer' id ={item.productId} key ={item.productId} >
                <img className='cImage' src={item.imageURL} alt="product-i" />
                <h4 className='cName'>{item.name}</h4>
                <p className='cPrice'>Rs. {item.price}</p>
                <p className='cQty'>Qty: {item.quantity}</p>
                <button onClick={removeItem} id= {item.productId}><ImBin color='red' /></button>
            </div>
        )
    })}
      {cart?.length < 1 ? <h1>Cart is Empty</h1> : <div className='total'>
        <h1>Total: {total}</h1>
        <button className='checkout' onClick={handleCheckout}>Checkout</button>
      </div>}
      {showCheckout && 
            <div className='mainModal2'>
                <div className='modal2'>
                <button className='close' onClick={closeForm}><IoIosCloseCircleOutline  size ="2em"/></button>
                    <input onChange={handleForm} className="inputform" placeholder='Phone' value={formValues.phone} name="phone" />
                    <input onChange={handleForm} className="inputform" placeholder='First Name' value={formValues.firstName} name="firstName" />
                    <input onChange={handleForm} className="inputform" placeholder='Last Name' value={formValues.lastName} name="lastName" />
                    <input onChange={handleForm} className="inputform" placeholder='Address' value={formValues.address} name="address" />
                    <input onChange={handleForm} className="inputform" placeholder='Email' value={formValues.email} name="email" />
                    <button className='submit' onClick={handleSubmit}>Submit</button>
                </div>
            </div>
        }
    </div>
  )
}

export default Cart