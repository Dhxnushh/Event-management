import Navbar from "./navbar";
import OD from "./assets/OD.png"
import Pending from "./pending-od";
import { useState,useEffect } from "react";
import { query, collection, where, getDocs } from "firebase/firestore";
import { db } from "../firebase";



export default function Req(){
    const [eventData, seteventData] = useState([]);

    useEffect(() => {
    const fetchData = async () => {
      const q = query(collection(db, "Register"),where("Status","==",0));
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
                    <img src={OD} className="rounded-full w-24 bg-[#3ca7cb] border-black border-[5px]"></img>
                    <br/>
                    <p className="text-bold">OD-REQUEST</p>
                </div>
                <div className="flex gap-y-10 flex-col rounded-3xl w-[60vw] h-[80vh] bg-white ml-[25%] mt-[36px] border-[#3ca7cb] border-[5px] overflow-y-scroll">
                    <p className="text-2xl font-bold text-center">Students OD Requests</p>
                    {eventData.map((od)=>(
                        <div key={od.id}>
                            <Pending name={od.Name} regno={od.RegNo} dept={od.Dept} event={od.Ename} time={od.Time} date={od.Date} venue={od.Venue} id={od.id} brochure={od.Brochure} eventid={od.Event} />
                        </div> 
                    ))}
                </div>
                
            </div>
        </div>
    )
}