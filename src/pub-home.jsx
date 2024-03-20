import sathybama from './assets/sathybama.png'
import Banner from './banner'
import  {Link}  from 'react-router-dom';


export default function Home_public(){
    return(
        <div className='bg-[#fff3ee] w-[100vw] h-[100vh]'>
            <div className="flex bg-[#04779b] justify-between h-20 align-middle">
                <div className="w-80">
                    <img src={sathybama}></img>
                </div>
                <div className="flex justify-center align-middle text-center p-2">
                    <Link to="/login" className="rounded-lg bg-[#1f5261] w-14 h-8 mr-5 mt-[20%]">
                        <p className="text-center p-[4px] text-white" >Login</p>
                    </Link>
                </div>
            </div>
            <div className='mt-20'>
                <Banner/>
            </div>
        </div>
    )
}