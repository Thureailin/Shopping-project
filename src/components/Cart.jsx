import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { addItemsQuantity, removeFromCart, subtractItemsQuantity } from '../feature/services/cartSlice';
import {AiFillCaretDown,AiFillCaretUp} from 'react-icons/ai';
import {BsTrash3Fill} from 'react-icons/bs'

const Cart = (props) => {
    const {id,title,price,image,quantity} = props;
    const {cartItems} = useSelector(state => (state.cart));
    const dispatch = useDispatch();
    const oneItemPrice = price * quantity;


  return (
    <div className='flex justify-around mt-5 '>
        <div className='flex gap-5 '>
            <img className='mx-w-[100px] h-[100px]' src={image}  alt=''/>
            <div className=''>
                <h3 className='text-secondary'>{title.substring(0,25)}.....</h3>
                <p className='text-primary'>{oneItemPrice.toFixed(2)}</p>
                <div className='flex'>
                <button onClick={()=>dispatch(removeFromCart(props))} className=' text-red-500 cursor-pointer select-none'>
                    Remove
                </button>
                <button onClick={()=>dispatch(removeFromCart(props))} className='text-red-500'><BsTrash3Fill/></button>
                </div>
            </div>
        </div>
        <div className='flex flex-col items-center'>
            <p onClick={()=> dispatch(addItemsQuantity(props))} className='text-secondary'>
            <AiFillCaretUp/>
            </p>
            <p className='text-primary'>{quantity}</p>
            <p onClick={()=> quantity > 1 && dispatch(subtractItemsQuantity(props))} className='text-secondary'>
            <AiFillCaretDown/>
            </p> 
        </div>
    </div>
  ) 
}

export default Cart