import Navbar from "./navbar";
import OD from "./assets/OD.png"
import Pending from "./pending";


export default function Req(){
    
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
                    <Pending name={'Rajesh'} regno={43732005} event={'AI Workshop'} time={'9:00-3:15'} dept={'BE CSE A3 AIML'} date={'9/03/24'} venue={'Remibhai auditorium'}/>
                    
                </div>
            </div>
        </div>
    )
}