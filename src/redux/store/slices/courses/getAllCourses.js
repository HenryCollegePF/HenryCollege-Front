import axios from "axios";
import {
  setcoursesList,
  postCourses,
  getCourseById,
  getCourseByName,
  getPageCourse,
} from ".";
import { getAuthToken } from "../../../../utils/auth";
export const FILTER_BY_CREATOR = "FILTER_BY_CREATOR";
export const GET_FILTER = "GET_FILTER";

const URL = import.meta.env.VITE_BACK_URL || "http://localhost:3001";

//Get All Courses

export const getAllCourses = () => {
  return async (dispatch) => {
    try {
      let res = await axios.get(`${URL}/course`);
      dispatch(setcoursesList(res.data));
    } catch (error) {
      console.log(error);
    }
  };
};

//Post a new Course

export const postNewCourse = (course) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(`${URL}/course`, course);
      dispatch(postCourses(response.data));
      alert("Curso nuevo publicado exitosamente");
    } catch (error) {
      console.log(error);
    }
  };
};

//Get courses by ID

export const getCoursesById = (id) => {
  return async (dispatch) => {
    try {
      const token = getAuthToken();
      let res = await axios.get(`${URL}/course/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch(getCourseById(res.data));
    } catch (error) {
      console.log(error);
    }
  };
};

//Get courses by Name

export const getCoursesByName = (name) => {
  return async (dispatch) => {
    try {
      let res = await axios.get(`${URL}/course?name=${name}`);
      dispatch(getCourseByName(res.data.results));
    } catch (error) {
      console.log(error);
    }
  };
};

export const changePageCourses = (page) => {
  return async (dispatch) => {
    try {
      let res = await axios.get(`${URL}/course?page=${page}`);
      dispatch(getPageCourse(res.data));
    } catch (error) {
      console.log(error);
    }
  };
};
//Filtro por Orden ALfabetico
export const filtersByAlpha = (sortName) => {
  return async (dispatch) => {
    try {
      let res = await axios.get(`${URL}/course?sortName=${sortName}`);
      dispatch(setcoursesList(res.data));
    } catch (error) {
      console.log(error);
    }
  };
};
//Filtros por niveles
export const filtersByLevel = (level) => {
  return async (dispatch) => {
    try {
      let res = await axios.get(`${URL}/course?level=${level}`);
      dispatch(setcoursesList(res.data)); //setcoursesList me actualiza el estado global
    } catch (error) {
      console.log(error);
    }
  };
};
export const filtersByMin = (sortDuration) => {
  return async (dispatch) => {
    try {
      let res = await axios.get(`${URL}/course?sortDuration=${sortDuration}`);
      dispatch(setcoursesList(res.data)); //setcoursesList me actualiza el estado global
    } catch (error) {
      console.log(error);
    }
  };
};
