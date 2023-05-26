// libraries
import { combineReducers } from "@reduxjs/toolkit";

// types
import { Actions } from "../actions";

// reducers
import trinket from "./trinket";
import selectedSlot from "./selectedSlot";

export const rootReducer = combineReducers({
    trinket: trinket,
    selectedSlot: selectedSlot,
});

export const getInitialState = () => {
    return rootReducer(undefined, Actions.reset());
};
