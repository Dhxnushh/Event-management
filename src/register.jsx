import Banner from "./banner";
import { Link } from "react-router-dom";
import Navbar from "./navbar";

export default function Register(){
    return(
        <div>
            <Navbar link={'/home'}/>
            <Banner functional={true} />
        </div>
    )
}