import React from "react";
import Box from "@mui/material/Box";
import { useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";
import { getUsersByIdName } from "../../redux/store/slices/users/getAllUsers";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { getAuthToken } from "../../utils/auth";


function Data() {
  
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userState.loggedUser);
  const token = getAuthToken();
  console.log({dataUser: user, token})
  useEffect(() => {
    dispatch(getUsersByIdName(user.auth0Id, token)); 
  }, [dispatch]);
 
return(
    <>
   <Card sx={{ display: "flex" }}>
        <Box sx={{ display: "flex", flexDirection: "column" }} m="30px">
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h5" color="text.tertiary" >
             Nombre: {user.firstName}
            </Typography>
          </CardContent>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h6" color="text.tertiary">
               Apellido: {user.lastName}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              email : {user.email}
            </Typography>
          </CardContent>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h5" color="text.tertiary" >
             Telefono: {user.phone}
            </Typography>
          </CardContent>
        </Box>
      </Card>
  </>
  );
}

export default Data;