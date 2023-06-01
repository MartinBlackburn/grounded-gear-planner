// types
import { DamageAugment } from "../../types/damageAugment";
import { DamageType } from "../../types/damageType";
import { IMainHand } from "../../types/mainHand";

export const Swords: IMainHand[] = [
    {
        name: "Mosquito needle",
        description: 'A fast and deadly rapier that mimics the functionality of a mosquito"s blood sucking tool.',
        image: "images/mainHand/mosquitoNeedle.webp",
        damage: [15, 30, 45],
        stun: [3, 2, 2],
        effects: [
            {
                name: "Life steal",
                description: "Converts damage dealt to enemies into health for the player.",
                amount: 6,
                unit: "%",
            },
        ],
        damageType: DamageType.STABBING,
    },
    {
        name: "Black ant sword",
        description: "A clean blade with the cutting power of ants.",
        image: "images/mainHand/blackAntSword.webp",
        damage: [19, 39, 58],
        stun: [0],
        effects: [],
        damageType: DamageType.SLASHING,
    },
    {
        name: "Tiger mosquito rapier",
        description: "A rapier fashioned out of an even deadlier mosquito.",
        image: "images/mainHand/tigerMosquitoRapier.webp",
        damage: [20, 40, 60],
        stun: [4],
        effects: [
            {
                name: "Life steal",
                description: "Converts damage dealt to enemies into health for the player.",
                amount: 6,
                unit: "%",
            },
        ],
        damageType: DamageType.STABBING,
    },
    {
        name: "Toenail scimitar",
        description:
            " A serious, swift, and noble weapon. Forged from uniquely sharp, serrated toenail clippings. Wrapped in luxurious materials such as lint rope and pupa hides, with an accent made of brittle, deadly rust.",
        image: "images/mainHand/toenailScimitar.webp",
        damage: [30, 60, 90],
        stun: [0],
        effects: [
            {
                name: "Infection",
                description: "Every hit decreases enemy attack speed and attack damage by 10%. Does not stack.",
                amount: 0,
                unit: undefined,
            },
        ],
        damageType: DamageType.SLASHING,
    },
    {
        name: "Tick macuahuitl",
        description: "A violent bat crafted from tick fangs.",
        image: "images/mainHand/tickMacuahuitl.webp",
        damage: [23, 46, 69],
        stun: [0],
        effects: [
            {
                name: "Life steal",
                description: "Converts damage dealt to enemies into health for the player.",
                amount: 6,
                unit: "%",
            },
        ],
        damageType: DamageType.SLASHING,
    },
    {
        name: "Spicy coaltana",
        description:
            "Sear foes with a finely crafted blade, hammered out of tempered spicy globs and always-hot EverChar coal chunks.",
        image: "images/mainHand/spicyCoaltana.webp",
        damage: [40, 83, 123],
        stun: [0],
        twoHanded: true,
        effects: [],
        damageAugment: DamageAugment.SPICY,
        damageType: DamageType.SLASHING,
    },
    {
        name: "Antlion greatsword",
        description: "Incredibly large and heavy. Uses multiple antlion pincers to form many dangerous points.",
        image: "images/mainHand/antlionGreatsword.webp",
        damage: [40, 83, 123],
        stun: [0],
        effects: [],
        damageType: DamageType.SLASHING,
    },
];
