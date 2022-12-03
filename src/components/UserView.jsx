import React, { useEffect, useState } from 'react';

export default function UserView ({currentUser}){


    //getAppointments()
    return (
        <>
        <div>
            Greetings {currentUser.First_Name}
        </div>
        <div>
        Appointments:

        </div>
        </>
    );
};

/*
        {appointments.map((appointment) => (
            <h1>app</h1>
        )

        )}*/