import Navbar from "./navbar";
import { auth,db,Eventsref,storageRef } from "../firebase";
import { useState,useEffect,useRef } from "react";
import Popups from "./popups";
import { addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom"
import { uploadBytes,ref,getDownloadURL } from "firebase/storage";


export default function Event_register(){
    const redirect = useNavigate()
    const [date,setdate] = useState("")
    const [event,setevent] = useState("")
    const [time,settime] = useState("")
    const [etime,setetime] = useState("")
    const [venue,setvenue] = useState("")
    const [brochure,setbrochure] = useState("")
    const [status,setstatus] = useState(false)
    const [desc,setdesc] = useState("")
    const [pop,setpop]=useState(false)
    const imgRef = useRef(null)
    console.log(date,time,etime)
    async function upload(){
        const img = imgRef.current.files[0];
        await uploadBytes(storageRef, img,{contentType:"image/png"});
        const URL = await getDownloadURL(ref(storageRef));
        console.log(URL);
        setbrochure(URL);
    }
    
    const addevent = {
        "Event-name":event,
        "Date":date,
        "time":`${time}-${etime}`,
        "venue":venue,
        "brochure":brochure,
        "status":status,
        "desc":desc,
        "Regstu":[]
    }
    function showpop(){
        setpop(true)
    }
    function reg(){
        addDoc(Eventsref,addevent)
        redirect("/home")
    }
    
    return(
        <div>
            <Popups trigger={pop} settrigger={setpop}>  
                <div className=' z-10 flex justify-center align-middle items-center'>
                    <div className='text-xl font-bold'>
                        <br/>
                        <p>Event name:{event}</p>
                        <p>Date:{date}</p>
                        <p>Time:{}</p>
                        <p>Desc:{desc}</p>
                        <p>Venue:{venue}</p>
                        <br/>
                        <div className="flex justify-evenly align-middle">
                            <button onClick={reg}  className='rounded-2xl p-4 items-center bg-[#7EDBC5] text-base hover:transform hover:scale-110 hover:duration-300'>Confirm</button>
                        </div>
                    </div>
                </div>
            </Popups>   
        <div className="w-full h-full bg-[#fff3ee]">
            <Navbar link={'/home'}/>
            <div className="flex flex-col justify-center align-middle items-center mt-8">
                <h1 className="font-bold text-3xl">Event Registration</h1>
                <br/>
                <div className=" flex justify-center w-[50vw] h-fit bg-white rounded-2xl">                    
                    <div className="mt-5">
                    <h1 className="mt-5 font-bold text-center">Fill details</h1>
                    <br/>
                    <br/>
                    <div>
                        <span className="text-left mt-10">Event Name: </span>
                        <input onChange={(e)=>setevent(e.target.value)} type="text" className=" border-r-0 border-l-0 border-t-0 border-b-2 border-black"/>
                        <br/>
                        <br/>
                    </div>
                    <div>
                        <span className="text-left mt-10">Date: </span>
                        <input onChange={(e)=>setdate(e.target.value)} type="date" className=" border-r-0 border-l-0 border-t-0 border-b-2 border-black"/>
                        <br/>
                        <br/>
                    </div>
                    <div>
                        <span className="text-left mt-10">Time: </span>
                        <input onChange={(e)=>settime(e.target.value)} type="time" className=" border-r-0 border-l-0 border-t-0 border-b-2 border-black"/>-<input onChange={(e)=>setetime(e.target.value)} type="time" className=" border-r-0 border-l-0 border-t-0 border-b-2 border-black"/>
                        <br/>
                        <br/>
                    </div>
                    <div>
                        <span onChange={(e)=>setvenue(e.target.value)} className="text-left mt-10">venue: </span>
                        <input type="text" className=" border-r-0 border-l-0 border-t-0 border-b-2 border-black"/>
                        <br/>
                        <br/>
                    </div>
                    <div>
                        <span className="text-left mt-10">Description of event: </span>
                        <input onChange={(e)=>setdesc(e.target.value)} type="text" className=" border-r-0 border-l-0 border-t-0 border-b-2 border-black"/>
                        <br/>
                        <br/>
                    </div>
                    <div>
                        <label for="fileInput">Upload Brochure:</label>
                        <input onChange={upload} ref={imgRef} type="file" accept="image/png" id="fileInput" class="file:bg-gray-100 file:text-gray-700 file:border file:border-gray-300 file:rounded-md file:py-2 file:px-3 hover:file:bg-gray-200"/>
                        <br/>
                        <br/>
                    </div>
                    <div className="flex flex-row justify-center align-middle">
                        <button onClick={showpop} className="justify-items-center rounded-2xl bg-[#7EDBC5] align-middle p-3 w-28 text-center hover:transform hover:scale-110 hover:rounded-3xl duration-300 p-2">Register</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}