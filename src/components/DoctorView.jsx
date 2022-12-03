import React from 'react';

export default function DoctorView ({currentDoctor}){
    return (
        <div>
            Greetings, {currentDoctor.First_Name}
        </div>
    );
};