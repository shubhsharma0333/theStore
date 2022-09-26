import { INCREMENT, DECREMENT, INCREMENTFAV } from "./actions";

let initialState = {cart:[], favorites:[]};

export const reducer = (state = initialState, action)=>{
    if(action.type === INCREMENT){
        console.log("pay", action.payload)
        let index =state.cart?.findIndex(el => el.productId === action.payload.productId )
        if(index > -1){
            state.cart[index].quantity += action.payload.quantity
        }else{
            return {cart: [...state.cart, action.payload]}
        } 

        
        return state
    }
    if(action.type === DECREMENT){
        let index =state.cart.findIndex(el => el.productId === action.payload)
        
        console.log(index)
        if(index > -1){
            return {cart:[...state.cart.slice(0,index),...state.cart.slice(index+1)]} 
        }
        
        console.log(state.cart)
        return state
    }
    if(action.type === INCREMENTFAV){
        let index =state.favorites.findIndex(el => el === action.payload)
        
        console.log("Hey", index)
        if(index > -1){
            return {favorites:[...state.favorites.slice(0,index),...state.favorites.slice(index+1)]} 
        }else{
            console.log({favorites: [...state.favorites, action.payload]})
            return {favorites: [...state.favorites, action.payload]}
        }
        
        
    }
    return state
}