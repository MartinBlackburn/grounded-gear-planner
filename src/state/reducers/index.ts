// libraries
import { combineReducers } from "@reduxjs/toolkit";

// types
import { Actions } from "../actions";

// reducers
import trinket from "./trinket";
import mainHand from "./mainHand";
import offhand from "./offhand";
import selectedSlot from "./selectedSlot";

export const rootReducer = combineReducers({
    offhand: offhand,
    mainHand: mainHand,
    trinket: trinket,
    selectedSlot: selectedSlot,
});

export const getInitialState = () => {
    return rootReducer(undefined, Actions.reset());
};
