import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import authSerive from './appwrite/auth'
import { login, logout } from './store/authSlice'
import { Footer, Header } from './components'
import { Outlet } from 'react-router-dom'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authSerive.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }))
        }
        else {
          dispatch(logout())
        }
      })
      .finally(() => setLoading(false))
  }, [])

  return !loading ? (
    // <div className='min-h-screen flex flex-wrap content-between'>
    //   <div className='w-full block'>
    <div className='min-h-screen flex flex-col'>
      {/* <div className='flex-grow'> */}
      <Header />
      {/* <main className='max-h-screen'> */}
      <Outlet />
      {/* </main> */}
      <Footer />
      {/* </div> */}
    </div>
  ) : null
}

export default App
