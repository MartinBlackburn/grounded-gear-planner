// libraries
import { Reducer } from "@reduxjs/toolkit";
import { ITrinket } from "../../types/trinket";

// types
import { ActionTypes, Actions } from "../actions";

const INITIAL_STATE = null;

const reducer: Reducer<ITrinket | null, Actions> = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionTypes.RESET:
            return INITIAL_STATE;

        case ActionTypes.SELECT_TRINKET:
            return action.payload;

        default:
            return state;
    }
};

export default reducer;
