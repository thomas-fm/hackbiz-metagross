import React from 'react'
import { AppBar, Box, Button, Toolbar, Typography } from '@material-ui/core'
import useStyles from '../styles'
import { useHistory } from 'react-router-dom'

const Appbar = () => {
    const classes = useStyles()
    let history = useHistory()
    const handleClick = () => {
        history.push('/login')
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
                        <Button
                            className={classes.appBarLogin}
                            onClick={handleClick}
                        >
                            <strong>Masuk</strong>
                        </Button>
                    </div>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Appbar
