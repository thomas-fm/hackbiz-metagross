import React from 'react'
import { AppBar, Box, Button, Toolbar, Typography } from '@material-ui/core'
import useStyles from '../styles'

const Appbar = () => {
    const classes = useStyles()
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
                        <Button className={classes.appBarLogin}>
                            <strong>Masuk</strong>
                        </Button>
                    </div>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Appbar
