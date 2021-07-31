import React, { useState } from 'react'
import { Grid } from '@material-ui/core'

const FormBayar = () => {
    const [fase, setFase] = useState(0)
    return (
        <>
            <div>
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Grid item xs={6}>
                        <h3>Fase ${fase}</h3>
                    </Grid>
                    <Grid item xs={6}></Grid>
                </Grid>
            </div>
        </>
    )
}

export default FormBayar
