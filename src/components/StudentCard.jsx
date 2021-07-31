import { Card, CardContent, Grid, List, ListItem } from '@material-ui/core'
import React, { useContext, useState, useEffect } from 'react'
import { UserContext } from '../context/UserContext'
import useStyles from '../styles'

const CustomCard = () => {
    const classes = useStyles()
    const { user, db } = useContext(UserContext)
    const [info, setInfo] = useState({
        name: '',
        universitas: '',
        tahun: '',
        img_url: '',
    })
    const [fetch, setFetch] = useState(true)
    useEffect(() => {
        const fetchData = async () => {
            await db
                .collection('users')
                .findOne({
                    username: user.username,
                })
                .then((res) => {
                    setInfo({
                        name: res.nama,
                        universitas: res.universitas,
                        tahun: res.tahun,
                        img_url: res.img_url,
                    })
                    console.log(res)
                })
        }

        if (fetch) {
            fetchData()
        }
        setFetch(false)
    }, [fetch])
    return (
        <>
            <div style={{ flexGrow: 1 }}>
                <Card variant="outlined">
                    <CardContent>
                        <Grid
                            container
                            direction="row"
                            justifyContent="space-evenly"
                            alignItems="center"
                        >
                            <Grid item>
                                <div>
                                    <h3
                                        style={{
                                            fontWeight: 'bold',
                                            textAlign: 'left',
                                            padding: '0px 16px',
                                        }}
                                    >
                                        Profil
                                    </h3>
                                    <List className={classes.ull}>
                                        <ListItem>{info.name}</ListItem>
                                        <ListItem>{info.universitas}</ListItem>
                                        <ListItem>
                                            Angkatan : {info.tahun}
                                        </ListItem>
                                    </List>
                                </div>
                            </Grid>
                            <Grid item>
                                <img src={info.img_url} alt="Foto siswa" />
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </div>
        </>
    )
}

export default CustomCard
