import React from 'react'
import { Children } from 'react';
import {useLocation} from 'react-router-dom'
const RouteGuard = ({children}) => {
    const location = useLocation();
    if(location?.state !=null){
return children
    }else{
        return <Navigate to={'/'}/>
    }
    
 
}

export default RouteGuard