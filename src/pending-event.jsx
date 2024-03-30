import Popups from "./popups";
import { useState } from "react";
import { updateDoc,deleteDoc,doc } from "firebase/firestore";
import { db } from "../firebase";


export default function Pending_event(props){
    const [pop,setpop]=useState(false)
    function approve(){
        const field={
            "status":true
        }
        const docref  = doc(db,"Events",props.id)
        updateDoc(docref,field);
        setpop(false)
    }
    function reject(){
        const docref = doc(db,"Events",props.id)
        deleteDoc(docref)
        setpop(false)
    }
    return(
        <div>
            <Popups trigger={pop} settrigger={setpop}>
                <div className="flex flex-col gap-4 mt-4">
                    <div className=' z-30 flex justify-center align-middle items-center gap-4'>
                        <div className=" w-[250px]">
                            <img src={props.brochure} className="rounded-2xl"/>
                        </div>
                        <div className='text-xl font-bold'>
                            <br/>
                            <p>Event name:<span className="font-medium">{props.name}</span></p>
                            <p>Description:<span className="font-medium">{props.desc}</span></p>
                            <p>Time:<span className="font-medium">{props.time}</span></p>
                            <p>Date:<span className="font-medium">{props.date}</span></p>
                            <p>Venue:<span className="font-medium">{props.venue}</span></p>
                            <br/>
                        </div>
                    </div>
                    <div className="flex justify-evenly align-middle">
                        <button onClick={approve} className='rounded-2xl p-4 items-center bg-[#42d767] text-base hover:transform hover:scale-110 hover:duration-300'>Accept</button>
                        <button onClick={reject} className='rounded-2xl p-4 items-center bg-[#f54b4b] text-base hover:transform hover:scale-110 hover:duration-300'>Reject</button>
                    </div>
                </div>
                
                    
                
            </Popups>
            <div className="flex flex-col justify-center items-center top-5">
                <div onClick={()=>setpop(true)} className=" bg-[#C0ECFA] rounded-lg w-[80%] h-24 hover:transform hover:scale-110 duration-300 rounded-2xl text-center">
                    <div  className=" z-0 absolute w-full h-full bg-[#48E9E9] opacity-0 transition duration-300 hover:opacity-100 p-4 rounded-lg">
                        <p className="font-bold text-lg align-middle">Click to Respond</p>
                    </div>
                    <div className="flex p-5 justify-between">
                        <span className="">{props.name}</span>
                        <span>|</span>
                        <span className="">{props.date}</span>
                        <span>|</span>
                        <span className="">{props.time}</span>
                        <span>|</span>
                        <span className="">{props.venue}</span>
                    </div>
                    <p className="text-center font-bold">{props.desc}</p>
                </div>
            </div>
        </div>
    )
}