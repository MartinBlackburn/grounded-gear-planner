// data
import { MainHand } from "../data/mainHand";
import { Trinkets } from "../data/trinkets";

// types
import { Slot } from "../types/slots";

export const getSlotItems = (slot: Slot) => {
    switch (slot) {
        case Slot.TRINKET:
            return Trinkets;

        case Slot.MAINHAND:
            return MainHand;

        default:
            return [];
    }
};
