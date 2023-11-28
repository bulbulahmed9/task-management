import { createSlice } from "@reduxjs/toolkit";

const initState = {
  title : "Task Management App"
};

export const taskSlice = createSlice({
  name: "task",
  initialState: initState,
  reducers: {
    // setLogin: (state, action) => {
    //   const { payload } = action;
    //   state.isExpiredToken = false;
    // },
  },
});
