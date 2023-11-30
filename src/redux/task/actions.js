import { taskSlice } from "./slice";
const { actions: slice } = taskSlice;

export const setStatusUpdateAction = (id, status) => (dispatch) => {
  dispatch(slice.setStatusUpdate({ id, status }));
};

export const setTaskEditAction =
  (id, title, description, dueDate, status) => (dispatch) => {
    dispatch(slice.setTaskEdit({ id, title, description, dueDate, status }));
  };
