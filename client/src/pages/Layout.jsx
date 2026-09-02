import React from 'react'
import { Outlet } from 'react-router-dom'
import { useAppContext } from '../context/AppContext'

export function AuthLayout(){
    const {user , loadingUser} = useAppContext()
}