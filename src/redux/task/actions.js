import { taskSlice } from "./slice";
const { actions: slice } = taskSlice;

export const setStatusUpdateAction = (id, status) => (dispatch) => {
  dispatch(slice.setStatusUpdate({ id, status }));
};
