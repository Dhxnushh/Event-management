import profile_component from './assets/profile_component.png'
import notif_bell from './assets/notif_bell.png'
import sathybama from "./assets/sathybama.png"
import { Link } from 'react-router-dom'

export default function Navbar(){
    return(
        
        <div className="flex bg-[#04779b] justify-between h-20 align-middle">
            <div className="w-80">
                <img src={sathybama}></img>
            </div>
            <div className="flex justify-evenly align-middle">
                <a className="flex flex-row items-center text-nowrap right-4">
                    <img className="w-[35px] h-auto mb-[2.5px] top-3" src={notif_bell}/>
                </a>
                <p>⠀</p>
                <Link to='/staff' className="flex flex-row items-center text-nowrap right-4">  {/* Use flex-col for vertical alignment */}
                    <img className="w-[50px] h-auto mb-[2.5px] top-3" src={profile_component} alt="Profile Image" /> {/* Added margin for spacing */}
                    <p className="text-end text-white font-bold align-middle">Akina benat</p>
                </Link>
                <p>⠀</p>
            </div>
        </div>
    )
}