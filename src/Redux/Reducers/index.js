import { combineReducers } from "redux";
import EmpReducer from "./EmpReducer";

const rootReducers = combineReducers({
  EmployeData: EmpReducer,
});

export default rootReducers;
