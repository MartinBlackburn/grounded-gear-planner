// libraries
import { AnyAction } from "@reduxjs/toolkit";
import { IMainHand } from "../../types/mainHand";
import { IOffhand } from "../../types/offhand";

//types
import { Slot } from "../../types/slots";
import { ITrinket } from "../../types/trinket";

// action types
export enum ActionTypes {
    RESET = "RESET",
    OPEN_SELECTOR = "OPEN_SELECTOR",
    CLOSE_SELECTOR = "CLOSE_SELECTOR",
    SELECT_MAINHAND = "SELECT_MAINHAND",
    SELECT_OFFHAND = "SELECT_OFFHAND",
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

    selectTrinket: (item: ITrinket): IAction<ActionTypes.SELECT_TRINKET, ITrinket> => ({
        type: ActionTypes.SELECT_TRINKET,
        payload: item,
    }),

    selectMainHand: (item: IMainHand): IAction<ActionTypes.SELECT_MAINHAND, IMainHand> => ({
        type: ActionTypes.SELECT_MAINHAND,
        payload: item,
    }),

    selectOffhand: (item: IOffhand): IAction<ActionTypes.SELECT_OFFHAND, IOffhand> => ({
        type: ActionTypes.SELECT_OFFHAND,
        payload: item,
    }),
};
