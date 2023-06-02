// types
import { IArmour } from "../types/armour";

export const Legs: IArmour[] = [
    {
        name: "Clover Shin Guards",
        description: "Thin, damp leg armor crafted from clovers and plant fiber.",
        image: "",
        sleekEffect: {
            name: "Trickle regen",
            description: "Regenerates the players health over time.",
            amount: 0.35,
            unit: undefined,
        },
        setEffect: {
            name: "Moist",
            description: "Reduces thirst drain rate by 25%.",
            amount: 25,
            unit: "%",
        },
        effects: [
            {
                name: "Defense",
                description: "Reduces incoming damage",
                amount: 3,
                unit: undefined,
            },
            {
                name: "Resistance",
                description: "Reduces incoming damage",
                amount: 2.5,
                unit: "%",
            },
            {
                name: "Stamina usage",
                description: "Increases the amount of stamina used",
                amount: 1.25,
                unit: "%",
            },
            {
                name: "Fuller",
                description: "Reduces hunger drain rate",
                amount: 5,
                unit: "%",
            },
        ],
    },
];
