// data
import { MainHand } from "../data/mainHand";
import { Offhand } from "../data/offhand";
import { Trinkets } from "../data/trinkets";

// types
import { Slot } from "../types/slots";

export const getSlotItems = (slot: Slot) => {
    switch (slot) {
        case Slot.TRINKET:
            return Trinkets;

        case Slot.MAINHAND:
            return MainHand;

        case Slot.OFFHAND:
            return Offhand;

        default:
            return [];
    }
};
