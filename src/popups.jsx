import React from "react";

export default function Popups(props){
    return (props.trigger) ? (
        <div className=" z-10 shadow-[3px_3px_5px] fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-3xl bg-[rgb(255,255,255)] p-6 w-fit h-fit">
            <div className="flex flex-col justify-center align-middle">
                <button className="bg-[#37849b] rounded-3xl p-1 text-center w-16 text-white hover:transform hover:scale-110 hover:duration-300" onClick={()=>props.settrigger(false)}>Close</button>
                {props.children}
            </div>
        </div>
    ) : "";
}