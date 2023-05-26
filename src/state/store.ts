// libraries
import { configureStore } from "@reduxjs/toolkit";

// reducers
import { rootReducer, getInitialState } from "./reducers";

// middleware
import { loggingMiddleware } from "./middleware/logger";

export const store = configureStore({
    reducer: rootReducer,
    middleware: [loggingMiddleware],
    preloadedState: getInitialState(),
});

export type IState = ReturnType<typeof rootReducer>;
