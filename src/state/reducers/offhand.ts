// libraries
import { Reducer } from "@reduxjs/toolkit";
import { IOffhand } from "../../types/offhand";

// types
import { ActionTypes, Actions } from "../actions";

const INITIAL_STATE = null;

const reducer: Reducer<IOffhand | null, Actions> = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionTypes.RESET:
            return INITIAL_STATE;

        case ActionTypes.SELECT_OFFHAND:
            return action.payload;

        default:
            return state;
    }
};

export default reducer;
