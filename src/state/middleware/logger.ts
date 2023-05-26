// libraries
import { Middleware } from "@reduxjs/toolkit";

// types
import { Actions } from "../actions";
import { IState } from "../store";

export const loggingMiddleware: Middleware<{}, IState> = (store) => (next) => (action: Actions) => {
    console.group(`ACTION: ${action.type}`);
    console.log("Previous State:", store.getState());
    console.log("Action:", action);

    next(action);

    console.log("Next State:", store.getState());
    console.groupEnd();
};
