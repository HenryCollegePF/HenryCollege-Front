import { createSlice } from "@reduxjs/toolkit";

export const coursesSlice = createSlice({
  name: "courses",
  initialState: {
    list: [], // initialize list to an empty array
    courseById: [],
    courseByName: [],
    coursePage: {},
    data: [],
  },
  reducers: {
    setcoursesList: (state, action) => {
      return { ...state, list: action.payload.results }; // update list to an array
    },
    postCourses: (state, action) => {
      state.data = action.payload;
    },
    getCourseById: (state, action) => {
      state.courseById = action.payload;
    },
    getCourseByName: (state, action) => {
      state.courseByName = action.payload;
    },
    getPageCourse: (state, action) => {
      state.list = action.payload.results;
    },
  },
});

export const {
  setcoursesList,
  postCourses,
  getCourseById,
  getCourseByName,
  getPageCourse,
} = coursesSlice.actions;

export default coursesSlice.reducer;
