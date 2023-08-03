import React, { useState } from 'react'
import Product from './Product';
import { useEffect } from 'react';
import Loading from './Loading';

const Products = () => {
    const [products,setProducts] = useState([]);
    const [isLoading,setIsLoading] = useState(true);

    useEffect(()=>{
        fetchProduct()
    },[])

    const fetchProduct = async ()=>{
        const api = await fetch('https://fakestoreapi.com/products')
        const data = await api.json()
        setProducts(data)
        setIsLoading(false)
    }
    if (isLoading){
        return(
            <Loading/>
        )
    }
  return (
    <div className='flex flex-wrap gap-8 mt-20 justify-center  '>
      {products?.map(product => {
          return(
              <Product key={product.id} {...product}/>
          )
      })}
  </div>
  )
}

export default Products