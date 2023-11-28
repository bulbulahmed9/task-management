import { toast } from "react-toastify";
import * as requestFromServer from "./api";
import { taskSlice } from "./slice";
const { actions: slice } = taskSlice;

// export const setLoginAction =
//   ({ email, password }, setLoading) =>
//   (dispatch) => {
//     setLoading(true);
//     return requestFromServer
//       .loginAPI(email, password)
//       .then((res) => {
//         setLoading(false);
//         dispatch(getProfileAction(res?.data, setLoading));
//       })
//       .catch((err) => {
//         setLoading(false);
//         toast.error(err?.response?.data?.message || "Login Failed, try again");
//       });
//   };
