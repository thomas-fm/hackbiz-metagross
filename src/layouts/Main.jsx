import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Login from '../pages/Login'
import Appbar from './Appbar'
import { Switch, Route } from 'react-router-dom'
import { Container } from '@material-ui/core'
import useStyles from '../styles'
import Dashboard from '../pages/Dashboard'

const Main = () => {
    const classes = useStyles()
    return (
        <>
            {/*isi disini*/}
            <Appbar />
            <div style={{ paddingTop: '100px' }}>
            <Container clasName={classes.container}>
                <Switch>
                    <Route exact path={'/login'} component={Login} />
                <Route exact path={'/dashboard'} component={Dashboard} />
                    <Route exact path={'/'} component={Login} />
                </Switch>

            </Container>
            </div>
            
            
            <Footer/>
        </>
    )
}

export default Main
