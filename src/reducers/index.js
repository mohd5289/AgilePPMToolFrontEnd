import { combineReducers } from "redux";
import backlogReducer from "./backlogReducer";
import errorReducer from "./errorReducer";
import productReducer from "./productReducer";

export default combineReducers({
  errors: errorReducer,
  projects:productReducer,
  backlog:backlogReducer
});
