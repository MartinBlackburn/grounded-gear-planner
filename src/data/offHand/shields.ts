// types
import { IOffhand } from "../../types/offhand";

export const Shields: IOffhand[] = [
    {
        name: "Fire ant shield",
        description: "An exotic shield made of fire ant parts.",
        image: "images/offHand/fireAntShield.webp",
        effects: [
            {
                name: "Block strength",
                description: "Increases block gauge",
                amount: 50,
                unit: undefined,
            },
            {
                name: "Block corrosion",
                description:
                    "Blocking attacks has a 20% chance to increase the damage taken by enemies by 15% for 10 seconds.",
                amount: 0,
                unit: undefined,
            },
        ],
    },
    {
        name: "Ladybird shield",
        description: "A sleek and stylish shield crafted from the jet black shell of a ladybird.",
        image: "images/offHand/ladybirdShield.webp",
        effects: [
            {
                name: "Block strength",
                description: "Increases block gauge",
                amount: 50,
                unit: undefined,
            },
            {
                name: "Block free attack",
                description:
                    "Blocking attacks has a 25% chance to make the next melee strike use 0 stamina for 5 seconds.",
                amount: 0,
                unit: undefined,
            },
        ],
    },
    {
        name: "Black ant shield",
        description: "A sturdy shield made made of black and red ant parts.",
        image: "images/offHand/blackAntShield.webp",
        effects: [
            {
                name: "Block strength",
                description: "Increases block gauge",
                amount: 50,
                unit: undefined,
            },
        ],
    },
    {
        name: "Weevil shield",
        description: "Hopefully this shell will defend you better than the weevil it came from.",
        image: "images/offHand/weevilShield.webp",
        effects: [
            {
                name: "Block strength",
                description: "Increases block gauge",
                amount: 25,
                unit: undefined,
            },
        ],
    },
];
