// types
import { IArmour } from "../types/armour";

export const Body: IArmour[] = [
    {
        name: "Clover Poncho",
        description: "A breezy poncho crafted from clovers and plant fiber.",
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
                amount: 9,
                unit: undefined,
            },
            {
                name: "Resistance",
                description: "Reduces incoming damage",
                amount: 5,
                unit: "%",
            },
            {
                name: "Stamina usage",
                description: "Increases the amount of stamina used",
                amount: 2.5,
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
