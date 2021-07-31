import React, { useContext, useEffect } from 'react'
import CustomCard from '../components/StudentCard'
import { UserContext } from '../context/UserContext'
import FormBayar from '../pages/FormBayar'
import FillGpa from './FillGpa'

const Dashboard = () => {
    const { lulus } = useContext(UserContext)
    useEffect(() => {}, [lulus])
    return (
        <div>
            <CustomCard />
            {(lulus && <FormBayar />) || (!lulus && <FillGpa />)}
        </div>
    )
}

export default Dashboard
