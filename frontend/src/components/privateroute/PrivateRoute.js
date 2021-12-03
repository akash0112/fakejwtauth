import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Redirect, Route } from 'react-router'
const PrivateRoute = ({children}) => {
    const {auth} = useSelector(state => ({...state}))
    // console.log(auth.token);
    return auth.token?children:<Navigate to="/" />
}

export default PrivateRoute