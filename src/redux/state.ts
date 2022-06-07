import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducers/Counter";
import { composeWithDevTools } from 'redux-devtools-extension'

const rootReducer = combineReducers({
  counter: reducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
export default store;
