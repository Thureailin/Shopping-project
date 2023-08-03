 import React from 'react'
 

import { Loader } from '@mantine/core';
 
 const Loading = () => {
   return (
     <div className='flex justify-center items-center mt-7'>
          <Loader color="violet" variant="bars" />
     </div>
   )
 }
 
 export default Loading