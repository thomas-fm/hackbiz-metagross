import React, { useContext } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Login from '../pages/Login'
import Appbar from './Appbar'
import { Switch, Route, Redirect } from 'react-router-dom'
import { Container } from '@material-ui/core'
import useStyles from '../styles'
import Dashboard from '../pages/Dashboard'
import Home from '../pages/home'
import { UserContext } from '../context/UserContext'

const Main = () => {
    const classes = useStyles()
    const { user } = useContext(UserContext)

    return (
        <>
            {/*isi disini*/}
            <Appbar />
            <div style={{ paddingTop: '100px' }}>
                <Container className={classes.container}>
                    <Switch>
                        <Route
                            render={(props) =>
                                user ? (
                                    <Dashboard {...props} />
                                ) : (
                                    <Redirect to="/" />
                                )
                            }
                            path={'/dashboard'}
                        />
                        <Route
                            render={(props) =>
                                !user ? (
                                    <Login {...props} />
                                ) : (
                                    <Redirect to="/dashboard" />
                                )
                            }
                            path={'/login'}
                        />
                        <Route
                            render={(props) =>
                                !user ? (
                                    <Home {...props} />
                                ) : (
                                    <Redirect to="/dashboard" />
                                )
                            }
                            path={'/'}
                        />
                    </Switch>
                </Container>
            </div>

            <Footer />
        </>
    )
}

export default Main
