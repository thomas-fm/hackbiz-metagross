import React, { useContext } from 'react'
import { AppBar, Box, Button, Toolbar, Typography } from '@material-ui/core'
import useStyles from '../styles'
import { UserContext } from '../context/UserContext'
import { useHistory } from 'react-router-dom'

const Appbar = () => {
    const classes = useStyles()
    const { user, setUser } = useContext(UserContext)
    let history = useHistory()
    const handleClick = () => {
        history.push('/login')
    }
    const handleLogout = () => {
        localStorage.removeItem('user')
        setUser(null)
        history.push('/')
    }
    return (
        <>
            <AppBar className={classes.appBar}>
                <Toolbar>
                    <div>
                        <Typography
                            className={classes.appBarTitle}
                            variant="h6"
                        >
                            Edurang
                        </Typography>
                    </div>
                    <div className={classes.appBarRight}>
                        <Button className={classes.appBarButton}>
                            <strong>Jenis Pinjaman</strong>
                        </Button>
                        <Button className={classes.appBarButton}>
                            <strong>Tentang Kami</strong>
                        </Button>
                        {user ? (
                            <Button
                                className={classes.appBarLogin}
                                onClick={handleLogout}
                            >
                                <strong>Logout</strong>
                            </Button>
                        ) : (
                            <Button
                                className={classes.appBarLogin}
                                onClick={handleClick}
                            >
                                <strong>Masuk</strong>
                            </Button>
                        )}
                    </div>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Appbar
