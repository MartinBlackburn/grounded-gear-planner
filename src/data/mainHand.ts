// types
import { DamageType } from "../types/damageType";
import { IMainHand } from "../types/mainHand";

export const MainHand: IMainHand[] = [
    // misc
    {
        name: "Scythe of Blossoms",
        damage: [25, 70, 105],
        stun: [2],
        description: "A deadly, nimble scythe crafted from mantis chunks and a mantis claw of a fallen assassin.",
        effects: [],
        damageType: DamageType.SLASHING,
    },

    // maces
    {
        name: "Spiky Sprig",
        damage: [20, 40, 60],
        stun: [8],
        description: "A weaponized sprig with thorns at the end.",
        effects: [],
        damageType: DamageType.GENERIC,
    },
    {
        name: "Red Ant Club",
        damage: [30, 60, 90],
        stun: [10],
        description: "Meaty ant leg perfect for beating.",
        effects: [],
        damageType: DamageType.GENERIC,
    },
    {
        name: "Fire Ant Club",
        damage: [40, 80, 120],
        stun: [20],
        description: "Exceptionally deadly club crafted from fire ant parts.",
        effects: [],
        damageType: DamageType.GENERIC,
    },
    {
        name: "Salt Morning Star",
        damage: [25, 55, 80],
        stun: [8, 16, 20],
        description: "A heavy ball of hurt coated in shards of salt to ensure whatever it hits feel excruciating pain.",
        effects: [],
        damageType: DamageType.GENERIC,
    },
    {
        name: "Club of the Mother Demon",
        damage: [53, 105, 158],
        stun: [15, 20, 25],
        description:
            "A spiked club built for violence. Fashioned from various parts from a brood mother and other resources.",
        effects: [],
        damageType: DamageType.GENERIC,
    },
    {
        name: "Mint Mace",
        damage: [50, 100, 150],
        stun: [16],
        description:
            "A giant club crafted from a chunk of Ice Caps breath mints. Deals patented Mouthtown fresh damage on hit but useless for busting.",
        effects: [],
        damageType: DamageType.GENERIC,
    },

    // knifes
    {
        name: "Larva Blade",
        damage: [10, 20, 30],
        stun: [0],
        description: "A swift blade crafted from serrated larva pincers that poisons on hit.",
        effects: [],
        damageType: DamageType.STABBING,
    },
    {
        name: "Spider Fang Dagger",
        damage: [12, 36],
        stun: [0],
        description: "A nimble dagger made from a wolf spider fang that poisons on hit.",
        effects: [],
        damageType: DamageType.STABBING,
    },
    {
        name: "Widow Dagger",
        damage: [19, 55],
        stun: [0],
        description: "A fang from a legendary spider. Venom with an unmatched potency still lurks inside.",
        effects: [],
        damageType: DamageType.STABBING,
    },

    // spears
    {
        name: "Pebblet Spear",
        damage: [9, 18, 27],
        stun: [0],
        description:
            "A basic stabby weapon to keep creatures at bay. Can also be thrown for a deadly amount of damage.",
        effects: [],
        damageType: DamageType.STABBING,
    },
    {
        name: "Stinger Spear",
        damage: [16, 32, 58],
        stun: [0],
        description: "Supreme stabbing apparatus.",
        effects: [],
        damageType: DamageType.STABBING,
    },
    {
        name: "Rusty Spear",
        damage: [24, 48, 72],
        stun: [0],
        description: "A bacterially infectious spear crafted from sharp flakes of rust.",
        effects: [],
        damageType: DamageType.STABBING,
    },

    // swords
    {
        name: "Mosquito Needle",
        damage: [15, 30, 45],
        stun: [3, 2, 2],
        description: 'A fast and deadly rapier that mimics the functionality of a mosquito"s blood sucking tool.',
        effects: [],
        damageType: DamageType.STABBING,
    },
    {
        name: "Black Ant Sword",
        damage: [19, 39, 58],
        stun: [0],
        description: "A clean blade with the cutting power of ants.",
        effects: [],
        damageType: DamageType.SLASHING,
    },
    {
        name: "Tiger Mosquito Rapier",
        damage: [20, 40, 60],
        stun: [4],
        description: "A rapier fashioned out of an even deadlier mosquito.",
        effects: [],
        damageType: DamageType.STABBING,
    },
    {
        name: "Toenail Scimitar",
        damage: [30, 60, 90],
        stun: [0],
        description:
            " A serious, swift, and noble weapon. forged from uniquely sharp, serrated toenail clippings. Wrapped in luxuriosuch as lint rope and pupa hides, with an accent made of brittle, deadly rust.",
        effects: [],
        damageType: DamageType.SLASHING,
    },
    {
        name: "Tick Macuahuitl",
        damage: [23, 46, 69],
        stun: [0],
        description: "A violent bat crafted from tick fangs.",
        effects: [],
        damageType: DamageType.SLASHING,
    },
    {
        name: "Spicy Coaltana",
        damage: [40, 83, 123],
        stun: [0],
        description:
            "Sear foes with a finely crafted blade, hammered out of tempered spicy globs and always-hot EverChar coal chunks.",
        effects: [],
        damageType: DamageType.SLASHING,
    },
    {
        name: "Antlion Greatsword",
        damage: [40, 83, 123],
        stun: [0],
        description: "Incredibly large and heavy. Uses multiple antlion pincers to form many dangerous points.",
        effects: [],
        damageType: DamageType.SLASHING,
    },

    // axes
    {
        name: "Sour Battle-axe",
        damage: [45, 90, 135],
        stun: [12, 24, 36],
        description:
            'A shockingly deadly axe that"s larger than necessary, packing the jolting power of Wormhole sour candies.',
        effects: [],
        damageType: DamageType.SLASHING,
    },

    // hammers
    {
        name: "Black Ox Hammer",
        damage: [36, 72, 108],
        stun: [6, 12, 24],
        description: "A hammer so strong it can bust open almost all natural materials.",
        effects: [],
        damageType: DamageType.BUSTING,
    },
    {
        name: "Insect Hammer",
        damage: [21, 42, 64],
        stun: [5, 11, 20],
        description: "A capable hammer made of durable bug parts that are much stronger than the pebblet hammer.",
        effects: [],
        damageType: DamageType.BUSTING,
    },
    {
        name: "Pebblet Hammer",
        damage: [13, 26, 38],
        stun: [2, 8, 15],
        description: "A basic busting tool necessary to pound large things into smaller, more portable things.",
        effects: [],
        damageType: DamageType.BUSTING,
    },
];
