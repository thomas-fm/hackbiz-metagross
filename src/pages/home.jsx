import React from 'react'
import useStyle from '../styles'
import TextField from '@material-ui/core/TextField'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import Button from '@material-ui/core/Button'
import CloudUploadIcon from '@material-ui/icons/CloudUpload'
import axios from 'axios'
import { InputTwoTone } from '@material-ui/icons'
import { UserContext } from '../context/UserContext'
import { useHistory } from 'react-router-dom'

const Home = () => {
    const [value, setValue] = React.useState('male')
    const { db, setUser } = React.useContext(UserContext)
    const [input, setInput] = React.useState({
        username: '',
        password: '',
        name: '',
        nik: '',
        tahun: '',
        img_url: '',
        universitas: '',
    })
    let history = useHistory()
    const handleInputChange = (event) => {
        event.preventDefault()
        let name = event.target.name
        let val = event.target.value.toString()

        setInput({
            ...input,
            [name]: val,
        })
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
    const handleChange = (event) => {
        setValue(event.target.value)
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
                .then((res) => {
                    console.log(res)
                    localStorage.setItem(
                        'user',
                        JSON.stringify({
                            username: input.username,
                            password: input.password,
                        }),
                    )
                })
                .catch(console.log('error gan'))

        insert()
    }
    const classes = useStyle()
    return (
        <>
            <div className={classes.divTop} id="divtop">
                <div className={classes.div}>
                    <h1 className={classes.h1} id="slang">
                        Pendidikan untuk semuanya.
                    </h1>
                    <img
                        id="bg-home"
                        className={classes.bghome}
                        src="https://res.cloudinary.com/cloudinary-afif/image/upload/v1627758779/bayarnanti-bg_q2sqem.png"
                    />
                    <h1 className={classes.h11} id="slang">
                        Kerja keras dahulu, bayar nanti.
                    </h1>
                </div>
                <div className={classes.div} id="div2">
                    <form noValidate className={classes.form}>
                        <h1 className={classes.h12} id="h12">
                            Ajukan pinjamanmu, sekarang juga!
                        </h1>
                        <TextField
                            className={classes.input}
                            required
                            id="standard-required"
                            label="Username"
                            name="username"
                            value={input.username}
                            onChange={handleInputChange}
                        />
                        <TextField
                            className={classes.input}
                            required
                            id="standard-required"
                            type="number"
                            label="Password"
                            type="password"
                            name="password"
                            value={input.password}
                            onChange={handleInputChange}
                        />
                        <TextField
                            className={classes.input}
                            required
                            id="standard-required"
                            label="Name"
                            name="name"
                            value={input.name}
                            onChange={handleInputChange}
                        />
                        <TextField
                            className={classes.input}
                            required
                            id="standard-required"
                            type="number"
                            label="NIK"
                            name="nik"
                            value={input.nik}
                            onChange={handleInputChange}
                        />
                        <FormControl
                            component="fieldset"
                            className={classes.gender}
                        >
                            <RadioGroup
                                aria-label="gender"
                                name="gender1"
                                value={value}
                                onChange={handleChange}
                                className={classes.radio}
                            >
                                <FormControlLabel
                                    value="male"
                                    control={<Radio />}
                                    label="Male"
                                />
                                <FormControlLabel
                                    value="female"
                                    control={<Radio />}
                                    label="Female"
                                    className={classes.gender1}
                                />
                            </RadioGroup>
                        </FormControl>
                        <TextField
                            className={classes.input}
                            required
                            id="standard-required"
                            type="text"
                            label="Nama Kampus/Sekolah"
                            name="universitas"
                            value={input.universitas}
                            onChange={handleInputChange}
                        />
                        <TextField
                            className={classes.input}
                            required
                            id="standard-required"
                            type="number"
                            label="Tahun Masuk"
                            name="tahun"
                            value={input.tahun}
                            onChange={handleInputChange}
                        />
                        <div className={classes.div2}>
                            <label htmlFor="button-upload">
                                <Button
                                    variant="contained"
                                    color="default"
                                    className={classes.upload}
                                    id="upload"
                                    startIcon={<CloudUploadIcon />}
                                    component="span"
                                >
                                    Upload Foto
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
                            <label htmlFor="button-upload-ktp">
                                <Button
                                    variant="contained"
                                    color="default"
                                    id="upload"
                                    className={classes.upload}
                                    startIcon={<CloudUploadIcon />}
                                    component="span"
                                >
                                    Upload KTP
                                </Button>
                            </label>

                            <input
                                accept="image/*"
                                id="button-upload-ktp"
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
                            Submit
                        </Button>
                    </form>
                </div>
            </div>
            <h1 id="bunga"> DAFTAR BUNGA </h1>
            <section id="pilihan" className="pilihan-kategori">
                <div className="grid">
                    <a href="#" target="_blank" className="pilih-kategori">
                        <h1 id="ipk">IPK</h1>
                        <h2 id="range">3.0 - 3.2</h2>
                        <div className="bunga-title">
                            <br />
                            <h1> Bunga </h1>
                            <h2 id="bunga-persen"> 3% </h2>
                            <br />
                        </div>
                    </a>
                    <a href="#" target="_blank" className="pilih-kategori">
                        <h1 id="ipk">IPK</h1>
                        <h2 id="range">3.2 - 3.49</h2>
                        <div className="bunga-title">
                            <br />
                            <h1> Bunga </h1>
                            <h2 id="bunga-persen"> 2.5% </h2>
                            <br />
                        </div>
                    </a>
                    <a href="#" target="_blank" className="pilih-kategori">
                        <h1 id="ipk">IPK</h1>
                        <h2 id="range">3.5 - 3.70</h2>
                        <div className="bunga-title">
                            <br />
                            <h1> Bunga </h1>
                            <h2 id="bunga-persen"> 1.5% </h2>
                            <br />
                        </div>
                    </a>
                    <a href="#" target="_blank" className="pilih-kategori">
                        <h1 id="ipk">IPK</h1>
                        <h2 id="range">≥ 3.71</h2>
                        <div className="bunga-title">
                            <br />
                            <h1> Bunga </h1>
                            <h2 id="bunga-persen"> 0.0% </h2>
                            <br />
                        </div>
                    </a>
                </div>
            </section>
            <h1 id="mitra"> Mitra Sekolah </h1>
            <section className="section">
                <div className="grid-2">
                    <div className="pilih-mitra">
                        <div className="mitra-itb">
                            <img
                                src="https://res.cloudinary.com/cloudinary-afif/image/upload/v1627758778/itb_dqntlm.png"
                                id="itb"
                            />
                            <h4 id="itb-name">Institut Teknologi Bandung</h4>
                        </div>
                        <h5 id="itb-loc">Bandung, Jawa Barat</h5>
                        <p id="info"> Biaya kuliah (UKT, Uang Pangkal, dll) </p>
                        <div id="more-info">
                            <a href="#" id="link-info">
                                Info lebih lanjut
                            </a>
                        </div>
                    </div>
                    <div className="pilih-mitra">
                        <div className="mitra-ui">
                            <img
                                src="https://res.cloudinary.com/cloudinary-afif/image/upload/v1627758779/ui_b9pto0.png"
                                id="ui"
                            />
                            <h4 id="ui-name">Universitas Indonesia</h4>
                        </div>
                        <h5 id="ui-loc">Depok, Jawa Barat</h5>
                        <p id="info"> Biaya kuliah (UKT, Uang Pangkal, dll) </p>
                        <div id="more-info">
                            <a href="#" id="link-info">
                                Info lebih lanjut
                            </a>
                        </div>
                    </div>
                    <div className="pilih-mitra">
                        <div className="mitra-ugm">
                            <img
                                src="https://res.cloudinary.com/cloudinary-afif/image/upload/v1627758779/ugm_pkn1sz.png"
                                id="ugm"
                            />
                            <h4 id="ugm-name">Universitas Gadjah Mada</h4>
                        </div>
                        <h5 id="ugm-loc">Yogyakarta, Jawa Tengah</h5>
                        <p id="info"> Biaya kuliah (UKT, Uang Pangkal, dll) </p>
                        <div id="more-info">
                            <a href="#" id="link-info">
                                Info lebih lanjut
                            </a>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <button
                        type="submit"
                        id="more-mitra"
                        className="mitra-button"
                    >
                        Lihat mitra lebih lengkap
                    </button>
                </div>
            </section>
            <h1 id="testimoni"> Testimoni </h1>
            <section className="section">
                <div className="grid-2">
                    <div className="list-testimoni">
                        <div className="person1">
                            <img
                                src="https://res.cloudinary.com/cloudinary-afif/image/upload/v1627758779/person1_k3kwwn.png"
                                id="person1"
                            />
                            <h4 id="person1-name">Merwin Olajuwon</h4>
                        </div>
                        <h5 id="person1-loc">Institut Teknologi Bandung</h5>
                        <p id="info-person1">
                            {' '}
                            Awalnya ragu untuk melanjutkan pendidikan ke
                            jenjangyang lebih tinggi terutama di ITB ini karena
                            kondisi keuanganyang tidak mendukung. Tetapi dengan
                            BayarNanti, saya mampu menghilangkan persepsi
                            tersebut. Terimakasih BayarNanti! LESGOO{' '}
                        </p>
                        <div id="more-info">
                            <a href="#" id="link-info">
                                Info lebih lanjut
                            </a>
                        </div>
                    </div>
                    <div className="list-testimoni">
                        <div className="person2">
                            <img
                                src="https://res.cloudinary.com/cloudinary-afif/image/upload/v1627758779/person2_duyzd0.png"
                                id="person2"
                            />
                            <h4 id="person2-name">Redho Daffasah</h4>
                        </div>
                        <h5 id="person2-loc">Universitas Indonesia</h5>
                        <p id="info-person2">
                            {' '}
                            Dahulu saya tidak yakin bisa melanjutkan pendidikan
                            ke jenjang perkuliahan, disamping itu saya juga
                            merasa pesimis untuk mengikuti beasiswa, namun
                            dengan adanya BayarNanti harapan saya untuk
                            berkuliah dapat tercapai. Dengan menjadi
                            BayarNantiers, saya memiliki motivasi untuk selalu
                            memaksimalkan waktu yang ada selama masa
                            perkuliahan.{' '}
                        </p>
                        <div id="more-info">
                            <a href="#" id="link-info">
                                Info lebih lanjut
                            </a>
                        </div>
                    </div>
                    <div className="list-testimoni">
                        <div className="person3">
                            <img
                                src="https://res.cloudinary.com/cloudinary-afif/image/upload/v1627758779/person3_xsj0q5.png"
                                id="person3"
                            />
                            <h4 id="person3-name">Thomas FM</h4>
                        </div>
                        <h5 id="person3-loc">Universitas Gadjah Mada</h5>
                        <p id="info-person3">
                            {' '}
                            Awalnya ragu untuk melanjutkan pendidikan ke
                            jenjangyang lebih tinggi terutama di ITB ini karena
                            kondisi keuanganyang tidak mendukung. Tetapi dengan
                            BayarNanti, saya mampu menghilangkan persepsi
                            tersebut. Terimakasih BayarNanti!{' '}
                        </p>
                        <div id="more-info">
                            <a href="#" id="link-info">
                                Info lebih lanjut
                            </a>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <button
                        type="submit"
                        id="more-mitra"
                        className="mitra-button"
                    >
                        Lihat testimoni lebih lengkap
                    </button>
                </div>
            </section>
        </>
    )
}

export default Home
