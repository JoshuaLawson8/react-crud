import { useState } from 'react'
import "./LoginForm.css"

export default function LoginForm({setPageState, currentUser, setCurrentUser, currentDoctor, setCurrentDoctor}) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showError, setShowError] = useState(false)

    const onSubmit = (e) => {
    e.preventDefault()
    const re =/(patient|admin|doctor)_\d+/
    const lower = username.toLowerCase()
    if(!re.test(lower) || password !== "password"){
        setShowError(true)
        console.log("error")
        return
    }

    const stateName = lower.substring(0, lower.indexOf('_'));
    const userNum = lower.substring(lower.indexOf('_')+1,lower.length)

    setPageState(stateName)
    setShowError(false)
    if(stateName === "patient"){
        console.log("setting user")
        fetch("http://localhost:8080/api/patient/"+userNum)
        .then(function(res){ return res.json()})
        .then(x => setCurrentUser(x))
        //fetch("http://localhost:8080/api/findPatientAppointments/"+userNum)
        //.then(function(res){ return res.json()})
        //.then(x => setCurrentUser({...currentUser, x}))
        //console.log(currentUser)
        //setCurrentDoctor({})
        
    }
    else if(stateName === "doctor"){
        fetch("http://localhost:8080/api/employee/"+userNum)
        .then(function(res){ return res.json()})
        .then(x => setCurrentDoctor(x))
        setCurrentUser({})
    }
  }
  return (
    <>
    <h1 className='form-header'>Sign in</h1>
    <form className='horizontal-center' onSubmit={(e) => onSubmit(e)}>
        <div className="form-control">
            <label className='hi'>Username</label>
            <input type='text'
             value = {username}
             onChange={(e) => setUsername(e.target.value)}
             ></input>
        </div>
        <div className="form-control">
            <label>Password</label>
            <input type='text'
            value = {password}
            onChange={(e) => setPassword(e.target.value)}
            ></input>
        </div>
        <div className="form-control button-spacer">
            <input className='button' type="submit" value="Log in"/>
        </div>
        {showError ? <div className='error'>Error signing in...try again!</div> : <></>}
    </form>
    </>
  )
}
