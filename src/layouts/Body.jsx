import React from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import Dashboard from '../pages/FormIP'

const Body = () => {
    const { user } = useContext(UserContext)

    useEffect(() => {
        // JSON.parse(localStorage.setItem('user', null))
        console.log(user)
    }, [user])

    return (
        <>
            <div>
                {(user && <Dashboard />) || (!user && <div>Belum login</div>)}
            </div>
        </>
    )
}

export default Body
