import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from '../../redux/store/slices/users/getAllUsers';

const columns = [

  { field: 'id', headerName: 'ID', width: 50 },
  { field: 'firstName', headerName: 'Nombre', width: 100 },
  { field: 'lastName', headerName: 'Apellido', width: 130 },
  {
    field: 'email',
    headerName: 'Correo',
    type: 'string',
    width: 150,
  },
  {
    field: 'phone',
    headerName: 'Telefono',
    type: 'string',
    width: 150,
  },
  {
    field: 'password',
    headerName: 'Contraseña',
    type: 'string',
    width: 100,
  },
];


const UserDashboard = () => {

  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(getAllUsers())
  }, [dispatch]) 
  
  const {list} = useSelector(state=>state.userState)
  
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={list}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>    
  );
}

export default UserDashboard