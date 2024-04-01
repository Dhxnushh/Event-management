import Popups from "./popups"
import { DataGrid} from '@mui/x-data-grid';
import { useState,useEffect } from "react";
export function List_cards(props){

    const [pop,setpop] = useState(false)
    const [rows,setrows] =useState([])
    useEffect(()=>{
        async function getList(){
            const data = await props.list;
            const mdata=[];
            for (let i = 0; i < data.length; i++) {
                const student = data[i];
                mdata.push({
                    id: i,
                    col1: student.Name,
                    col2: student.Regno,
                    col3: student.Dept,
                });
            };
            setrows(mdata);
        };
        getList();
    },[])
    const columns = [
        { field: 'col1', headerName: 'Name', width: 150 },
        { field: 'col2', headerName: 'Register No', width: 150 },
        { field: 'col3', headerName: 'Department', width: 150 },
    ]
        
    return(
        <div>
            <Popups trigger={pop} settrigger={setpop}>
                <div className='flex flex-col justify-center align-middle items-center'>
                    <h1 className='text-2xl font-bold text-center'>Registered Students:</h1>
                    <br/>
                    <DataGrid className='w-fit h-[400px] justify-center bg-[#ffe7dd] text-white rounded-3xl' rows={rows} columns={columns} /> 
                </div>
            </Popups>
            <li onClick={()=>setpop(true)} className=' shrink-0 list-none p-3'><img className='w-[250px] h-[350px] rounded-lg shadow-[3px_3px_5px] hover:transform hover:scale-110 hover:translate-y-2 duration-300 hover:rounded-xl text-center"' src={props.brochure}/></li>
        </div>
        

    )
}