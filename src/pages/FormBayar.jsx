import React, { useState } from 'react'
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

const FormBayar = () => {
    const [open, setOpen] = React.useState(false)
    const [bulan, setBulan] = React.useState('')

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

    const rows = [
        createData(1, 'Sudah'),
        createData(2, 'Sudah'),
        createData(3, 'Belum'),
        createData(4, 'Sudah'),
        createData(5, 'Belum'),
        createData(6, 'Sudah'),
    ]

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

    const handleSubmit = () => {
        // insert user
        const newUser = {
            gender: value,
            img_url: input.img_url,
            nama: input.name,
            nik: input.nik.toString(),
            password: input.password,
            tahun: input.tahun.toString(),
            universitas: input.universitas,
            username: input.username,
        }
        const insert = async () =>
            await db
                .collection('users')
                .insertOne(newUser)
                .then((res) => console.log(res))
                .catch(console.log('error gan'))

        insert()
    }

    const classes = useStyle()
    return (
        <>
            <div className={classes.phase}>
                <div className={classes.subPhase}>
                    <h1 className={classes.titlePhase}> Fase 1 </h1>
                    <div className={classes.formPhase}>
                        <Button
                            onClick={handleClickOpen}
                            className={classes.month}
                        >
                            Pilih bulan ke berapa
                        </Button>
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
                                                value=""
                                            />
                                            <option value={1}>1</option>
                                            <option value={2}>2</option>
                                            <option value={3}>3</option>
                                            <option value={4}>4</option>
                                            <option value={5}>5</option>
                                            <option value={6}>6</option>
                                        </Select>
                                    </FormControl>
                                </form>
                            </DialogContent>
                        </Dialog>
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
