
import new_event_vector from "./assets/new_event_vector.png";
import register_vector from "./assets/register_vector.png";
import Banner from "./banner";
import Status from "./status";
import Navbar from "./navbar";
import { Link } from "react-router-dom";
import { query, collection, where, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { auth } from "../firebase";
import { useEffect,useState } from "react";

export default function Home() {
  const [studentData, setStudentData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const email = auth.currentUser.email;
      const regno = Number(email.slice(0, email.indexOf("@"))); // Commented out (optional)
      const q = query(collection(db, "Students"),where("registerno","==",regno));
      const snapshot = await getDocs(q);
      const data = snapshot.docs.map((doc) => doc.data());
      console.log(data)
      setStudentData(data);
    };
    fetchData();
  },[]);
  
  

  return (
    <div>
      {studentData.map((student)=>(
      <div key={student.registerno}>
      
        <div className="bg-[#fff3ee] bg-contain w-full h-full overflow-x-hidden">
      <Navbar link={'/home'} user={student.Name}/>
      <div className="block">
        <div className="  bg-[#04779b] rounded-b-[100px] w-[100vw] h-[210px]">
          <div className=" shadow-[3px_3px_5px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-3xl bg-[rgb(255,255,255)] p-6 w-[475px] h-[400px]">
            
                <img className=" shadow-black w-[170px] h-[170px] rounded-full absolute top-2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-[0px_0px_0px]" src={student.img}/>
                <div className="flex justify-between align-middle flex-col text-center mt-20">
                    <h2 className="font-bold text-2xl">{student.Name}</h2>
                    <br />
                    <p>Register No:{student.registerno}</p>
                    <br />
                    <p>Department:{student.dept}</p>
                    <br />
                  </div>
            <div className="flex justify-evenly p-4 items-center">
              <div className="flex-1">
              <Link to="/reg" className="flex flex-col justify-center items-center">
                <div className="w-[70px] h-[70px]  bg-[#3996b2] rounded-2xl hover:transform hover:scale-110 duration-300 hover:rounded-[35px] p-3 text-center">
                  <img src={register_vector} />
                </div>
                <br/>
                <p className="font-bold text-center">
                  Register
                </p>
              </Link>
              </div>
              <div
              className="flex-1">
              <Link to="/event" className="flex flex-col justify-center items-center">
                <div className="w-[70px] h-[70px]  bg-[#3996b2] rounded-2xl hover:transform hover:scale-110 duration-300 hover:rounded-[35px] p-3 text-center">
                  <img src={new_event_vector} />
                </div>
                <br/>
                <p className="font-bold text-center">
                  New_event
                </p>
              </Link>
              </div>
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
