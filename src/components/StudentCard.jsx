import { Card, CardContent, Grid, List, ListItem } from '@material-ui/core'
import React from 'react'

const CustomCard = () => {
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
                                    <List>
                                        <ListItem>
                                            Thomas Ferdinand Martin
                                        </ListItem>
                                        <ListItem>
                                            Institut Teknologi Bandung
                                        </ListItem>
                                        <ListItem>Angkatan : 2019</ListItem>
                                    </List>
                                </div>
                            </Grid>
                            <Grid item>
                                <div>Ini foto</div>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </div>
        </>
    )
}

export default CustomCard
