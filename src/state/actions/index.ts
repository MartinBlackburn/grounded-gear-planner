// libraries
import { AnyAction } from "@reduxjs/toolkit";

//types
import { Slot } from "../../types/slots";
import { IMainHand } from "../../types/mainHand";
import { IOffhand } from "../../types/offhand";
import { ITrinket } from "../../types/trinket";
import { IArmour } from "../../types/armour";
import { IMutation } from "../../types/mutation";

// action types
export enum ActionTypes {
    RESET = "RESET",
    OPEN_SELECTOR = "OPEN_SELECTOR",
    CLOSE_SELECTOR = "CLOSE_SELECTOR",
    SELECT_MAINHAND = "SELECT_MAINHAND",
    SELECT_OFFHAND = "SELECT_OFFHAND",
    SELECT_TRINKET = "SELECT_TRINKET",
    SELECT_HEAD = "SELECT_HEAD",
    SELECT_BODY = "SELECT_BODY",
    SELECT_LEGS = "SELECT_LEGS",
    SELECT_MUTATION = "SELECT_MUTATION",
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

    selectHead: (item: IArmour): IAction<ActionTypes.SELECT_HEAD, IArmour> => ({
        type: ActionTypes.SELECT_HEAD,
        payload: item,
    }),

    selectBody: (item: IArmour): IAction<ActionTypes.SELECT_BODY, IArmour> => ({
        type: ActionTypes.SELECT_BODY,
        payload: item,
    }),

    selectLegs: (item: IArmour): IAction<ActionTypes.SELECT_LEGS, IArmour> => ({
        type: ActionTypes.SELECT_LEGS,
        payload: item,
    }),

    selectMutation: (
        item: IMutation,
        index: number
    ): IAction<ActionTypes.SELECT_MUTATION, { item: IMutation; index: number }> => ({
        type: ActionTypes.SELECT_MUTATION,
        payload: {
            item,
            index,
        },
    }),
};
