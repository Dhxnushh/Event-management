import { DataGrid} from '@mui/x-data-grid'; // Import only DataGrid for the community version

export default function Status() {
  const rows = [
    { id: 1, col1: '1', col2: 'Datascience',col3: '12/02/2024',col4: 'Accepted',col5:'Accepted' },
    { id: 2, col1: '2', col2: 'Python workshop',col3: '12/02/2024',col4: 'Pending',col5:'Pending' },
    { id: 3, col1: '3', col2: 'How to get a job with studying',col3: '12/02/2024',col4: 'Rejected',col5:'Rejected' },
  ];

  const columns = [
    { field: 'col1', headerName: 'Sno', width: 150 },
    { field: 'col2', headerName: 'Event-name', width: 150 },
    { field: 'col3', headerName: 'Event-Date', width: 150 },
    { field: 'col4', headerName: 'Cordinator', width: 150 },
    { field: 'col5', headerName: 'HOD', width: 150 }
  ];
    const getRowClassName = (params) => {
      const row = params.row;
      if (row.col4 === 'Accepted' && row.col5==='Accepted') {
        return 'acceptedRow';
      } else if (row.col4 === 'Rejected' && row.col5==='Rejected') {
        return 'rejectedRow';
      } else if (row.col4 === 'Pending' && row.col5==='Pending') {
        return 'pendingRow';
      }
      return;
    };

  return (
        <div className='flex flex-col justify-center align-middle items-center'>
            <h1 className='text-2xl font-bold text-center'>Status:</h1>
            <br/>
            <DataGrid className='w-fit h-[400px] justify-center bg-[#ffe7dd] text-white rounded-3xl' rows={rows} columns={columns} getRowClassName={getRowClassName} /> 
        </div>
  );
}
 