import React from 'react'
import useStyle from '../styles'
import TextField from '@material-ui/core/TextField'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'

const Home = () => {
    const [value, setValue] = React.useState('male')
    const handleChange = (event) => {
        setValue(event.target.value)
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
                        src="../assets/bayarNanti-bg.png"
                    />
                    <h1 className={classes.h11} id="slang">
                        Kerja keras dahulu, bayar nanti.
                    </h1>
                </div>
                <div className={classes.div} id="div2">
                    <form noValidate className={classes.form}>
                        <h1 className={classes.h12}>
                            Ajukan pinjamanmu, sekarang juga!
                        </h1>
                        <TextField
                            className={classes.input}
                            required
                            id="standard-required"
                            label="Name"
                        />
                        <TextField
                            className={classes.input}
                            required
                            id="standard-required"
                            type="number"
                            label="NIK"
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
                        />
                        <TextField
                            className={classes.input}
                            required
                            id="standard-required"
                            type="number"
                            label="Nominal Pinjaman"
                        />
                        <h1 className={classes.h12}> Jangka Waktu </h1>
                        <div className={classes.div2}>
                            <TextField
                                className={classes.input1}
                                required
                                id="standard-required"
                                type="number"
                            />
                            <TextField
                                className={classes.input1}
                                required
                                id="standard-required"
                                type="number"
                            />
                            <TextField
                                className={classes.input1}
                                required
                                id="standard-required"
                                type="number"
                            />
                        </div>
                        <Button variant="contained" className={classes.submit}>
                            Submit
                        </Button>
                    </form>
                </div>
            </div>
            <h1 id="bunga"> DAFTAR BUNGA </h1>
            <section id="pilihan" class="pilihan-kategori">
                <div class="grid">
                    <a href="#" target="_blank" class="pilih-kategori">
                        <h1 id="ipk">IPK</h1>
                        <h2 id="range">3.0 - 3.2</h2>
                        <div class="bunga-title">
                            <br />
                            <h1> Bunga </h1>
                            <h2 id="bunga-persen"> 3% </h2>
                            <br />
                        </div>
                    </a>
                    <a href="#" target="_blank" class="pilih-kategori">
                        <h1 id="ipk">IPK</h1>
                        <h2 id="range">3.2 - 3.49</h2>
                        <div class="bunga-title">
                            <br />
                            <h1> Bunga </h1>
                            <h2 id="bunga-persen"> 2.5% </h2>
                            <br />
                        </div>
                    </a>
                    <a href="#" target="_blank" class="pilih-kategori">
                        <h1 id="ipk">IPK</h1>
                        <h2 id="range">3.5 - 3.70</h2>
                        <div class="bunga-title">
                            <br />
                            <h1> Bunga </h1>
                            <h2 id="bunga-persen"> 1.5% </h2>
                            <br />
                        </div>
                    </a>
                    <a href="#" target="_blank" class="pilih-kategori">
                        <h1 id="ipk">IPK</h1>
                        <h2 id="range">≥ 3.71</h2>
                        <div class="bunga-title">
                            <br />
                            <h1> Bunga </h1>
                            <h2 id="bunga-persen"> 0.0% </h2>
                            <br />
                        </div>
                    </a>
                </div>
            </section>
            <h1 id="mitra"> Mitra Sekolah </h1>
            <section class="section">
                <div class="grid-2">
                    <div class="pilih-mitra">
                        <div class="mitra-itb">
                            <img src="assets/itb.png" id="itb" />
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
                    <div class="pilih-mitra">
                        <div class="mitra-ui">
                            <img src="assets/ui.png" id="ui" />
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
                    <div class="pilih-mitra">
                        <div class="mitra-ugm">
                            <img src="assets/ugm.png" id="ugm" />
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
                <div class="form-group">
                    <button type="submit" id="more-mitra" class="mitra-button">
                        Lihat mitra lebih lengkap
                    </button>
                </div>
            </section>
            <h1 id="testimoni"> Testimoni </h1>
            <section class="section">
                <div class="grid-2">
                    <div class="list-testimoni">
                        <div class="person1">
                            <img src="../../assets/person1.png" id="person1" />
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
                    <div class="list-testimoni">
                        <div class="person2">
                            <img src="../../assets/person2.png" id="person2" />
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
                    <div class="list-testimoni">
                        <div class="person3">
                            <img src="../../assets/person3.png" id="person3" />
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
                <div class="form-group">
                    <button type="submit" id="more-mitra" class="mitra-button">
                        Lihat testimoni lebih lengkap
                    </button>
                </div>
            </section>
        </>
    )
}

export default Home
