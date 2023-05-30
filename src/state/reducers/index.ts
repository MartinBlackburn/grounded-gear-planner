// libraries
import { combineReducers } from "@reduxjs/toolkit";

// types
import { Actions } from "../actions";

// reducers
import trinket from "./trinket";
import mainHand from "./mainHand";
import selectedSlot from "./selectedSlot";

export const rootReducer = combineReducers({
    mainHand: mainHand,
    trinket: trinket,
    selectedSlot: selectedSlot,
});

export const getInitialState = () => {
    return rootReducer(undefined, Actions.reset());
};
