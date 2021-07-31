import React from 'react'
import Footer from './Footer'
import Appbar from './Appbar'
import CustomRoute from '../routes/routes'
import { Container } from '@material-ui/core'
import useStyles from '../styles'

const Main = () => {
    const classes = useStyles()
    return (
        <>
            {/*isi disini*/}
            <Appbar />
            <div style={{ paddingTop: '100px' }}>
                <Container className={classes.container}>
                    <CustomRoute />
                </Container>
            </div>

            <Footer />
        </>
    )
}

export default Main
