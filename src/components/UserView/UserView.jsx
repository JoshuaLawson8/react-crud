import React, { useEffect, useState } from 'react';
import {useSelector} from 'react-redux'
import NavBar from '../Assets/NavBar';
import UserInfo from '../Assets/UserInfo';
import './UserView.css'
export default function UserView (){
    const rUser = useSelector((state) => state.user)

    if(rUser.Patient_ID > 0){
        return( 
        <>
        <NavBar/>
        <UserInfo {...rUser}
        />
        <h1 className='userTitle'>Welcome {rUser.First_Name}!</h1>
        <div className='rounded-corners shadow appointments'>
        <div className='appointment-header'>Appointments:</div>
        {rUser.Appointments.map((appointment) => (
            <div className='appointment'>
            <div className='' key={appointment.Date}>
                {appointment.Date.substring(0,10)}, {appointment.Check_In}
            </div>
            <div key = {appointment.Check_In} className=''>
                with: {appointment.First_Name} {appointment.Last_Name}
            </div>
            </div>
        )
        )}
        </div>
        <div className='rounded-corners shadow appointments'>
        <div className='appointment-header'>Your Primary Care Provider:</div>
        <div className='appointment'>{rUser.Provider.First_Name} {rUser.Provider.Last_Name}</div>
        </div>
        </>
         )
    }
    else
        return <h1>Not signed in</h1>

};

