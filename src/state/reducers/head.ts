// libraries
import { Reducer } from "@reduxjs/toolkit";
import { IArmour } from "../../types/armour";

// types
import { ActionTypes, Actions } from "../actions";

const INITIAL_STATE = null;

const reducer: Reducer<IArmour | null, Actions> = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionTypes.RESET:
            return INITIAL_STATE;

        case ActionTypes.SELECT_HEAD:
            if (action.payload === null) {
                return INITIAL_STATE;
            }

            return action.payload;

        default:
            return state;
    }
};

export default reducer;
