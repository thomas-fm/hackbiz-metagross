import React, { useEffect, useContext } from 'react'
import './App.css'
import Main from './layouts/Main'
import * as Realm from 'realm-web'
import { UserContext } from './context/UserContext'

function App() {
    const { dbUser, setDbUser, setDb } = useContext(UserContext)
    useEffect(() => {
        const firstLogin = async () => {
            // define app id
            const REALM_APP_ID = 'hackbizmetagross-rhidl'
            const app = new Realm.App({ id: REALM_APP_ID })

            // login user dari app anonymously
            const mongoUser = await app.logIn(Realm.Credentials.anonymous())

            // set mongouser
            setDbUser(mongoUser)

            // set service
            const realmService = app.currentUser.mongoClient('mongodb-atlas')

            // set database
            const database = realmService.db('Metagross')
            setDb(database)
        }
        if (!dbUser) {
            firstLogin()
        }
    }, [dbUser])

    return (
        <div className="App">
            <Main />
        </div>
    )
}

export default App
