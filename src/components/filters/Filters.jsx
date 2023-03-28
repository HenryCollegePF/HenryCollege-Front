import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  useTheme,
  Paper,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllCourses,
  filtersByAlpha,
  filtersByLevel,
  filtersByMin,
} from "../../redux/store/slices/courses/getAllCourses";

const Filters = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const [selectGetAll, setSelectGetAll] = useState("");
  const [SelectFilterAlpha, setSelectFilterAlpha] = useState("");
  const [SelectFilterLevel, setSelectFilterLevel] = useState("");
  const [SelectFilterMaxMin, setSelectFilterMaxMin] = useState("");

  useEffect(() => {
    dispatch(getAllCourses());
  }, [dispatch]);

  const filterGetAll = (element) => {
    setSelectGetAll(element.target.value);
    if (element.target.value === "all") return dispatch(getAllCourses());
    dispatch(getAllCourses(element.target.value));
  };

  const filterAlpha = (element) => {
    setSelectFilterAlpha(element.target.value);
    if (element.target.value === "asc")
      dispatch(filtersByAlpha(element.target.value));
    if (element.target.value === "desc")
      dispatch(filtersByAlpha(element.target.value));
  };

  const filterLevel = (element) => {
    setSelectFilterLevel(element.target.value);
    dispatch(filtersByLevel(element.target.value));
  };

  const filterMaxMin = (element) => {
    setSelectFilterMaxMin(element.target.value);
    if (element.target.value === "duration")
      dispatch(filtersByMin(element.target.value));
  };

  const clearAllFilters = () => {
    setSelectGetAll("");
    setSelectFilterAlpha("");
    setSelectFilterLevel("");
    setSelectFilterMaxMin("");
    dispatch(getAllCourses());
  };

  return (
    <Box
      display="flex"
      justifycontent="space-around"
      alignItems="center"
      sx={{
        flexDirection: "column",
        mt: 1,
        "@media (min-width: 768px)": {
          flexDirection: "row",
          mt: 2,
        },
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.background.paper,
      }}
    >
      <Box>
        <FormControl sx={{ m: "2px", mt: 1, minWidth: 180 }} size="small">
          <InputLabel id="demo-select-small" sx={{ color: theme.palette.text.primary }}>
            Ver cursos
          </InputLabel>
          <Select
            onChange={filterGetAll}
            labelId="demo-select-small"
            id="fdemo-select-small"
            autoWidth
            label="ver cursos"
            value={selectGetAll}
            sx={{ color: theme.palette.text.primary }}
            variant="outlined"
          >
            <MenuItem value="">
              <em>Ninguno</em>
            </MenuItem>
            <MenuItem value="all" onClick={clearAllFilters}>
              Todos
            </MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Box>
        <FormControl sx={{ m: "2px", mt: 1, minWidth: 180 }} size="small">
          <InputLabel id="demo-select-small" sx={{ color: theme.palette.text.primary }}>
            Alfabéticamente
          </InputLabel>
          <Select
            onChange={filterAlpha}
            labelId="demo-select-small"
            id="demo-select-small"
            autoWidth
            label="Alfabeticamente"
            value={SelectFilterAlpha}
            sx={{ color: theme.palette.text.primary }}
            variant="outlined"
          >
            <MenuItem value="">
              <em>Ninguno</em>
            </MenuItem>
            <MenuItem value="asc">Ascending (A-Z)</MenuItem>
            <MenuItem value="desc">Descending (Z-A)</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Box>
        <FormControl sx={{ m: "2px", mt: 1, minWidth: 180 }} size="small">
          <InputLabel id="demo-select-small" sx={{ color: theme.palette.text.primary }}>
            Nivel
          </InputLabel>
          <Select
            onChange={filterLevel}
            labelId="demo-select-small"
            id="demo-select-small"
            autoWidth
            label="Nivel"
            value={SelectFilterLevel}
            sx={{ color: theme.palette.text.primary }}
            variant="outlined"
          >
            <MenuItem value="">
              <em>Ninguno</em>
            </MenuItem>
            <MenuItem value="Basico">Básico</MenuItem>
            <MenuItem value="intermedio">intermedio </MenuItem>
            <MenuItem value="alto">alto</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Box>
        <FormControl sx={{ m: "2px", mt: 1, minWidth: 180 }} size="small">
          <InputLabel id="demo-select-small" sx={{ color: theme.palette.text.primary }}>
            Duración
          </InputLabel>
          <Select
            onChange={filterMaxMin}
            labelId="demo-select-small"
            id="demo-select-small"
            autoWidth
            label="Duración"
            value={SelectFilterMaxMin}
            sx={{ color: theme.palette.text.primary }}
            variant="outlined"
          >
            <MenuItem value="">
              <em>Ninguno</em>
            </MenuItem>
            <MenuItem value="min">min</MenuItem>
            <MenuItem value="max">max</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Box>
        <Button
          sx={{
            m: "2px",
            mt: 1,
            minWidth: 180,
            height: 40,
            bgcolor: theme.palette.primary.dark,
            "&:hover": {
              bgcolor: theme.palette.primary.light,
              color: theme.palette.text.primary,
            },
            color: theme.palette.common.white,
          }}
          onClick={clearAllFilters}
        >
          Borrar filtros
        </Button>
      </Box>
    </Box>
  );
};

export default Filters;
