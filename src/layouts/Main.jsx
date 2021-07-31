import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Login from '../pages/Login'
import Appbar from './Appbar'
import Home from '../pages/home'

const Main = () => {
    return (
        <>
            {/*isi disini*/}
            <Appbar />
            <Home></Home>
            <Footer></Footer>
        </>
    )
}

export default Main
