import pfp from "./assets/pfp.jpg";
import Banner from "./banner";
import Status from "./status";
import Navbar from "./navbar";
import Event from "./assets/Event.png"
import OD from "./assets/OD.png"
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import { auth } from "../firebase";
import { query, collection, where, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export default function Home_staff() {
  const [staffData, setstaffData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const email = auth.currentUser.email;
      const regno = Number(email.slice(0, email.indexOf("@"))); // Commented out (optional)
      const q = query(collection(db, "Staff"),where("registerno","==",regno));
      const snapshot = await getDocs(q);
      const data = snapshot.docs.map((doc) => doc.data());
      console.log(data)
      setstaffData(data);
    };
    fetchData();
  },[]);
  return (
    <div>
      {staffData.map((staff)=>(
      <div key={staff.registerno}>
          <div className="bg-[#fff3ee] bg-contain w-full h-full overflow-x-hidden">
          <Navbar link={'/staff'} user={staff.Name}/>
          <div className="block">
            <div className="  bg-[#04779b] rounded-b-[100px] w-[100vw] h-[210px]">
              <div className=" shadow-[3px_3px_5px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-3xl bg-[rgb(255,255,255)] p-6 w-[475px] h-[400px]">
                <img
                  className=" shadow-black w-[170px] h-[170px] rounded-full absolute top-2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-[0px_0px_0px]"
                  src={pfp}
                />
                <div className="flex justify-between align-middle flex-col text-center mt-20">
                  <h2 className="font-bold text-2xl">{staff.Name}</h2>
                  <br />
                  <p>Position: {staff.Pos}</p>
                  <br />
                  <p>Department: {staff.dept}</p>
                  <br />
                </div>
                <div className="flex justify-evenly p-4">
                <Link to="/req" className="flex flex-col justify-center items-center">
                    <div className=" w-[70px] h-[70px]  bg-[#3996b2] rounded-2xl hover:transform hover:scale-110 duration-300 hover:rounded-[35px] p-3 text-center">
                      <img src={OD} />
                    </div>
                    <br/>
                    <p className="font-bold text-center">
                      OD-Requests
                    </p>
                  </Link>
                  <Link to="/eventreq" className="flex flex-col justify-center items-center">
                    <div className=" w-[70px] h-[70px]  bg-[#3996b2] rounded-2xl hover:transform hover:scale-110 duration-300 hover:rounded-[35px] p-3 text-center">
                      <img src={Event} />
                    </div>
                    <br/>
                    <p className="font-bold text-center">
                      Event-Requests
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="mt-[325px] block">
              <Banner functional={false} />
            </div>
            <div className="block">
              <Status />
            </div>
          </div>
        </div>
        </div>
      ))}
      </div>
    
        
  );
}
