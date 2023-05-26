// data
import { Trinkets } from "../data/trinkets";

// types
import { Slot } from "../types/slots";

export const getSlotItems = (slot: Slot) => {
    switch (slot) {
        case Slot.TRINKET:
            return Trinkets;

        default:
            return [];
    }
};
