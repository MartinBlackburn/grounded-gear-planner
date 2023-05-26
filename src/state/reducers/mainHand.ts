// libraries
import { Reducer } from "@reduxjs/toolkit";

// types
import { ActionTypes, Actions } from "../actions";

interface IState {
    item: string;
}

const INITIAL_STATE: IState = {
    item: "main hand",
};

const reducer: Reducer<IState, Actions> = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionTypes.RESET:
            return INITIAL_STATE;

        default:
            return state;
    }
};

export default reducer;
