import Navbar from "./navbar";
import new_event_vector from "./assets/new_event_vector.png"
import Pending_event from "./pending-event";
import { auth,db } from "../firebase";
import { useState,useEffect } from "react";
import { query, collection, where, getDocs } from "firebase/firestore";

export default function Event_req(){
    const [eventData, seteventData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const q = query(collection(db, "Events"),where("status","==",false));
      const snapshot = await getDocs(q);
      const data = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      seteventData(data);
    };
    fetchData();
    },[]);
    return(
        <div>
            <Navbar link={'/staff'}/>
            <div className="flex justify-between">
                <div className="absolute top-1/2 left-6 translate-y-[-25%]">
                    <img src={new_event_vector} className=" p-3 rounded-full w-24 bg-[#3ca7cb] border-black border-[5px]"></img>
                    <br/>
                    <p className="text-bold">Event-Requests</p>
                </div>
                <div className="flex gap-y-10 flex-col rounded-3xl w-[60vw] h-[80vh] bg-white ml-[25%] mt-[36px] border-[#3ca7cb] border-[5px] overflow-y-scroll">
                    <p className="text-2xl font-bold text-center">Students Event Requests</p>
                    {eventData.map((event)=>(
                    <div key={event.id}>
                    <Pending_event name={event.Event} date={event.Date} time={event.time} venue={event.venue} desc={event.desc} brochure={event.brochure} id={event.id}/>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    )
}