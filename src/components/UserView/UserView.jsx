import React, { useEffect, useState } from 'react';
import {useSelector} from 'react-redux'
import NavBar from '../Assets/NavBar';
import './UserView.css'
export default function UserView (){
    const rUser = useSelector((state) => state.user)

    if(rUser.Patient_ID > 0){
        return( 
        <>
        <NavBar/>
        <div className='userInfo'>hi</div>
        <h1>Welcome {rUser.First_Name}!</h1>
        <div>Appointments:</div>
        {rUser.Appointments.map((appointment) => (
            <>
            <div className='appointment' key={appointment.Date}>
                {appointment.Date.substring(0,10)}, {appointment.Check_In}
            </div>
            <div key = {appointment.Check_In}>
                with: {appointment.First_Name} {appointment.Last_Name}
            </div>
            </>
        )
        )}
        <div>Your Primary Care Provider:</div>
        {rUser.Provider.First_Name} {rUser.Provider.Last_Name}
        </>
         )
    }
    else
        return <h1>Not signed in</h1>

};

