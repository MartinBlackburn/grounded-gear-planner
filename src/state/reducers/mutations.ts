// libraries
import { Reducer } from "@reduxjs/toolkit";
import { IMutation } from "../../types/mutation";

// types
import { ActionTypes, Actions } from "../actions";

export interface IMutations {
    [key: number]: IMutation | null;
}

const INITIAL_STATE: IMutations = {
    0: null,
    1: null,
    2: null,
    3: null,
    4: null,
};

const reducer: Reducer<IMutations, Actions> = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionTypes.RESET:
            return INITIAL_STATE;

        case ActionTypes.SELECT_MUTATION:
            let mutations = { ...state };

            if (action.payload.index === null) {
                mutations[action.payload.index] = null;
            } else {
                mutations[action.payload.index] = action.payload.item;
            }

            return mutations;

        default:
            return state;
    }
};

export default reducer;
