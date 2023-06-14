// libraries
import { combineReducers } from "@reduxjs/toolkit";

// types
import { Actions } from "../actions";

// reducers
import mainHand from "./mainHand";
import offhand from "./offhand";
import trinket from "./trinket";
import head from "./head";
import body from "./body";
import legs from "./legs";
import mutations from "./mutations";
import selectedSlot from "./selectedSlot";

export const rootReducer = combineReducers({
    mainHand: mainHand,
    offhand: offhand,
    trinket: trinket,
    head: head,
    body: body,
    legs: legs,
    mutations: mutations,
    selectedSlot: selectedSlot,
});

export const getInitialState = () => {
    return rootReducer(undefined, Actions.reset());
};
