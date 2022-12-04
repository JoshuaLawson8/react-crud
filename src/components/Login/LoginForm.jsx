import { useState } from 'react'
import "./LoginForm.css"
import { useSelector, useDispatch } from 'react-redux'
import { setDoctor } from '../../features/doctorSlice'
import { setUser, setProvider} from '../../features/userSlice'
import { useNavigate } from 'react-router-dom'

export default function LoginForm() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showError, setShowError] = useState(false)

  const dispatch = useDispatch()
  const navigate = useNavigate()
 // const rUser = useSelector((state) => state.user.value)

    const onSubmit = async (e) => {
    
    //to not refresh page
    e.preventDefault()

    //check username and password 
    const re =/(patient|admin|doctor)_\d+/
    const lower = username.toLowerCase()
    if(!re.test(lower) || password !== "password"){
        setShowError(true)
        console.log("error")
        return
    }

    const stateName = lower.substring(0, lower.indexOf('_'));
    const userNum = lower.substring(lower.indexOf('_')+1,lower.length)

    setShowError(false)

    if(stateName === "patient"){
        let errored = false
        let user = await fetch("http://localhost:8080/api/patient/"+userNum)
        .then(function(res){ 
            if(res.ok){
                return res.json()
            }
            errored = true
            setShowError(true)
            throw Error("not found")
        })
        .catch(function(error) { console.log(error)})
        if(errored)
            return
        
        await fetch("http://localhost:8080/api/findPatientAppointments/"+userNum)
        .then(function(res){ return res.json()})
        .then(x => dispatch(setUser({...user, Appointments:x})))

        await fetch('http://localhost:8080/api/findProvider/'+userNum)
        .then(function(res){ return res.json()})
        .then(x => dispatch(setProvider(x)))
        navigate('/patient')
        return
    }
    if(stateName === "doctor"){
        let doctor = await fetch("http://localhost:8080/api/employee/"+userNum)
        .then(function(res){ return res.json()})
        await fetch("http://localhost:8080/api/findDoctorAppointments/"+userNum)
        .then(function(res){ return res.json()})
        //.then(x => setCurrentUser({...doctor, Appointments:x}))
        //setCurrentUser({})
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
