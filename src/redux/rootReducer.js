import { combineReducers } from "redux";
import { taskSlice } from "./task/slice";

export const rootReducer = combineReducers({
    task: taskSlice.reducer,
})