import SearchIcon from "@mui/icons-material/Search";
import { Box } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import { alpha, styled } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCoursesByName } from "../../redux/store/slices/courses/getAllCourses";
import Cards from "../card/Cards";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifycontent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function SearchBar() {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = React.useState("");

  const handleSearch = (event) => {
    const text = event.target.value;
    setSearchText(text);
    dispatch(getCoursesByName(text));
  };

  const courseById = useSelector((state) => state.courseState.courseByName);

  return (
    <>
      <Box>
        <AppBar position="static" color="secondary" sx={{ bgcolor: 'White' }}>
          <Toolbar>
            <IconButton
              color="secondary"
              size="large"
              edge="start"
              // color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            ></IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
              color="tertiary"
            >
              ¿Que quieres aprender?
            </Typography>
            <Search  sx={{ bgcolor: 'White' }}>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
                value={searchText}
                onChange={handleSearch}
              />
            </Search>
          </Toolbar>
        </AppBar>
      </Box>
      <Box margin={5}>
        {courseById?.map((course) => {
          return (
            <Cards
              id={course.id}
              name={course.name}
              tags={course.tags}
              image={course.imageSrc}
              key={course.id}
              level={course.level}
            />
          );
        })}
      </Box>
    </>
  );
}
