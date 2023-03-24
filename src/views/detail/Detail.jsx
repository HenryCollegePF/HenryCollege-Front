import Box from "@mui/material/Box";
import { useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useDispatch, useSelector } from "react-redux";
import Typography from "@mui/material/Typography";
import * as React from "react";
import CustomizedRating from "../../components/rating/Rating";
import { useParams } from "react-router-dom";
import { getCoursesById } from "../../redux/store/slices/courses/getAllCourses";

export default function Detail() {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCoursesById(id)); //when the component is mounted I dispatch the getPokemonById action with the id that I captured from the dynamic URL
  }, [dispatch, id]);

  const detail = useSelector((state) => state.courseState.courseById);

  return (
    <>
      {detail.length && (
        <Card sx={{ display: "flex" }}>
          <Box sx={{ display: "flex", flexDirection: "column" }} color="tertiary">
            <Box sx={{ width: "100%", height: "100%" }} color="tertiary">
              <iframe
                width="560"
                height="400"
                src={detail[0].videoSrc}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                color="tertiary"
              ></iframe>
            </Box>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column" }} m="30px">
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography component="div" variant="h5" color="text.tertiary" >
                {detail[0].name}
              </Typography>
              {/* <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              Profesor:{" "}
              {`${courses[0].teacher[0].firstName} ${courses[0].teacher[0].lastName}`}
            </Typography> */}
            </CardContent>

            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography component="div" variant="h6" color="text.tertiary">
                Nivel : {detail[0].level}
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                Duración : {detail[0].duration}
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                Costo : {detail[0].price}
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                Tema : {detail[0].tags}
              </Typography>

              <CustomizedRating />
            </CardContent>
          </Box>
        </Card>
      )}
    </>
  );
}
