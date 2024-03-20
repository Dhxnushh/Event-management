import Navbar from "./navbar";

export default function Event_register(){
    return(
        <div className="w-full h-full bg-[#fff3ee]">
            <Navbar/>
            <div className="flex flex-col justify-center align-middle items-center mt-8">
                <h1 className="font-bold text-3xl">Event Registration</h1>
                <br/>
                <div className=" flex justify-center w-[50vw] h-fit bg-white rounded-2xl">                    
                    <div className="mt-5">
                    <h1 className="mt-5 font-bold text-center">Fill details</h1>
                    <br/>
                    <br/>
                    <div>
                        <span className="text-left mt-10">Event Name: </span>
                        <input type="text" className=" border-r-0 border-l-0 border-t-0 border-b-2 border-black"/>
                        <br/>
                        <br/>
                    </div>
                    <div>
                        <span className="text-left mt-10">Date: </span>
                        <input type="date" className=" border-r-0 border-l-0 border-t-0 border-b-2 border-black"/>
                        <br/>
                        <br/>
                    </div>
                    <div>
                        <span className="text-left mt-10">Time: </span>
                        <input type="time" className=" border-r-0 border-l-0 border-t-0 border-b-2 border-black"/>-<input type="time" className=" border-r-0 border-l-0 border-t-0 border-b-2 border-black"/>
                        <br/>
                        <br/>
                    </div>
                    <div>
                        <span className="text-left mt-10">venue: </span>
                        <input type="text" className=" border-r-0 border-l-0 border-t-0 border-b-2 border-black"/>
                        <br/>
                        <br/>
                    </div>
                    <div>
                        <span className="text-left mt-10">Discription of event: </span>
                        <input type="text" className=" border-r-0 border-l-0 border-t-0 border-b-2 border-black"/>
                        <br/>
                        <br/>
                    </div>
                    <div>
                        <span className="text-left mt-10 ">Student cordinator list: </span>
                    </div>
                    <div>
                        <span className="text-left mt-10 ">Teachers cordinator list: </span>
                    </div>
                    <br/>
                    <br/>
                    <div>
                        <label for="fileInput">Upload Brochure:</label>
                        <input type="file" id="fileInput" class="file:bg-gray-100 file:text-gray-700 file:border file:border-gray-300 file:rounded-md file:py-2 file:px-3 hover:file:bg-gray-200"/>
                        <br/>
                        <br/>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}