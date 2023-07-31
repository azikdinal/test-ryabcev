import { applyMiddleware, createStore} from '@reduxjs/toolkit';
import thunk from "redux-thunk";
import { heroReducer } from "./reducer";

const rootReducer = heroReducer

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store