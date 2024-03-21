import image1 from './assets/image1.png'
import image2 from './assets/image2.png'
import image3 from './assets/image3.png'
import { Link } from 'react-router-dom'
import Popups from './popups'
import { useState } from 'react'

export default function Banner_2(){
    const [pop,setpop] = useState(false);
    return(
        <div className="flex justify-center align-middle">
            <div className=" w-[93vw] bg-[rgb(1_1_1_0.5)] h-[470px] rounded-[20px] align-middle p-3">
                <h1 className="font-bold text-center text-2xl">
                    Ongoing events:
                </h1>
                <br/>
                <Popups trigger={pop} settrigger={setpop}>
                    <div className='flex justify-center align-middle items-center'>
                        <div className='text-xl font-bold'>
                            <br/>
                            <p>Event Name: </p>
                            <p>Time: </p>
                            <p>Date: </p>
                            <p>Venue: </p>
                            <br/>
                            
                            <button className='rounded-2xl p-4 items-center bg-[#7EDBC5] text-base'>Register</button>
                        </div>
                    </div>
                </Popups>
                <div id='display' className='flex flex-row overflow-x-scroll'>
                    <li onClick={()=>setpop(true)} className=' shrink-0 list-none p-3'><img className='w-[250px] h-[350px] rounded-xl shadow-[3px_3px_5px] hover:transform hover:scale-110 hover:translate-y-2 duration-300 rounded-lg text-center"' src={image1}/></li>
                    <li onClick={()=>setpop(true)} className=' shrink-0 list-none p-3'><img className='w-[250px] h-[350px] rounded-xl shadow-[3px_3px_5px] hover:transform hover:scale-110 hover:translate-y-2 duration-300 rounded-lg text-center"' src={image2}/></li>
                    <li onClick={()=>setpop(true)} className=' shrink-0 list-none p-3'><img className='w-[250px] h-[350px] rounded-xl shadow-[3px_3px_5px] hover:transform hover:scale-110 hover:translate-y-2 duration-300 rounded-lg text-center"' src={image3}/></li>
                    <li onClick={()=>setpop(true)} className=' shrink-0 list-none p-3'><img className='w-[250px] h-[350px] rounded-xl shadow-[3px_3px_5px] hover:transform hover:scale-110 hover:translate-y-2 duration-300 rounded-lg text-center"' src={image1}/></li>
                    <li onClick={()=>setpop(true)} className=' shrink-0 list-none p-3'><img className='w-[250px] h-[350px] rounded-xl shadow-[3px_3px_5px] hover:transform hover:scale-110 hover:translate-y-2 duration-300 rounded-lg text-center"' src={image2}/></li>
                    <li onClick={()=>setpop(true)} className=' shrink-0 list-none p-3'><img className='w-[250px] h-[350px] rounded-xl shadow-[3px_3px_5px] hover:transform hover:scale-110 hover:translate-y-2 duration-300 rounded-lg text-center"' src={image3}/></li>
                    <li onClick={()=>setpop(true)} className=' shrink-0 list-none p-3'><img className='w-[250px] h-[350px] rounded-xl shadow-[3px_3px_5px] hover:transform hover:scale-110 hover:translate-y-2 duration-300 rounded-lg text-center"' src={image1}/></li>
                </div>
            </div>
        </div>
    )
}