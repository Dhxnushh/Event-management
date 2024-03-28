import { Link } from "react-router-dom"
import sathybama from "./assets/sathybama.png"
import { auth } from "../firebase"
import {signInWithEmailAndPassword} from "firebase/auth"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"


export default function Login(){
    const navigate = useNavigate()
    const [user,setuser] = useState("student")
    const [islog,setislog] = useState(false)
    const [regno,setregno]=useState("")
    const [pw,setpw]=useState("")
    async function login(){
        const email = `${regno}@gmail.com`;
        const password = pw;
        try {
            await signInWithEmailAndPassword(auth, email, password);
            setislog(true);
        } catch (error) {
            console.error("Login failed:", error);
            console.log(auth?.currentUser?.email)
        }
    }
    useEffect(()=>{
        if(islog && user==="student"){
            navigate('/home')
        }
        else if(islog && user==="staff"){
            navigate('/staff')
        }
        else{
            console.log('wrong regno or pw')
        }
    }
    )
    return(
        <div className="bg-my-image w-[100vw] h-[100vh] bg-cover">
            <div className="flex bg-[#04779b] justify-between h-20 align-middle">
                <div className="w-80">
                    <img src={sathybama}></img>
                </div>
                <div className="flex justify-center align-middle text-center p-2">
                    <Link to="/login" className="flex justify-center align-middle items-center">
                        <div className='bg-[#3996b2] rounded-2xl h-[fit] hover:transform hover:scale-110 hover:rounded-3xl duration-300 p-2'>
                            <p className="text-center p-[4px] text-white" >Login</p>
                        </div>
                    </Link>
                </div>
            </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-3xl bg-[rgb(0,0,0,0.7)] p-6 w-[380px] h-[500px]">
                    <div className="flex justify-center align-middle flex-col">
                        <br/>
                        <h1 className="text-white text-center text-3xl font-bold">Login</h1>
                        <br/>
                        <select className="rounded-lg w-[97%] h-10 p-2" placeholder="Student" onChange={(e)=>setuser(e.target.value)}>
                            <option value="student">Student</option>
                            <option value="staff">Staff</option>
                        </select>
                        <br />
                        <p className="text-white">Register No:</p>
                        <br/>
                        <input onChange={(e)=>setregno(e.target.value)} className="rounded-lg w-[97%] h-8 p-2" type="text" placeholder="Register number"/>
                        <br/>
                        <p className="text-white">Password:</p>
                        <br/>
                        <input onChange={(e)=>setpw(e.target.value)} className="rounded-lg w-[97%] h-8 p-2" type="password" placeholder="Password"/>
                        <br/>
                        <a className="text-white text-center">Forgot password? Click here.</a>
                        <br/>
                        <div className="flex justify-center align-middle">
                            <button onClick={login} className="rounded-2xl bg-[#7EDBC5] align-middle p-3 w-28 text-center hover:transform hover:scale-110 hover:rounded-3xl duration-300 p-2">Login</button>
                        </div>
                    </div>
            </div>
        </div>
    )
}