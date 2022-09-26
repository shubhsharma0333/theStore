import React from 'react'
import {HiShoppingBag} from "react-icons/hi"
import {IoIosCloseCircleOutline} from "react-icons/io"
import { useState } from 'react'
import product_lists from "../utils/product_lists.json"
import { useCart } from '../useCart'
import { useNavigate } from 'react-router-dom'
import { AiOutlineHeart } from 'react-icons/ai'



const Home = () => {
    const navigate = useNavigate();
    const [showModal, setShowModal]= useState(false)
    const [modalDetails, setModalDetails] = useState("");
    const [qty, setQty] = useState(1);
    const {increment, incrementFav} = useCart();

    const addItem =()=>{     
        if(modalDetails){
            
            increment(modalDetails)
        }
        navigate("/cart", {replace:true})
    }

    const handleModal = (e) =>{
        setShowModal(true);
        setQty(1)
        let info = product_lists.find(item => item.productId === e.currentTarget.id)
        setModalDetails({...info, quantity:qty})
        
        
    }
    const handleQty = (e) =>{
        setQty(e.target.value)
        setModalDetails((prev)=>({
            ...prev, quantity:e.target.value
        }))
        
    }
    const closeModal =()=>{
        setShowModal(false)
    }
    const handleFav= (e)=>{
        console.log(e.currentTarget.id)
        incrementFav(e.currentTarget.id)
    }

  return (
    <div className='mainContainer'>
        {product_lists.map(item =>{
            return(
                <div className='iContainer'  key ={item.productId} >
                    <button className='fav' id={item.productId} onClick={handleFav}><AiOutlineHeart size ="2em"/></button>
                    <div id ={item.productId} onClick={handleModal}>
                    <img className='iImage' src={item.imageURL} alt="product-i" />
                    <h4 className='iName'>{item.name}</h4>
                    <p className='iPrice'>Rs. {item.price}</p>
                    </div>
                </div>
            )
        })}
        {showModal && 
            <div className='mainModal'>
                <div className='modal'>
                    <button className='close' onClick={closeModal}><IoIosCloseCircleOutline size ="2em"/></button>
                    <img className='mImage' src ={modalDetails?.imageURL} alt="product" />
                    <div className='mInfo'>
                        <p>Product ID: {modalDetails?.productId}</p>
                        <h2>{modalDetails.name}</h2>
                        <h1>Rs. {modalDetails.price}</h1>
                        <label>Qty:
                            <input className='mInput' value={qty} type="number" onChange={handleQty} />
                        </label>
                        <button className='mButton' onClick={addItem}><HiShoppingBag />ADD TO CART</button>
                    </div>
                </div>
            </div>
        }
    </div>
  )
}

export default Home