import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Dashboard from '../pages/FormIP'
import Login from '../pages/login'

const CustomRoute = () => {
    return (
        <Switch>
            <Route exact path={'/login'} component={Login} />
            <Route exact path={'/dashboard'} component={Dashboard} />
            <Route exact path={'/'} component={Login} />
        </Switch>
    )
}

export default CustomRoute
