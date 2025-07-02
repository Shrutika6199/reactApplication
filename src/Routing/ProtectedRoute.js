import React from 'react'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({user,children}) => {
    if(user.fname==='' && user.mail==='')
    {
        return (<Navigate to='/login'></Navigate>)
    }
    else
    {
        return children;
    }
}

export default ProtectedRoute