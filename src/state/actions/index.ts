// libraries
import { AnyAction } from "@reduxjs/toolkit";

//types
import { Slot } from "../../types/slots";
import { ITrinket } from "../../types/trinket";

// action types
export enum ActionTypes {
    RESET = "RESET",
    OPEN_SELECTOR = "OPEN_SELECTOR",
    CLOSE_SELECTOR = "CLOSE_SELECTOR",
    SELECT_TRINKET = "SELECT_TRINKET",
}

export interface IAction<ActionType, Payload> extends AnyAction {
    type: ActionType;
    payload: Payload;
}

interface IActionCreatorsMapObject {
    [actionCreator: string]: (...args: any[]) => {
        type: ActionTypes;
        payload?: any;
    };
}

type ActionsUnion<Action extends IActionCreatorsMapObject> = ReturnType<Action[keyof Action]>;

export type Actions = ActionsUnion<typeof Actions>;
export const Actions = {
    reset: (): IAction<ActionTypes.RESET, void> => ({
        type: ActionTypes.RESET,
        payload: undefined,
    }),

    openSelector: (slot: Slot): IAction<ActionTypes.OPEN_SELECTOR, Slot> => ({
        type: ActionTypes.OPEN_SELECTOR,
        payload: slot,
    }),

    closeSelector: (): IAction<ActionTypes.CLOSE_SELECTOR, void> => ({
        type: ActionTypes.CLOSE_SELECTOR,
        payload: undefined,
    }),

    selectTrinket: (trinket: ITrinket): IAction<ActionTypes.SELECT_TRINKET, ITrinket> => ({
        type: ActionTypes.SELECT_TRINKET,
        payload: trinket,
    }),
};
