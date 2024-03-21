import image1 from './assets/image1.png'
import image2 from './assets/image2.png'
import image3 from './assets/image3.png'
import { Link } from 'react-router-dom'
import Popups from './popups'
import { useState } from 'react'

export default function Banner(){
    const [pop,setpop] = useState(false);
    return(
        <div className="flex justify-center align-middle">
            <div className=" w-[93vw] bg-[rgb(1_1_1_0.5)] h-[470px] rounded-[20px] align-middle p-3">
                <h1 className="font-bold text-center text-2xl">
                    Ongoing events:
                </h1>
                <br/>
                <div id='display' className='flex flex-row overflow-x-scroll'>
                    <li onClick={()=>setpop(true)} className=' shrink-0 list-none p-3'><img className='w-[250px] h-[350px] rounded-xl shadow-[3px_3px_5px] hover:transform hover:scale-110 hover:translate-y-2 duration-300 rounded-lg' src={image1}/></li>
                    <li onClick={()=>setpop(true)} className=' shrink-0 list-none p-3'><img className='w-[250px] h-[350px] rounded-xl shadow-[3px_3px_5px] hover:transform hover:scale-110 hover:translate-y-2 duration-300 rounded-lg' src={image2}/></li>
                    <li onClick={()=>setpop(true)} className=' shrink-0 list-none p-3'><img className='w-[250px] h-[350px] rounded-xl shadow-[3px_3px_5px] hover:transform hover:scale-110 hover:translate-y-2 duration-300 rounded-lg' src={image3}/></li>
                    <li onClick={()=>setpop(true)} className=' shrink-0 list-none p-3'><img className='w-[250px] h-[350px] rounded-xl shadow-[3px_3px_5px] hover:transform hover:scale-110 hover:translate-y-2 duration-300 rounded-lg' src={image1}/></li>
                    <li onClick={()=>setpop(true)} className=' shrink-0 list-none p-3'><img className='w-[250px] h-[350px] rounded-xl shadow-[3px_3px_5px] hover:transform hover:scale-110 hover:translate-y-2 duration-300 rounded-lg' src={image2}/></li>
                    <li onClick={()=>setpop(true)} className=' shrink-0 list-none p-3'><img className='w-[250px] h-[350px] rounded-xl shadow-[3px_3px_5px] hover:transform hover:scale-110 hover:translate-y-2 duration-300 rounded-lg' src={image3}/></li>
                    <li onClick={()=>setpop(true)} className=' shrink-0 list-none p-3'><img className='w-[250px] h-[350px] rounded-xl shadow-[3px_3px_5px] hover:transform hover:scale-110 hover:translate-y-2 duration-300 rounded-lg' src={image1}/></li>
                </div>
            </div>
        </div>
    )
}