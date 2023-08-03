
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import { Badge, Input } from "@mantine/core";
import { BsFillHandbagFill } from "react-icons/bs"

const Navbar = () => {
  const [products,setProducts] = useState([]);
  const [isLoading,setIsLoading] = useState(true);
  const [search,setSearch] = useState('');
  const navigate = useNavigate(); 

  useEffect(()=>{
      fetchProduct()
  },[])

  const fetchProduct = async ()=>{
      const api = await fetch('https://fakestoreapi.com/products')
      const data = await api.json()
      setProducts(data)
      setIsLoading(false)
  }
  
  const filterProduct = products?.filter( item=> item.title.toLowerCase().includes(search)) 
   

  const searchHandler = (e) =>{
    e.preventDefault();
    navigate('/search',{state:{filterProduct}})
    console.log(filterProduct)

    
  }
  const {cartItems} = useSelector(state =>(state.cart));
   
  console.log(cartItems)
  return (
    <div className='flex justify-around p-7 shadow-lg'>
      <Link to={'/'}>
        <h2 className='text-3xl text-purple-800 hover:text-purple-500'>Comfity</h2>
        </Link>
        <div className='flex gap-5'>
          <form onSubmit={searchHandler} className='flex'>
          
            <input type="text" placeholder="Search" className="input input-bordered input-primary w-full max-w-xs"  value={search} onChange={e=>setSearch(e.target.value)}/>
            </form>
            <Link to={'/addtocart'}>
            <div className='relative'>
              <Badge className='absolute bottom-7 left-3 badge badge-secondary badge-lg' >{cartItems.length}</Badge>
              <BsFillHandbagFill className=" relative text-3xl text-violet-800" style={{zIndex:10}}/>
              
            </div>
            </Link>
          
        </div>  

    </div>
  )
}

export default Navbar