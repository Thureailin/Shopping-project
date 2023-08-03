import React from 'react'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'
import Cart from './Cart'

const Addtocart = () => {
    const {cartItems,totalAmount,quantity} = useSelector(state => (state.cart));
    if(cartItems.length === 0){
        return(
            <div className='flex justify-center h-screen items-center'>
            <div className='flex flex-col gap-4'>
                <h1 className='text-3xl tracking-wider'>Your Cart is Empty</h1>
              <Link to={'/'}>
                <button className='px-4 py-1 btn btn-primary mx-5 text-white '>
                    Fill it
                    </button>
                    </Link>
            </div>
            </div>
        )
    }
  return (
    <div>
    <div>
        {cartItems?.map(item=>{
            return(
                <Cart key={item.id} {...item}/>
            )
        })}
    </div>
    <hr  className='border text-purple-800 w-[70%] mx-auto mt-5'/>
    <div className='mt-5 flex   mx-auto justify-around items-center'>
        <h2 className='text-secondary font-semibold'>Total</h2>
        <h4 className="text-secondary">{totalAmount.toFixed(2)}</h4>  
    </div>
    </div>
  )
}

export default Addtocart