// types
import { DamageAugment } from "../../types/damageAugment";
import { DamageType } from "../../types/damageType";
import { IMainHand } from "../../types/mainHand";

export const Staffs: IMainHand[] = [
    {
        name: "Mint Staff",
        description:
            "A staff made of Ice Caps fresh mints. Crafted by forbidden chemistry and arcane science, mimics the effects of a magic spell found in Minotaur and Myrmidons.",
        image: "images/mainHand/mintStaff.webp",
        damage: [78],
        damageType: DamageType.GENERIC,
        damageAugment: DamageAugment.FRESH,
        twoHanded: true,
        stun: [5],
        effects: [],
    },
    {
        name: "Spicy Staff",
        description:
            "A staff made of Hot Cha Chas spicy candy. Crafted by forbidden chemistry and arcane science, mimics the effects of a magic spell found in Minotaur and Myrmidons.",
        image: "images/mainHand/spicyStaff.webp",
        damage: [75],
        damageType: DamageType.GENERIC,
        damageAugment: DamageAugment.SPICY,
        twoHanded: true,
        stun: [0],
        effects: [],
    },
    {
        name: "Sour Staff",
        description:
            "A staff made of Wormholes sour candy. Crafted by forbidden chemistry and arcane science, mimics the effects of a magic spell found in Minotaur and Myrmidons.",
        image: "images/mainHand/sourStaff.webp",
        damage: [80],
        damageType: DamageType.GENERIC,
        damageAugment: DamageAugment.SOUR,
        twoHanded: true,
        stun: [30],
        effects: [],
    },
];
