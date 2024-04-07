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
                    <Link to="/login" className="flex justify-center align-middle items-center">
                        <div className='bg-[#3996b2] rounded-2xl h-[fit] hover:transform hover:scale-110 hover:rounded-3xl duration-300 p-2'>
                            <p className="text-center p-[4px] text-white" >Login</p>
                        </div>
                    </Link>
                </div>
            </div>
            <div className='mt-20'>
                <Banner functional={false} />
            </div>
        </div>
    )
}
