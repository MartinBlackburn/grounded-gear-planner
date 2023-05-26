// libraries
import { Reducer } from "@reduxjs/toolkit";
import { Slot } from "../../types/slots";

// types
import { ActionTypes, Actions } from "../actions";

const INITIAL_STATE = null;

const reducer: Reducer<Slot | null, Actions> = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionTypes.RESET:
        case ActionTypes.CLOSE_SELECTOR:
            return INITIAL_STATE;

        case ActionTypes.OPEN_SELECTOR:
            return action.payload;

        default:
            return state;
    }
};

export default reducer;
