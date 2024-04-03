import React, { useState } from 'react'
import { Container, Logo, LogoutButton, ToogleButton } from '../index'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Header() {
    const authStatus = useSelector((state) => state.auth.status)
    const navigate = useNavigate()
    const [toggle, setToggle] = useState(false)
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
                <nav>
                    <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
                        <div className="relative flex h-14 sm:h-16 items-center justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <ToogleButton
                                    toggle={toggle}
                                    onClick={() => setToggle((prev) => !prev)}
                                />
                            </div>
                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                <div className='lex sm:ml-0 -ml-8 select-none flex-shrink-0 items-center'>
                                    <Link to='/'><Logo width='70px' /></Link>
                                </div>
                                <div className="hidden sm:ml-6 sm:flex items-center">
                                    <ul className='flex ml-auto'>
                                        {navItems.map((item) =>
                                            item.active ? (
                                                <li key={item.name} className='list-none'>
                                                    <button
                                                        onClick={() => navigate(item.path)}
                                                        className='inline-bock px-6 py-2 mx-1 text-sm font-medium text-[#deedca] hover:bg-[#deedca] duration-200 rounded hover:bg-opacity-10'
                                                    >{item.name}</button>
                                                </li>
                                            ) : null
                                        )}
                                    </ul>
                                </div>
                                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                    {authStatus && (
                                        <li className='list-none'>
                                            <LogoutButton></LogoutButton>
                                        </li>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div
                            className={`${toggle && "max-h-44"
                                }  sm:hidden max-h-1 overflow-hidden transition-all duration-500`}
                            id="mobile-menu"
                        >
                            <div className="px-2 py-3">
                                {navItems.map(
                                    (item) =>
                                        item.active && (
                                            <li className="list-none" key={item.name}>
                                                <button
                                                    onClick={() => navigate(item.path)}
                                                    className=" text-[#deedca] block hover:bg-[#deedca] duration-200 rounded hover:bg-opacity-10 px-3 py-2 text-sm font-medium"
                                                    aria-current="page"
                                                >
                                                    {item.name}
                                                </button>
                                            </li>
                                        )
                                )}
                            </div>
                        </div>
                    </div>
                </nav>
            </Container>
        </header>
    )
}

export default Header
