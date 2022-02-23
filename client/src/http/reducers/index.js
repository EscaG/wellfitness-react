import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import favoritesReducer from "./favoritesReducer";
import productReducer from "./productReducer";
import userReducer from "./userReducer";
import basketReducer from "./basket-reducer";
// import SearchReducer from "./searchReducer";
// import uploadReducer from "./uploadReducer";

const rootReducer = combineReducers({
	user: userReducer,
	product: productReducer,
	favorites: favoritesReducer,
	basket: basketReducer
	// search: SearchReducer
	// upload: uploadReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));