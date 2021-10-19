import { combineReducers } from "redux";
import backlogReducer from "./backlogReducer";
import errorReducer from "./errorReducer";
import productReducer from "./productReducer";
import securityReducer from "./securityReducer";


export default combineReducers({
  errors: errorReducer,
  projects:productReducer,
  backlog:backlogReducer,
  security:securityReducer
});
