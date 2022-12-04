import React from 'react';
import {useSelector} from 'react-redux'
import NavBar from './Assets/NavBar';
import UserInfo from './Assets/UserInfo';

export default function DoctorView (){

    const rDoctor = useSelector((state) => state.doctor)
    return (
        <>
        <NavBar/>
        <UserInfo {...rDoctor} />
        <h1 className='userTitle'>
            Greetings, Doctor {rDoctor.Last_Name}.
        </h1>
        <div className='rounded-corners shadow appointments'>
        <div className='appointment-header'>My Patients:</div>
        {rDoctor.Patients.map((patient) => (
            <div>
                <div className='appointment'>{patient.First_Name} {patient.Last_Name}, {patient.Age}</div>
                <div></div>
            </div>
        ))}
        </div>
        <div className='rounded-corners shadow appointments'>
            <div className='appointment-header'>Upcoming appointments:</div>
        {rDoctor.Appointments.map((appointment) => (
            <div className='appointment'>
            <div className='' key={appointment.Date}>
                {appointment.Date.substring(0,10)}, {appointment.Check_In}
            </div>
            <div key = {appointment.Check_In} className=''>
                with: {appointment.First_Name} {appointment.Last_Name}
            </div>
            </div>
        ))}
        </div>
        </>
    );
}; 