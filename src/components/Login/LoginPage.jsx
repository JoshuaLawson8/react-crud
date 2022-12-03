import LoginForm from "./LoginForm";
import './LoginPage.css'

export default function LoginPage({setPageState, currentUser, setCurrentUser, currentDoctor, setCurrentDoctor}) {
  return (
    <div className='centered box rounded-corners shadow'>
        <LoginForm setPageState={setPageState} setCurrentUser={setCurrentUser} setCurrentDoctor={setCurrentDoctor} currentDoctor={currentDoctor} currentUser={currentUser} />
    </div>
  )
}
