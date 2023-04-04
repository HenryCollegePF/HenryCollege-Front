import React from "react";
import Box from "@mui/material/Box";
import { useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";
import { getUsersByIdName } from "../../redux/store/slices/users/getAllUsers";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";


function Data() {
  
  const dispatch = useDispatch();
  const {id} = useSelector((state) => state.userState.loggedUser.student)
  console.log(id)
  const dataUser = useSelector((state) => state.userState.loggedUser.student);
  console.log(dataUser)
  const token = useSelector((state) => state.userState.loggedUser.auth)
  useEffect(() => {
    dispatch(getUsersByIdName(id,token)); 
  }, [dispatch]);
  return(
    <h1></h1>
  )
return(
    <>
   <Card sx={{ display: "flex" }}>
        <Box sx={{ display: "flex", flexDirection: "column" }} m="30px">
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h5" color="text.tertiary" >
             Nombre: {dataUser.firstName}
            </Typography>
          </CardContent>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h6" color="text.tertiary">
               Apellido: {dataUser.lastName}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              email : {dataUser.email}
            </Typography>
          </CardContent>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h5" color="text.tertiary" >
             Telefono: {dataUser.phone}
            </Typography>
          </CardContent>
        </Box>
      </Card>
  </>
  );
}

export default Data;