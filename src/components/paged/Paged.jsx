import React, { useEffect } from "react";
import { Box, Pagination } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changePageCourses } from "../../redux/store/slices/courses/getAllCourses";
import Cards from "../card/Cards";

const Paged = () => {
  const dispatch = useDispatch();

  const [page, setPage] = useState(1);
  const handleChange = (e, p) => {
    setPage(p);
  };

  useEffect(() => {
    dispatch(changePageCourses(page));
  }, [dispatch, page]);
  
  const {list} = useSelector((state) => state.courseState);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          m: "2rem",
          width: "100%",
          justifyContent: "center",
          mt: "2rem",
        }}
        color="tertiary"
      >
        <Pagination
          count={4}
          color="tertiary"
          onChange={handleChange}
          variant="outlined"
          justifycontent="center"
        />
      </Box>
      
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
          m: "3rem",
          justifyContent: "center",
        }}
        color="tertiary"
      >
        {list?.map((course) => (
            <Cards
              id={course.id}
              name={course.name}
              duration={course.duration}
              tags={course.tags[0]}
              image={course.imageSrc}
              key={course.id}
              level={course.level}
            />
          ))}
      </Box>
    </>
  );
};

export default Paged;
