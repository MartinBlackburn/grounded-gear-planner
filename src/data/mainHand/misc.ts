// types
import { DamageType } from "../../types/damageType";
import { IMainHand } from "../../types/mainHand";

export const Misc: IMainHand[] = [
    {
        name: "Pinch whacker",
        description:
            "A pinchy grabby arm from a fallen robot repurposed as a lethal weapon. Can no longer pinch, only whack.",
        image: "images/mainHand/pinchWhacker.webp",
        damage: [25, 50, 75],
        stun: [5],
        effects: [
            {
                name: "Short circuit",
                description:
                    "Melee strikes have a 10% chance to create an electrical explosion that deals 35 extra damage and 15 stun.",
                amount: 0,
                unit: undefined,
            },
        ],
        damageType: DamageType.GENERIC,
    },
    {
        name: "Prod smacker",
        description:
            "An electric prod arm from a fallen service robot given a second life as a tool for smacking enemies.",
        image: "images/mainHand/prodSmacker.webp",
        damage: [53, 105, 158],
        stun: [25],
        effects: [
            {
                name: "Shockwave",
                description:
                    "Charged attacks create an electrical AoE explosion that deals 40 extra damage and 20 extra stun.",
                amount: 0,
                unit: undefined,
            },
        ],
        damageType: DamageType.GENERIC,
    },
];
