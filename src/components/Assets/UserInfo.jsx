import './UserInfo.css'

export default function UserInfo(props) {
    //{First_Name, Last_Name, Address, Height, Weight, Sex, State, City, Zip}
    return (
        <div className='userInfo rounded-corners shadow'>
            <div className='infoTitle'>Your Info</div>
            {props.First_Name ? 
            <>
            <div className='infoType'>Legal Name:</div>
            <div className='info'>{props.First_Name} {props.Last_Name}</div> 
            </>: <></>
            }
            {props.Address ? 
            <>
            <div className='infoType'>Address:</div>
            <div className='info'>{props.Address}</div> 
            </>: <></>
            }
            {props.Height ? 
            <>
            <div className='infoType'>Height/Weight/Sex:</div>
            <div className='info'>{props.Height} in, {props.Weight}lb, {props.Sex}</div> 
            </>: <></>
            }
            {props.City ? 
            <>
            <div className='infoType'>City</div>
            <div className='info'>{props.City}</div> 
            </>: <></>
            }
            {props.State ? 
            <>
            <div className='infoType'>State</div>
            <div className='info'>{props.State}</div> 
            </>: <></>
            }
            {props.Zip ? 
            <>
            <div className='infoType'>Zip</div>
            <div className='info'>{props.Zip}</div> 
            </>: <></>
            }
            
        </div>
    )
}