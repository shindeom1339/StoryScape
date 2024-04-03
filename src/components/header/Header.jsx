import React from 'react'
import { Container, Logo, LogoutButton } from '../index'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Header() {
    const authStatus = useSelector((state) => state.auth.status)
    const navigate = useNavigate()
    const navItems = [
        {
            name: 'HOME',
            path: "/",
            active: true
        },
        {
            name: "LOGIN",
            path: "/login",
            active: !authStatus,
        },
        {
            name: "SIGNUP",
            path: "/signup",
            active: !authStatus,
        },
        {
            name: "ALL POSTS",
            path: "/all-posts",
            active: authStatus,
        },
        {
            name: "ADD POST",
            path: "/add-post",
            active: authStatus,
        },
    ]


    return (
        <header className='py-3 shadow bg-[#114232]'>
            <Container>
                <nav className='flex'>
                    <div className='mr-4'>
                        <Link to='/'><Logo width='70px' /></Link>
                    </div>
                    <ul className='flex ml-auto'>
                        {navItems.map((item) =>
                            item.active ? (
                                <li key={item.name}>
                                    <button
                                        onClick={() => navigate(item.path)}
                                        className='inline-bock px-6 py-2 mx-1 text-sm font-medium text-[#deedca] hover:bg-[#deedca] duration-200 rounded hover:bg-opacity-10'
                                    >{item.name}</button>
                                </li>
                            ) : null
                        )}
                        {authStatus && (
                            <li>
                                <LogoutButton></LogoutButton>
                            </li>
                        )}
                    </ul>
                </nav>
            </Container>
        </header>
    )
}

export default Header
