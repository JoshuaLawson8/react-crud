import "bootstrap/dist/css/bootstrap.min.css";
import LoginPage from "./components/Login/LoginPage";
import { useEffect, useState } from "react";
import UserView from "./components/UserView";
import AdminView from "./components/AdminView";
import DoctorView from "./components/DoctorView";


function App() {
  const [pageState, setPageState] = useState('login')
  const [currentUser, setCurrentUser] = useState({})
  const [currentDoctor, setCurrentDoctor] = useState({})
  const [currentPage, setCurrentPage] = useState(<LoginPage setPageState={setPageState} currentUser={currentUser} currentDoctor={currentDoctor} setCurrentUser={setCurrentUser} setCurrentDoctor={setCurrentDoctor}/>)

  useEffect(() => {
    console.log("use effect")
    console.log(currentUser)
    switch(pageState){
      case 'patient':
        setCurrentPage(<UserView currentUser={currentUser}/>)
    }},[pageState, currentUser])
  // switch (pageState) {
  //   case 'login':
  //     setCurrentPage(<LoginPage setPageState={setPageState} currentUser={currentUser} currentDoctor={currentDoctor} setCurrentUser={setCurrentUser} setCurrentDoctor={setCurrentDoctor}/>)
  //     break;
  //   case 'patient':
  //     setCurrentPage(<UserView currentUser={currentUser}/>)
  //     break;
  //   case 'doctor':
  //     setCurrentPage(<DoctorView currentDoctor={currentDoctor}/>)
  //     break;
  //   case 'admin':
  //     setCurrentPage(<AdminView/>)
  //     break;
  //}

  return (
   currentPage
  );
}

export default App;
