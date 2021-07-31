import React from 'react'
import TextField from '@material-ui/core/TextField'
import useStyles from '../styles'
import { Button } from '@material-ui/core'

const Login = () => {
    const classes = useStyles()
    return (
        <div>
            <form noValidate>
                <div className={classes.textField}>
                    <TextField
                        required 
                        id="standard-required"
                        label="Username"
                    />
                </div>
                <div className={classes.textField}>
                    <TextField
                        required 
                        id="standard-required"
                        label="Password"
                    />
                </div>
            </form>
            <Button
                variant="outlined" 
                className={classes.button}
            >
                Submit
            </Button>
        </div>
    )
}

export default Login