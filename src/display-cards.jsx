import Popups from "./popups"
import { query, collection, where, getDocs, updateDoc , doc , arrayUnion} from "firebase/firestore";
import { db } from "../firebase";
import { auth } from "../firebase";
import { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Display_cards(props){
    const [pop,setpop] = useState(false)
    const [studentData, setStudentData] = useState([]);
    const redirect = useNavigate();

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
    const handleReg = async (Name,reg,dept) =>{
        const student = {
            "Name":Name,
            "RegNo":reg,
            "Dept":dept,
            "Status":0
        }
        const updates = {
            Regstu: arrayUnion(student),
        };
        const docref = doc(db,"Events",props.id)
        await updateDoc(docref,updates)
        redirect("/home")
    }
    return(
            <div>

                <Popups trigger={pop} settrigger={setpop}>
                    <div className="flex flex-col justify-center align-middle">
                    <div className=' z-10 flex justify-center align-middle items-center gap-4'>
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
                        {studentData.map((student)=>(
                        <div key={student.registerno}>
                        <button onClick={()=>handleReg(student.Name,student.registerno,student.dept)} className="rounded-2xl bg-[#7EDBC5] align-middle p-3 w-28 text-center hover:transform hover:scale-110 hover:rounded-3xl duration-300 p-2">Register</button>
                        </div>
                        ))}
                    </div>
                    </div>
                </Popups>
                
                    <li onClick={()=>setpop(true)} className=' shrink-0 list-none p-3'><img className='w-[250px] h-[350px] rounded-xl shadow-[3px_3px_5px] hover:transform hover:scale-110 hover:translate-y-2 duration-300 rounded-lg text-center"' src={props.brochure}/></li>
            </div>
  )
    
}