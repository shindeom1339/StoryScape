import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import { logout } from '../../store/authSlice'
import { useNavigate } from 'react-router-dom'

function LogoutButton() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout())
        })
        navigate('/')
    }

    return (
        <button className='inline-bock px-6 py-2 mx-1 text-sm font-medium text-[#deedca] hover:bg-[#deedca] duration-200 rounded hover:bg-opacity-10' onClick={logoutHandler}>LOGOUT</button>
    )
}

export default LogoutButton
