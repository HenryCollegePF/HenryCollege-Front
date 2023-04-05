import React from "react";
import Box from "@mui/material/Box";
import { useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { getPaid } from "../../redux/store/slices/users/getAllUsers";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";


function Students() {
  
  const dispatch = useDispatch();
  const {id} = useSelector((state) => state.userState.loggedUser.student)
  const paid = useSelector((state) => state.userState.userPaid)
  const token = useSelector((state) => state.userState.loggedUser.auth.access_token)
  useEffect(() => {
    dispatch(getPaid(id,token)); 
  }, [dispatch]);
  
return(
    <>
   <Card sx={{ display: "flex" }}>
        <Box sx={{ display: "flex", flexDirection: "column" }} m="30px">
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h5" color="text.tertiary" >
             fecha de compra {paid.date}
            </Typography>
          </CardContent>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h6" color="text.tertiary">
              precio pagado : {paid.pricePaid}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              fecha de expiracion : {paid.expirationDate}
            </Typography>
          </CardContent>
        </Box>
      </Card>
  </>
  );
}

export default Students;

