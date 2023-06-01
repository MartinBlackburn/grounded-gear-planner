// types
import { DamageType } from "../../types/damageType";
import { IMainHand } from "../../types/mainHand";

export const Daggers: IMainHand[] = [
    {
        name: "Pebblet Dagger",
        description: "A handy tool for harvesting aquatic flora or for defending oneself against underwater fauna.",
        image: "images/mainHand/pebbletDagger.webp",
        damage: [7, 23],
        stun: [0],
        effects: [],
        damageType: DamageType.SLASHING,
    },
    {
        name: "Bone Dagger",
        description:
            "A diving knife made of more robust materials, increasing the tool's effectiveness in its various functions.",
        image: "images/mainHand/boneDagger.webp",
        damage: [13, 40],
        stun: [3],
        effects: [],
        damageType: DamageType.SLASHING,
    },
    {
        name: "Larva blade",
        description: "A swift blade crafted from serrated larva pincers that poisons on hit.",
        image: "images/mainHand/larvaBlade.webp",
        damage: [10, 20, 30],
        stun: [0],
        effects: [
            {
                name: "Poison",
                description: "Attacks inflict 10 damage every 5 seconds for 15 seconds.",
                amount: 0,
                unit: undefined,
            },
        ],
        damageType: DamageType.SLASHING,
    },
    {
        name: "Spider fang dagger",
        description: "A nimble dagger made from a wolf spider fang that poisons on hit.",
        image: "images/mainHand/spiderFangDagger.webp",
        damage: [12, 36],
        stun: [0],
        effects: [
            {
                name: "Poison",
                description: "Attacks inflict 15 damage every 5 seconds for 15 seconds.",
                amount: 0,
                unit: undefined,
            },
        ],
        damageType: DamageType.SLASHING,
    },
    {
        name: "Widow dagger",
        description: "A fang from a legendary spider. Venom with an unmatched potency still lurks inside.",
        image: "images/mainHand/widowDagger.webp",
        damage: [19, 55],
        stun: [0],
        effects: [
            {
                name: "Poison",
                description: "Attacks inflict 20 damage every 5 seconds for 15 seconds.",
                amount: 0,
                unit: undefined,
            },
        ],
        damageType: DamageType.SLASHING,
    },
];
