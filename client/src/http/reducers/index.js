import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import productReducer from "./productReducer";
import userReducer from "./userReducer";
// import uploadReducer from "./uploadReducer";

const rootReducer = combineReducers({
	user: userReducer,
	product: productReducer,
	// upload: uploadReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));