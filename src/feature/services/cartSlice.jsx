import {createSlice} from '@reduxjs/toolkit'
import Cookies from 'js-cookie';
 

const initialState ={
    cartItems :[],
    totalAmount : 0,
    quantity:0
}
const STORAGE_KEY = "cartItems";

const  storedItems = Cookies.get(STORAGE_KEY);

if (storedItems) { 
    initialState.cartItems = JSON.parse(storedItems)
    initialState.totalAmount =calculateAmount(initialState.cartItems) ;
    initialState.quantity = calculateQuantity(initialState.cartItems); 
}

function calculateAmount(cartItems){
    return cartItems.reduce( (total,item)=>total + item.price,0)
    
}
function calculateQuantity(cartItems){
    return cartItems.reduce( (total,item)=>total + item.quantity,0)
}

export const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart:(state,{payload}) =>{
            const isExisted = state.cartItems.find(item=>item.id=== payload.id)
            if(isExisted){
                return state;
            }else{
                state.cartItems = [...state.cartItems,{...payload,quantity:1}];
            }
                state.quantity += calculateQuantity(state.cartItems);
                state.totalAmount += calculateAmount(state.cartItems); 
                Cookies.set(STORAGE_KEY,JSON.stringify(state.cartItems));
           
        },
        removeFromCart:(state,{payload})=>{
        state.cartItems = state.cartItems.filter(item=>item.id != payload.id)
                state.quantity -= calculateQuantity(state.cartItems);
                state.totalAmount -= calculateAmount(state.cartItems); 
                Cookies.set(STORAGE_KEY,JSON.stringify(state.cartItems));
        },
        addItemsQuantity:(state,{payload})=>{
            state.cartItems=state.cartItems.map(item=>{
               if(item.id === payload.id){
                    return {...item,quantity: item.quantity +1}
                }else{
                    return item
                }
              
            });
            state.quantity += calculateQuantity(state.cartItems);
            state.totalAmount += calculateAmount(state.cartItems); 
            Cookies.set(STORAGE_KEY,JSON.stringify(state.cartItems));
           
        },
        subtractItemsQuantity:(state,{payload})=>{
            // const subItem = state.cartItems.find(item=>item.id === payload.id)
            // state.cartItems=state.cartItems.map(item=>{
            //     if(subItem.quantity > 1){
            //     if(item.id === payload.id){
            //          return {...item,quantity: item.quantity -1}
            //      }else{
            //         return subItem
            //      }
               
          

                
          
            //  state.quantity -= calculateQuantity(state.cartItems);
            //  state.totalAmount -= calculateAmount(state.cartItems); 
            //  Cookies.set(STORAGE_KEY,JSON.stringify(state.cartItems));
            const subItem = state.cartItems.find((item)=>item.id === payload.id);
            if(subItem.quantity === 1){
                state.cartItems = state.cartItems.filter(
                    (item)=>item.id !== subItem.id
                );
            }else{
                subItem.quantity -=1;
            }
            state.quantity -= calculateQuantity(state.cartItems);
            state.totalAmount -= calculateAmount(state.cartItems); 
            Cookies.set(STORAGE_KEY,JSON.stringify(state.cartItems));
                  },
                }

                 });
             
            
             
 
export const {addToCart,removeFromCart,addItemsQuantity,subtractItemsQuantity}= cartSlice.actions
export default cartSlice.reducer