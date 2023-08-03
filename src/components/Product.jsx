import React from 'react'
import {useDispatch} from 'react-redux';
import { addToCart } from '../feature/services/cartSlice';
const Product = (props) => {
    const {id,image,description,title,price} = props;
    const dispatch = useDispatch();

  return (
    <div className='w-72  shadow rounded flex flex-col p-7 bg-primary-content border-x-rose-700'>
        <img src={image} className='max-w-[150px] h-[150px]'alt=''/>
        <div>
            <h3 className='text-purple-800 text-2xl font-semibold'>
                {title.substring(0,30)}.....
            </h3>
            <p className='text-red-800'>${price} </p>
            <div className='flex justify-between mt-5'>
            <button onClick={()=>dispatch(addToCart(props))} className='mr-2 px-6 py-2 btn btn-purple-800 btn-primary rounded shadow text-white'>Add to Cart</button>
            <button  className='px-6 py-2 btn btn-dark rounded shadow text-white'>Detail</button>
            </div>
        </div>
    </div>
  )
}

export default Product