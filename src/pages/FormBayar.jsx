import React, { useContext, useEffect, useState } from 'react'
import useStyle from '../styles'
import InputLabel from '@material-ui/core/InputLabel'
import Input from '@material-ui/core/Input'
import Dialog from '@material-ui/core/Dialog'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import Button from '@material-ui/core/Button'
import CloudUploadIcon from '@material-ui/icons/CloudUpload'
import { UserContext } from '../context/UserContext'

// 1 bulan interest = 0.1
const hitungTambahanInterest = (v) => {
    if (v == 1) return 0.1
    if (v == 2) return 0.2
    if (v == 3) return 0.3
    if (v == 4) return 0.4
    if (v == 5) return 0.5
    if (v == 6) return 0.6
    else return 0
}

const hitungAngsuran = (ukt, interest1, interest2, lama) => {
    return (ukt / lama) * (interest1 / 100 + interest2 / 100) + ukt / lama
}
const FormBayar = () => {
    const [open, setOpen] = React.useState(false)
    const [bulan, setBulan] = React.useState('')
    const [currentFase, setCurrentFase] = React.useState(1)
    const [onFase, setOnFase] = React.useState(false)
    const [berapaLama, setBerapaLama] = React.useState(0)
    const [uktSemester, setUktSemester] = React.useState({
        ukt: 0,
        interest: 0,
    })
    const [bulanBerapa, setBulanBerapa] = useState(1)
    const [rows, setRows] = useState([])
    const { user, db } = useContext(UserContext)

    const handleChange = (event) => {
        setBulan(Number(event.target.value) || '')
    }

    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    function createData(Bulan, Status) {
        return { Bulan, Status }
    }

    // const rows = [
    //     createData(1, 'Sudah'),
    //     createData(2, 'Sudah'),
    //     createData(3, 'Belum'),
    //     createData(4, 'Sudah'),
    //     createData(5, 'Belum'),
    //     createData(6, 'Sudah'),
    // ]

    const generateRow = (bulan) => {
        let arr = []
        for (var i = 0; i < bulan; i++) {
            arr.push(createData(i + 1, 'Belum'))
        }

        return arr
    }
    const handleUpload = (event) => {
        let formData = new FormData()
        let file = event.currentTarget.files[0]
        formData.append('file', file)
        formData.append('upload_preset', 'zhuor2lb')
        axios
            .post(
                'https://api.cloudinary.com/v1_1/stand-with-dorayaki/image/upload',
                formData,
            )
            .then((resp) => {
                setInput({
                    ...input,
                    img_url: `https://res.cloudinary.com/stand-with-dorayaki/image/upload/v${resp.data.version}/${resp.data.public_id}`,
                })
            })

        console.log('aku di klik')
    }

    const handlePilihPeriode = () => {
        setBerapaLama(parseInt(bulan)) // set berapa bulan bayarnya
        console.log(bulan)
        setOnFase(true) // set supaya 2 button muncul
        setOpen(false) // set dialog tersembunyi
        setRows(generateRow(bulan)) // set row dari berapa bulan
        setBulanBerapa(1)
        // insert database username dan current periode bayar
        const insertPeriode = async () => {
            await db.collection('periodeBayar').insertOne({
                bulan: bulan.toString(),
                periode: '1',
                username: user.username,
            })
        }

        // insert ke database payment
        // periode = berapa periode dalam 1 semester
        const insertPayment = async () => {
            await db.collection('payment').insertOne({
                periode: bulan.toString(),
                semester: currentFase.toString(),
                status: false,
                username: user.username,
            })
        }

        insertPeriode()
        insertPayment()

        // test
        // console.log(
        //     hitungAngsuran(
        //         uktSemester.ukt,
        //         uktSemester.interest,
        //         hitungTambahanInterest(bulan),
        //         bulan,
        //     ),
        // )

        // if bulanBerapa == bulan
    }

    // handle tombol verifikasi
    const handleSubmit = () => {
        // bulanberapa +=1
        // go to next bulan
        let next = bulan + 1
        setBulanBerapa({
            next,
        })
        console.log(rows)
        console.log(bulanBerapa)
        if (bulanBerapa > berapaLama) {
            // lanjut on next fase
            setOnFase(false)

            let newFase = currentFase + 1
            setCurrentFase(newFase)

            // jika newfase lebih besar dari 8

            if (newFase > 8) {
                console.log('kamu lolos')
            } else {
                // setRows([])
            }
            console.log('berhasil')
            // delete database
            const query = {
                username: user.username,
            }
            // delete dari tabel periode bayar
            const deleteFunc = async () =>
                await db.collection('periodeBayar').deleteOne(query)

            deleteFunc()
            setRows([])
            console.log(rows)
        } else {
            let nextBulan = parseInt(bulanBerapa) + 1
            setBulanBerapa(nextBulan)
        }
        // update database periodeBayar menjadi bulan baru

        // update table
        if (bulanBerapa <= berapaLama) {
            let arr = rows
            arr[parseInt(bulanBerapa) - 1].Status = 'Sudah'
            console.log(arr)
            setRows(arr)
        }
    }

    const classes = useStyle()

    useEffect(() => {
        // get nilai ukt dalam suatu semester dari si user
        console.log(db)

        const fetchData = async () => {
            await db
                .collection('loan')
                .findOne({
                    username: user.username,
                    semester: currentFase.toString(),
                })
                .then((res) => {
                    console.log(res)

                    setUktSemester({
                        ukt: parseInt(res.ukt),
                        interest: parseFloat(res.interest),
                    })
                    console.log('ini ukt')
                    console.log(parseInt(res.ukt))
                    console.log(parseFloat(res.interest))
                })
                .catch('ini kenapa')
        }
        if (db) {
            fetchData()
        }
    }, [currentFase, db, bulanBerapa, rows])
    return (
        <>
            <div className={classes.phase}>
                <div className={classes.subPhase}>
                    <h1 className={classes.titlePhase}> Fase {currentFase} </h1>
                    <div className={classes.formPhase}>
                        {!onFase && (
                            <Button
                                onClick={handleClickOpen}
                                className={classes.month}
                            >
                                Pilih berapa bulan
                            </Button>
                        )}

                        <Dialog open={open} onClose={handleClose}>
                            <DialogTitle>Pilih bulan</DialogTitle>
                            <DialogContent>
                                <form className={classes.container1}>
                                    <FormControl
                                        className={classes.formControl1}
                                    >
                                        <InputLabel htmlFor="demo-dialog-native">
                                            Bulan
                                        </InputLabel>
                                        <Select
                                            native
                                            value={bulan}
                                            onChange={handleChange}
                                            input={
                                                <Input id="demo-dialog-native" />
                                            }
                                        >
                                            <option
                                                aria-label="None"
                                                value={berapaLama}
                                            />
                                            <option value={1}>1</option>
                                            <option value={2}>2</option>
                                            <option value={3}>3</option>
                                            <option value={4}>4</option>
                                            <option value={5}>5</option>
                                            <option value={6}>6</option>
                                        </Select>
                                        <Button onClick={handlePilihPeriode}>
                                            Pilih
                                        </Button>
                                    </FormControl>
                                </form>
                            </DialogContent>
                        </Dialog>
                        {onFase && (
                            <>
                                <div className={classes.div3}>
                                    <label
                                        htmlFor="button-upload"
                                        style={{ paddingTop: '10px' }}
                                    >
                                        <Button
                                            variant="contained"
                                            color="default"
                                            className={classes.upload}
                                            id="upload"
                                            startIcon={<CloudUploadIcon />}
                                            component="span"
                                        >
                                            Upload
                                        </Button>
                                    </label>
                                    <input
                                        accept="image/*"
                                        id="button-upload"
                                        onChange={handleUpload}
                                        type="file"
                                        hidden
                                        required
                                    />
                                </div>
                                <Button
                                    variant="contained"
                                    color="default"
                                    id="upload"
                                    className={classes.submit}
                                    onClick={handleSubmit}
                                >
                                    Verifikasi
                                </Button>
                                <div>
                                    <h2>
                                        Biaya per bulan : <strong>Rp</strong>
                                        {hitungAngsuran(
                                            uktSemester.ukt,
                                            uktSemester.interest,
                                            hitungTambahanInterest(bulan),
                                            bulan,
                                        )}
                                    </h2>
                                </div>
                            </>
                        )}
                        {/* <div className={classes.div3}>
                            <label htmlFor="button-upload">
                                <Button
                                    variant="contained"
                                    color="default"
                                    className={classes.upload}
                                    id="upload"
                                    startIcon={<CloudUploadIcon />}
                                    component="span"
                                >
                                    Upload
                                </Button>
                            </label>
                            <input
                                accept="image/*"
                                id="button-upload"
                                onChange={handleUpload}
                                type="file"
                                hidden
                                required
                            />
                        </div>
                        <Button
                            variant="contained"
                            color="default"
                            id="upload"
                            className={classes.submit}
                            onClick={handleSubmit}
                        >
                            Verifikasi
                        </Button> */}
                    </div>
                </div>
                <div className={classes.tablePhase}>
                    <TableContainer component={Paper}>
                        <Table
                            className={classes.table}
                            aria-label="simple table"
                        >
                            <TableHead>
                                <TableRow>
                                    <TableCell className={classes.baris}>
                                        Bulan
                                    </TableCell>
                                    <TableCell
                                        align="right"
                                        className={classes.baris}
                                    >
                                        Status
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow key={row.Bulan}>
                                        <TableCell
                                            component="th"
                                            scope="row"
                                            className={classes.baris}
                                        >
                                            {row.Bulan}
                                        </TableCell>
                                        <TableCell
                                            align="right"
                                            className={classes.baris}
                                        >
                                            {row.Status}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>
        </>
    )
}

export default FormBayar
