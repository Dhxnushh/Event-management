import { Link } from "react-router-dom"
import sathybama from "./assets/sathybama.png"


export default function Login(){
    return(
        <div className="bg-my-image w-[100vw] h-[100vh] bg-cover">
            <div className="flex bg-[#04779b] justify-between h-20 align-middle">
                <div className="w-80">
                    <img src={sathybama}></img>
                </div>
                <div className="flex justify-center align-middle text-center p-2">
                    <a className="rounded-lg bg-[#1f5261] w-14 h-8 mr-5 mt-[20%]">
                        <p className="text-center p-[4px] text-white" >Login</p>
                    </a>
                </div>
            </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-3xl bg-[rgb(0,0,0,0.7)] p-6 w-[360px] h-[450px]">
                    <div className="flex justify-center align-middle flex-col">
                        <br/>
                        <h1 className="text-white text-center text-3xl font-bold">Login</h1>
                        <br/>
                        <p className="text-white">Register No:</p>
                        <br/>
                        <input className="rounded-lg w-[97%] h-8 p-2" type="text" placeholder="Register number"/>
                        <br/>
                        <p className="text-white">Password:</p>
                        <br/>
                        <input className="rounded-lg w-[97%] h-8 p-2" type="password" placeholder="Password"/>
                        <br/>
                        <a className="text-white text-center">Forgot password? Click here.</a>
                        <br/>
                        <div className="flex justify-center align-middle">
                            <Link to="/home" className="rounded-3xl bg-[#7EDBC5] align-middle p-3 w-28 text-center">Login</Link>
                        </div>
                    </div>
            </div>
        </div>
    )
}