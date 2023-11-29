import { createSlice } from "@reduxjs/toolkit";

const initState = {
  title: "Task Management App",
  statusUpdate: { id: null, status: null },
};

export const taskSlice = createSlice({
  name: "task",
  initialState: initState,
  reducers: {
    setStatusUpdate: (state, action) => {
      const { payload } = action;
      state.statusUpdate = {
        id: payload?.id,
        status: payload?.status,
      };
    },
  },
});
