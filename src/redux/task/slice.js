import { createSlice } from "@reduxjs/toolkit";

const initState = {
  title: "Task Management App",
  statusUpdate: { id: null, status: null },
  taskEdit : {id : null , title : null , description : null, dueDate : null, status : null}
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
    setTaskEdit: (state, action) => {
      const { payload } = action;
      state.taskEdit = {
        id: payload?.id,
        title: payload?.title,
        description: payload?.description,
        dueDate: payload?.dueDate,
        status: payload?.status,
      };
    },
  },
});
