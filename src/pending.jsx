import Popups from "./popups";
import { useState } from "react";


export default function Pending(props){
    const [pop,setpop]=useState(false)
    return(
        <div>
            <Popups trigger={pop} settrigger={setpop}>
                <div className=' z-10 flex justify-center align-middle items-center'>
                    <div className='text-xl font-bold'>
                        <br/>
                        <p>Student name:{props.name}</p>
                        <p>Register No:{props.regno}</p>
                        <p>Event Name:{props.event}</p>
                        <p>Time:{props.time}</p>
                        <p>Date:{props.date}</p>
                        <p>Venue:{props.venue}</p>
                        <br/>
                        <div className="flex justify-evenly align-middle">
                            <button className='rounded-2xl p-4 items-center bg-[#42d767] text-base hover:transform hover:scale-110 hover:duration-300'>Accept</button>
                            <button className='rounded-2xl p-4 items-center bg-[#f54b4b] text-base hover:transform hover:scale-110 hover:duration-300'>Reject</button>
                        </div>
                    </div>
                </div>
            </Popups>
            <div className="flex flex-col justify-center items-center top-5">
                <div className=" bg-[#C0ECFA] rounded-lg w-[80%] h-24 p-4 hover:transform hover:scale-110 hover:translate-y-2 duration-300 p-4 rounded-2xl text-center">
                    <div onClick={()=>setpop(true)} className=" z-0 absolute inset-0 bg-[#48E9E9] opacity-0 transition duration-300 hover:opacity-100 p-4 rounded-lg">
                        <p className="font-bold text-lg align-middle">Click to Respond</p>
                    </div>
                    <div className="flex justify-between">
                        <span className="">{props.name}</span>
                        <span>|</span>
                        <span className="">{props.regno}</span>
                        <span>|</span>
                        <span className="">{props.event}</span>
                        <span>|</span>
                        <span className="">{props.time}</span>
                    </div>
                    <br/>
                    <p className="text-center font-bold">{props.dept}</p>
                </div>
            </div>
        </div>
    )
}