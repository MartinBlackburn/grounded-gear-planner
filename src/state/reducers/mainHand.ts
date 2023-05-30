// libraries
import { Reducer } from "@reduxjs/toolkit";
import { IMainHand } from "../../types/mainHand";

// types
import { ActionTypes, Actions } from "../actions";

const INITIAL_STATE = null;

const reducer: Reducer<IMainHand | null, Actions> = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionTypes.RESET:
            return INITIAL_STATE;

        case ActionTypes.SELECT_MAINHAND:
            return action.payload;

        default:
            return state;
    }
};

export default reducer;
