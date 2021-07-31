import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Login from '../pages/login'

const Main = () => {
    return (
        <>
            {/*isi disini*/}
            <Navbar></Navbar>
            <br/>
            <Login/>
            <Footer></Footer>
        </>
    )
}

export default Main
