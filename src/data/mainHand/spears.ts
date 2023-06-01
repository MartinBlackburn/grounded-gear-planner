// types
import { DamageType } from "../../types/damageType";
import { IMainHand } from "../../types/mainHand";

export const Spears: IMainHand[] = [
    {
        name: "Pebblet spear",
        description:
            "A basic stabby weapon to keep creatures at bay. Can also be thrown for a deadly amount of damage.",
        image: "images/mainHand/pebbletSpear.webp",
        damage: [9, 18, 27],
        stun: [0],
        twoHanded: true,
        effects: [],
        damageType: DamageType.STABBING,
    },
    {
        name: "Bone trident",
        description: "A hydrodynamic bone weapon on that excels at under water combat.",
        image: "images/mainHand/boneTrident.webp",
        damage: [16, 32, 48],
        stun: [5],
        twoHanded: true,
        effects: [],
        damageType: DamageType.STABBING,
    },
    {
        name: "Stinger spear",
        description: "Supreme stabbing apparatus.",
        image: "images/mainHand/stingerSpear.webp",
        damage: [16, 32, 58],
        stun: [0],
        twoHanded: true,
        effects: [
            {
                name: "Critical hit chance",
                description: "While equipped, increases critical hit chance.",
                amount: 1,
                unit: "%",
            },
        ],
        damageType: DamageType.STABBING,
    },
    {
        name: "Rusty spear",
        description: "A bacterially infectious spear crafted from sharp flakes of rust.",
        image: "images/mainHand/rustySpear.webp",
        damage: [24, 48, 72],
        stun: [0],
        twoHanded: true,
        effects: [
            {
                name: "Infection",
                description: "Every hit decreases enemy attack speed and attack damage by 10%. Does not stack.",
                amount: 0,
                unit: undefined,
            },
        ],
        damageType: DamageType.STABBING,
    },
];
