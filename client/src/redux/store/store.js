import { createStore } from "redux";
import pokemon from "../reducer/pokemon.js";
import {composeWithDevTools} from 'redux-devtools-extension';
import { applyMiddleware } from "redux";
import  thunk  from 'redux-thunk';

const store = createStore(pokemon, composeWithDevTools(
    applyMiddleware(thunk)
));

export default store;