import React from 'react'
import TextField from '@material-ui/core/TextField'
import useStyles from '../styles'
import { Button } from '@material-ui/core'
import { useContext, useState } from 'react'
import { UserContext } from '../context/UserContext'
import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

const Login = () => {
    const classes = useStyles()
    const { db, user, setUser } = useContext(UserContext)
    const [input, setInput] = useState({
        username: '',
        password: '',
    })

    let history = useHistory()
    const handleChange = (e) => {
        e.preventDefault()

        let name = e.currentTarget.name
        let value = e.currentTarget.value

        setInput({
            ...input,
            [name]: value,
        })
    }

    const handleSubmit = () => {
        // cari tau apakah bisa login
        const result = async () =>
            await db.collection('users').findOne({
                username: input.username,
                password: input.password,
            })
        result()
            .then((res) => {
                console.log(res)
                setUser({ username: res.username, password: res.password })
                history.push('/dashboard')
                let userr = {
                    username: res.username,
                    password: res.password,
                }
                // JSON.parse(localStorage.setItem('user', userr))
            })
            .catch(console.log('waduh'))
    }
    useEffect(() => {}, [])
    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <form noValidate>
                <div className={classes.textField}>
                    <TextField
                        required
                        id="standard-required"
                        label="Username"
                        value={input.username}
                        onChange={handleChange}
                        name="username"
                    />
                </div>
                <div className={classes.textField}>
                    <TextField
                        required
                        id="standard-required"
                        label="Password"
                        value={input.password}
                        onChange={handleChange}
                        name="password"
                    />
                </div>
                <div>
                    <Button
                        variant="outlined"
                        onClick={handleSubmit}
                        className={classes.button}
                    >
                        Submit
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default Login
