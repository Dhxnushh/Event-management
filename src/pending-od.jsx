import { useEffect } from "react";
import Popups from "./popups";
import { useState } from "react";
import { db } from "../firebase";
import { updateDoc,deleteDoc,arrayUnion,doc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

export default function Pending(props){
    const [pop,setpop]=useState(false)
    const redirect = useNavigate();
    const eid = String(props.eventid)
    async function deldoc(){
        const docref = doc(db,"Register",props.id)
        await deleteDoc(docref) 
        setpop(false)
    }
    async function approvedoc(){
        const update = {
            Name:props.name,
            Regno:props.regno,
            Dept:props.dept
        }
        const updates = {Regstu:arrayUnion(update)}
        const docref2 = doc(db,"Events",eid)
        await updateDoc(docref2,updates)
        await deldoc();
        setpop(false);
    }

    return(
        <div>
            <Popups trigger={pop} settrigger={setpop}>
                <div className="flex flex-col gap-4 mt-4">
                    <div className=' z-10 flex justify-center align-middle items-center gap-4'>
                        <div className=" w-[250px]">
                            <img src={props.brochure} className="rounded-2xl"/>
                        </div>
                        <div className='text-xl font-bold'>
                            <br/>
                            <p>Student name:<span className="font-medium">{props.name}</span></p>
                            <p>Register No:<span className="font-medium">{props.regno}</span></p>
                            <p>Event Name:<span className="font-medium">{props.event}</span></p>
                            <p>Time:<span className="font-medium">{props.time}</span></p>
                            <p>Date:<span className="font-medium">{props.date}</span></p>
                            <p>Venue:<span className="font-medium">{props.venue}</span></p>
                            <br/>
                        </div>
                    </div>
                    <div className="flex justify-evenly align-middle">
                        <button onClick={approvedoc} className='rounded-2xl p-4 items-center bg-[#42d767] text-base hover:transform hover:scale-110 hover:duration-300'>Accept</button>
                        <button onClick={deldoc} className='rounded-2xl p-4 items-center bg-[#f54b4b] text-base hover:transform hover:scale-110 hover:duration-300'>Reject</button>
                    </div>
                </div>
            </Popups>
            <div className="flex flex-col justify-center items-center top-5">
                <div onClick={()=>setpop(true)} className=" bg-[#C0ECFA] rounded-lg w-[80%] h-24 hover:transform hover:scale-110 duration-300 hover:rounded-2xl text-center">
                    <div  className=" z-0 absolute w-full h-full bg-[#48E9E9] opacity-0 duration-300 hover:opacity-100 rounded-2xl">
                        <p className="font-bold text-lg align-middle">Click to Respond</p>
                    </div>
                    <div className="flex p-5 justify-between">
                        <span className="">{props.name}</span>
                        <span>|</span>
                        <span className="">{props.regno}</span>
                        <span>|</span>
                        <span className="">{props.event}</span>
                        <span>|</span>
                        <span className="">{props.time}</span>
                    </div>
                    <p className="text-center font-bold">{props.dept}</p>
                </div>
            </div>
        </div>
    )
}