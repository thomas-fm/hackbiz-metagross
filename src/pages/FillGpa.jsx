import React, { useContext, useEffect } from 'react'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import { TextField, Button, Grid, Typography } from '@material-ui/core'
import { useState } from 'react'
import useStyles from '../styles'
import { UserContext } from '../context/UserContext'

const FillGpa = () => {
    const countInterest = (gpa) => {
        switch (true) {
            case gpa > 3.7:
                return 0
            case gpa > 3.5 && gpa <= 3.7:
                return 1.5
            case gpa > 3.2 && gpa <= 3.5:
                return 2.5
            case gpa > 3.0 && gpa <= 3.2:
                return 3
            case gpa <= 3:
                return 3.5
        }
    }
    const { user, db, lulus, setLulus } = useContext(UserContext)
    const classes = useStyles()
    const [input, setInput] = useState({
        pilihanSemester: 1,
        jumlahUktArr: [0, 0, 0, 0, 0, 0, 0, 0],
        ipkArr: [0, 0, 0, 0, 0, 0, 0, 0],
        //jumlahUkt: 0,
        //ipk: 0,
        status: [false, false, false, false, false, false, false, false],
        interest: ['-', '-', '-', '-', '-', '-', '-', '-'],
        first: [true, true, true, true, true, true, true, true],
    })
    // const [fetch, setFetch] = useEffect(true)
    const handleChange = (e) => {
        console.log(e.target.value)
        if (e.target.name == 'jumlahUkt') {
            let tmpArr = input.jumlahUktArr
            tmpArr[input.pilihanSemester - 1] = e.target.value
            setInput({
                ...input,
                jumlahUktArr: tmpArr,
            })
        } else if (e.target.name == 'ipk') {
            let tmpArr = input.ipkArr
            tmpArr[input.pilihanSemester - 1] = e.target.value
            setInput({
                ...input,
                ipkArr: tmpArr,
            })
        } else {
            setInput({
                ...input,
                pilihanSemester: e.target.value,
            })
        }
    }
    const move = () => {
        setLulus(true)
    }
    const handleEdit = () => {
        let tmpArray = input.status
        tmpArray[input.pilihanSemester - 1] =
            !tmpArray[input.pilihanSemester - 1]
        setInput({
            ...input,
            status: tmpArray,
        })
    }
    const handleClick = (e) => {
        let tmpArray = input.status
        tmpArray[input.pilihanSemester - 1] =
            !tmpArray[input.pilihanSemester - 1]

        let tmpArray2 = input.interest
        tmpArray2[input.pilihanSemester - 1] = countInterest(input.ipk)

        let tmpArray3 = input.first

        // insert
        if (tmpArray3[input.pilihanSemester - 1]) {
            tmpArray3[input.pilihanSemester - 1] = false
            setInput({
                ...input,
                status: tmpArray,
                interest: tmpArray2,
                first: tmpArray3,
            })

            // pudh to database
            let newLoanData = {
                interest: countInterest(
                    input.ipkArr[input.pilihanSemester - 1],
                ).toString(),
                ipk: input.ipkArr[input.pilihanSemester - 1].toString(),
                semester: input.pilihanSemester.toString(),
                ukt: input.jumlahUktArr[input.pilihanSemester - 1].toString(),
                username: user.username,
            }

            const insert = async () => {
                await db
                    .collection('loan')
                    .insertOne(newLoanData)
                    .then((res) => {
                        console.log(res)
                    })
            }

            insert()
        } else {
            setInput({
                ...input,
                status: tmpArray,
                interest: tmpArray2,
            })
            let query = {
                username: user.username,
            }
            let newLoanData = {
                $set: {
                    interest: countInterest(
                        input.ipkArr[input.pilihanSemester - 1],
                    ).toString(),
                    ipk: input.ipkArr[input.pilihanSemester - 1].toString(),
                    semester: input.pilihanSemester.toString(),
                    ukt: input.jumlahUktArr[
                        input.pilihanSemester - 1
                    ].toString(),
                    username: user.username,
                },
            }

            let option = { upsert: false }
            const update = async () => {
                await db
                    .collection('loan')
                    .updateOne(query, newLoanData, option)
                    .then((res) => {
                        console.log(res)
                    })
                    .catch('waw')
            }

            update()
        }
    }

    // useEffect(()=> {
    //     if (fetch){}
    // }, [fetch])
    return (
        <div className={classes.topElement}>
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">
                    Pilih Semester
                </InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={input.pilihanSemester}
                    onChange={handleChange}
                    name="pilihanSemester"
                    className={classes.selectMenu}
                    defaultValue={1}
                    defaultChecked={1}
                >
                    {/* <MenuItem value={0} className={classes.menuaaa}>
                        None
                    </MenuItem> */}
                    <MenuItem value={1} className={classes.menuaaa}>
                        Smt 1
                    </MenuItem>
                    <MenuItem value={2} className={classes.menuaaa}>
                        Smt 2
                    </MenuItem>
                    <MenuItem value={3} className={classes.menuaaa}>
                        Smt 3
                    </MenuItem>
                    <MenuItem value={4} className={classes.menuaaa}>
                        Smt 4
                    </MenuItem>
                    <MenuItem value={5} className={classes.menuaaa}>
                        Smt 5
                    </MenuItem>
                    <MenuItem value={6} className={classes.menuaaa}>
                        Smt 6
                    </MenuItem>
                    <MenuItem value={7} className={classes.menuaaa}>
                        Smt 7
                    </MenuItem>
                    <MenuItem value={8} className={classes.menuaaa}>
                        Smt 8
                    </MenuItem>
                </Select>
            </FormControl>

            <div style={{ width: '100%' }}>
                {input.pilihanSemester && (
                    <Grid
                        container
                        direction="row"
                        justifyContent="space-around"
                        alignItems="center"
                        // style={{ width: '100%' }}
                    >
                        <Grid item xs={5}>
                            <div className={classes.formContainer}>
                                <TextField
                                    className={classes.textField1}
                                    label="Jumlah UKT"
                                    name="jumlahUkt"
                                    value={
                                        input.jumlahUktArr[
                                            input.pilihanSemester - 1
                                        ]
                                    }
                                    onChange={handleChange}
                                    required
                                    disabled={
                                        input.status[input.pilihanSemester - 1]
                                    }
                                />

                                <TextField
                                    className={classes.textField2}
                                    label="IPK"
                                    name="ipk"
                                    value={
                                        input.ipkArr[input.pilihanSemester - 1]
                                    }
                                    onChange={handleChange}
                                    required
                                    disabled={
                                        input.status[input.pilihanSemester - 1]
                                    }
                                />
                                {!input.status[input.pilihanSemester - 1] ? (
                                    <Grid
                                        container
                                        direction="row"
                                        justifyContent="space-between"
                                        alignItems="center"
                                    >
                                        <Grid item xs={3}>
                                            <input
                                                accept="image/*"
                                                className={classes.input}
                                                id="contained-button-file"
                                                multiple
                                                type="file"
                                                hidden
                                            />
                                            <label htmlFor="contained-button-file">
                                                <Button
                                                    variant="contained"
                                                    color="primary"
                                                    component="span"
                                                    className={classes.uploader}
                                                >
                                                    Upload Bukti IPK
                                                </Button>
                                            </label>
                                        </Grid>

                                        <Grid item xs={3}>
                                            <Button
                                                variant="outlined"
                                                color="secondary"
                                                className={classes.submission}
                                                onClick={handleClick}
                                            >
                                                <strong>Submit</strong>
                                            </Button>
                                        </Grid>
                                    </Grid>
                                ) : (
                                    <Button
                                        variant="outlined"
                                        color="primary"
                                        className={classes.submission}
                                        onClick={handleEdit}
                                    >
                                        <strong>Edit</strong>
                                    </Button>
                                )}
                            </div>
                        </Grid>
                        <Grid item xs={3} className={classes.bungaGenerator}>
                            {input.status[input.pilihanSemester - 1] ? (
                                <div style={{ verticalAlign: 'center' }}>
                                    <Typography
                                        variant="h6"
                                        component="h6"
                                        className={classes.bungaSemester}
                                    >
                                        Bunga Semester {input.pilihanSemester}
                                    </Typography>
                                    <Typography variant="h1" component="h2">
                                        {countInterest(
                                            input.ipkArr[
                                                input.pilihanSemester - 1
                                            ],
                                        )}
                                        %
                                    </Typography>
                                </div>
                            ) : (
                                <div>
                                    <Typography
                                        variant="h6"
                                        component="h6"
                                        className={classes.bungaSemester}
                                    >
                                        Isi Jumlah UKT dan IPK
                                    </Typography>
                                    <Typography variant="h1" component="h2">
                                        -
                                    </Typography>
                                </div>
                            )}
                        </Grid>
                    </Grid>
                )}
                {input.status[0] &&
                    input.status[1] &&
                    input.status[2] &&
                    input.status[3] &&
                    input.status[4] &&
                    input.status[5] &&
                    input.status[6] &&
                    input.status[7] && (
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={move}
                            style={{ marginRight: '500px' }}
                        >
                            Bayar
                        </Button>
                    )}
            </div>
        </div>
    )
}

export default FillGpa
