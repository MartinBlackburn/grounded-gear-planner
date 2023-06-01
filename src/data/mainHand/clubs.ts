// types
import { DamageAugment } from "../../types/damageAugment";
import { DamageType } from "../../types/damageType";
import { IMainHand } from "../../types/mainHand";

export const Clubs: IMainHand[] = [
    {
        name: "Spiky sprig",
        description: "A weaponized sprig with thorns at the end.",
        image: "images/mainHand/spikySprig.webp",
        damage: [20, 40, 60],
        stun: [8],
        twoHanded: true,
        effects: [
            {
                name: "Bleed",
                description: "Attacks inflict an effect that deals 10 damage a second for 10 seconds.",
                amount: 0,
                unit: undefined,
            },
        ],
        damageType: DamageType.GENERIC,
    },
    {
        name: "Red ant club",
        description: "Meaty ant leg perfect for beating.",
        image: "images/mainHand/redAntClub.webp",
        damage: [30, 60, 90],
        stun: [10],
        twoHanded: true,
        effects: [],
        damageType: DamageType.GENERIC,
    },
    {
        name: "Fire ant club",
        description: "Exceptionally deadly club crafted from fire ant parts.",
        image: "images/mainHand/fireAnyClub.webp",
        damage: [40, 80, 120],
        stun: [20],
        twoHanded: true,
        effects: [
            {
                name: "Crit daze",
                description: "Critical hits make enemies 20% slower for a short time.",
                amount: 0,
                unit: undefined,
            },
        ],
        damageType: DamageType.GENERIC,
    },
    {
        name: "Salt morning star",
        description: "A heavy ball of hurt coated in shards of salt to ensure whatever it hits feel excruciating pain.",
        image: "images/mainHand/saltMorningStar.webp",
        damage: [25, 55, 80],
        stun: [8, 16, 20],
        effects: [],
        damageAugment: DamageAugment.SALTY,
        damageType: DamageType.GENERIC,
    },
    {
        name: "Club of the mother demon",
        description:
            "A spiked club built for violence. Fashioned from various parts from a brood mother and other resources.",
        image: "images/mainHand/clubOfTheMotherDemon.webp",
        damage: [53, 105, 158],
        stun: [15, 20, 25],
        twoHanded: true,
        effects: [],
        damageType: DamageType.GENERIC,
    },
    {
        name: "Mint mace",
        description:
            "A giant club crafted from a chunk of Ice Caps breath mints. Deals patented Mouthtown fresh damage on hit but useless for busting.",
        image: "images/mainHand/mintMace.webp",
        damage: [50, 100, 150],
        stun: [16],
        twoHanded: true,
        effects: [],
        damageAugment: DamageAugment.FRESH,
        damageType: DamageType.GENERIC,
    },
];
