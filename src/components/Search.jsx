import React from 'react'
import { useLocation } from 'react-router-dom'
import Searchchild from './Searchchild';
const Search = () => {
   const location = useLocation();
   const item = location?.state?.filterProduct;
   console.log(item)
 
  return (
    <div className='flex flex-wrap gap-3 justify-center mt-5 '>
        {item?.map(pd=>{
            return(
                <Searchchild key={pd.id} {...pd}/>
            )
        })}
        
    </div>
  )
}

export default Search