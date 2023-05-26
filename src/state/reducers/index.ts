// libraries
import { combineReducers } from "@reduxjs/toolkit";

// types
import { Actions } from "../actions";

// reducers
import mainHand from "./mainHand";

export const rootReducer = combineReducers({
    mainHand: mainHand,
});

export const getInitialState = () => {
    return rootReducer(undefined, Actions.reset());
};
