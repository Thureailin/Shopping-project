import React from 'react'
import { addToCart } from '../feature/services/cartSlice';
import { useDispatch } from 'react-redux'
const Searchchild = (props) => {
    const{id,title,image,price} = props;
    const dispatch = useDispatch();
  return (
    <div>
        <div className='w-75 shadow rounded flex flex-col p-7 bg-white'>
        <img src={image} className='max-w-[150px] h-[150px]'alt=''/>
        <div>
            <h2 className='text-gray-500 text-2xl font-semibold'>
                {title.substring(0,25)}.....
            </h2>
            <p className='text-red-800'>${price} </p>
            <div className='mt-5 justify-between'>
            <button onClick={()=>dispatch(addToCart(props))} className='mr-2 px-6 py-2 btn btn-secondary rounded shadow text-white'>Add to Cart</button>
            <button  className='px-6 py-2 btn btn-orange-500 shadow text-white'>Detail</button>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Searchchild