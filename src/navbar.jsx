import profile_component from './assets/profile_component.png'
import notif_bell from './assets/notif_bell.png'
import sathybama from "./assets/sathybama.png"
import { Link } from 'react-router-dom'
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';

export default function Navbar(props){
    const [logoutt,setlogoutt] = useState(false);
    const redirect=useNavigate();
    useEffect(()=>{
        if (logoutt){
            signOut(auth);
            redirect("/");
        }
    })
    return(
        
        <div className="flex bg-[#04779b] justify-between h-20 align-middle">
            <Link to={props.link}>
                <div className="w-80">
                    <img src={sathybama}></img>
                </div>
            </Link>
            <div className="flex justify-evenly align-middle">
                <a className="flex flex-row items-center text-nowrap right-4">
                    <img className="w-[35px] h-auto mb-[2.5px] top-3" src={notif_bell}/>
                </a>
                <p>⠀</p>
                <Link to={props.link} className="flex flex-row items-center text-nowrap right-4">  {/* Use flex-col for vertical alignment */}
                    <img className="w-[50px] h-auto mb-[2.5px] top-3" src={profile_component} alt="Profile Image" /> {/* Added margin for spacing */}
                    <p className="text-end text-white font-bold align-middle">{props.user}</p>
                </Link>
                <p>⠀</p>
                <button onClick={()=>setlogoutt(true)} className=' mt-[15px] text-white bg-[#3996b2] rounded-2xl h-12 hover:transform hover:scale-110 hover:rounded-3xl duration-300 p-2'>Logout</button>
                <p>⠀</p>
            </div>
        </div>
    )
}