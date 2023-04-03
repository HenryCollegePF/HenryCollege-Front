import React from "react";
import Box from "@mui/material/Box";
import { useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";
import { getUsersById } from "../../redux/store/slices/users/getAllUsers";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";


function Students() {
  
  const dispatch = useDispatch();
  const {id} = useSelector((state) => state.userState.loggedUser.student)
  console.log(id);
  const allUsers = useSelector((state) => state.userState.userById);
  console.log(allUsers);
  const token = useSelector((state) => state.userState.loggedUser.auth.access_token)
console.log(token);
  useEffect(() => {
    dispatch(getUsersById(id,token)); 
  }, [dispatch, id]);

  return(
    <>
    {allUsers && (
      <Card sx={{ display: "flex" }}>
        <Box sx={{ display: "flex", flexDirection: "column" }} m="30px">
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h5" color="text.tertiary" >
              {allUsers[0].name}
            </Typography>
          </CardContent>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h6" color="text.tertiary">
              Lastname : {allUsers[0].lastname}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              Email : {allUsers[0].email}
            </Typography>
          </CardContent>
        </Box>
      </Card>
    )}
  </>
  );
}

export default Students;

