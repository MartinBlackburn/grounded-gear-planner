// data
import { MainHand } from "../data/mainHand";
import { Offhand } from "../data/offhand";
import { Trinkets } from "../data/trinkets";
import { Head } from "../data/head";
import { Body } from "../data/body";
import { Legs } from "../data/legs";

// types
import { Slot } from "../types/slots";

export const getSlotItems = (slot: Slot) => {
    switch (slot) {
        case Slot.MAINHAND:
            return MainHand;

        case Slot.OFFHAND:
            return Offhand;

        case Slot.TRINKET:
            return Trinkets;

        case Slot.HEAD:
            return Head;

        case Slot.BODY:
            return Body;

        case Slot.LEGS:
            return Legs;
        default:
            return [];
    }
};
