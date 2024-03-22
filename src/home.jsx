import pfp from "./assets/pfp.jpg";
import new_event_vector from "./assets/new_event_vector.png";
import register_vector from "./assets/register_vector.png";
import Banner from "./banner";
import Status from "./status";
import Navbar from "./navbar";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div className="bg-[#fff3ee] bg-contain w-full h-full overflow-x-hidden">
      <Navbar />
      <div className="block">
        <div className="  bg-[#04779b] rounded-b-[100px] w-[100vw] h-[210px]">
          <div className=" shadow-[3px_3px_5px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-3xl bg-[rgb(255,255,255)] p-6 w-[475px] h-[400px]">
            <img
              className=" shadow-black w-[170px] h-[170px] rounded-full absolute top-2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-[0px_0px_0px]"
              src={pfp}
            />
            <div className="flex justify-between align-middle flex-col text-center mt-20">
              <h2 className="font-bold text-2xl">Akina benat</h2>
              <br />
              <p>Register No: 43611011</p>
              <br />
              <p>Department: BE CSE AIML</p>
              <br />
            </div>
            <div className="flex justify-evenly p-4 items-center">
              <div className="flex-1">
              <Link to="/reg" className="flex flex-col justify-center items-center">
                <div className=" w-[70px] h-[70px]  bg-[#3996b2] rounded-[300px] hover:transform hover:scale-110 hover:translate-y-2 duration-300 rounded-lg p-3 text-center">
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
              <Link to="/reg" className="flex flex-col justify-center items-center">
                <div className=" w-[70px] h-[70px]  bg-[#3996b2] rounded-full hover:transform hover:scale-110 hover:translate-y-2 duration-300 rounded-lg p-3 text-center">
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
          <Banner />
        </div>
        <div className="block">
          <Status />
        </div>
      </div>
    </div>
  );
}
