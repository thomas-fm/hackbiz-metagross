import React, { createContext, useState } from 'react'

export const UserContext = createContext()
export const UserProvider = (props) => {
    const currentUser = JSON.parse(localStorage.getItem('user'))
    console.log(currentUser)
    const initiateUser = currentUser ? currentUser : null
    const [user, setUser] = useState(initiateUser)
    const [db, setDb] = useState(null)
    const [dbUser, setDbUser] = useState(null)
    const [lulus, setLulus] = useState(false)

    return (
        <UserContext.Provider
            value={{
                user,
                db,
                dbUser,
                setUser,
                setDb,
                setDbUser,
                lulus,
                setLulus,
            }}
        >
            {props.children}
        </UserContext.Provider>
    )
}
