
import Display_cards from './reg-cards'
import { auth,db } from "../firebase";
import { useState,useEffect } from "react";
import { query, collection, where, getDocs } from "firebase/firestore";
import { List_cards } from './list-cards';

export default function Banner(props){
    const [eventData, seteventData] = useState([]);

    useEffect(() => {
    const fetchData = async () => {
      const q = query(collection(db, "Events"),where("status","==",true));
      const snapshot = await getDocs(q);
      const data = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      console.log(data)
      seteventData(data);
    };
    fetchData();
    },[]);
    if (props.functional){
        const [pop,setpop] = useState(false);
        return(
            <div className="flex justify-center align-middle">
                <div className=" w-[93vw] bg-[rgb(1_1_1_0.5)] h-[470px] rounded-[20px] align-middle p-3">
                    <h1 className="font-bold text-center text-2xl">
                        Ongoing events:
                    </h1>
                    <br/>
                    <div id='display' className='flex flex-row overflow-x-scroll'>
                    {eventData.map((event)=>(
                    <div key={event.id}>
                        <Display_cards name={event.Event} date={event.Date} time={event.time} venue={event.venue} desc={event.desc} brochure={event.brochure} id={event.id}/>
                    </div>
                    ))}
                    </div>
                </div>
            </div>
        )
    }
    else{
        return(
            <div className="flex justify-center align-middle">
            <div className=" w-[93vw] bg-[rgb(1_1_1_0.5)] h-[470px] rounded-[20px] align-middle p-3">
                <h1 className="font-bold text-center text-2xl">
                    Ongoing events:
                </h1>
                <br/>
                <div id='display' className='flex flex-row overflow-x-scroll'>
                    {eventData.map((event)=>(
                    <div key={event.id}>
                    <List_cards id={event.id} brochure={event.brochure} list={event.Regstu}/>
                    </div>
                    ))}
                </div>
            </div>
        </div>
        )
    }
}