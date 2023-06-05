// types
import { IArmour } from "../types/armour";

export const Head: IArmour[] = [
    {
        name: "Clover Hood",
        description: "A thin hood crafted from clovers and plant fiber.",
        image: "images/head/cloverHood.png",
        sleekEffect: {
            name: "Trickle regen",
            description: "Regenerates the players health over time.",
            amount: 0.35,
            unit: undefined,
        },
        setEffect: { name: "Moist", description: "Reduces thirst drain rate by 25%.", amount: 25, unit: "%" },
        effects: [
            { name: "Defense", description: "Reduces incoming damage", amount: 3, unit: undefined },
            { name: "Resistance", description: "Reduces incoming damage", amount: 2.5, unit: "%" },
            { name: "Stamina usage", description: "Increases the amount of stamina used", amount: 5, unit: "%" },
            { name: "Fuller", description: "Reduces hunger drain rate", amount: 5, unit: "%" },
        ],
    },
    {
        name: "Grub Goggles",
        description:
            "Stylish goggles crafted from smooth grub hide strips. Increases maximum stamina with aerodynamics.",
        image: "images/head/grubGoggles.png",
        sleekEffect: {
            name: "Hyperstamina",
            description: "Increases stamina regeneration rate by 20%.",
            amount: 20,
            unit: "%",
        },
        setEffect: {
            name: "Optimized offense",
            description: "Reduces the time it takes for stamina to regenerate by 10%.",
            amount: 10,
            unit: "%",
        },
        effects: [
            { name: "Defense", description: "Reduces incoming damage", amount: 3, unit: undefined },
            { name: "Resistance", description: "Reduces incoming damage", amount: 5, unit: "%" },
            { name: "Stamina usage", description: "Increases the amount of stamina used", amount: 15, unit: "%" },
            { name: "Max Stamina", description: "", amount: 0, unit: undefined },
        ],
    },
    {
        name: "Red Ant Helmet",
        description: "A fearsome kabuto crafted from a mix of red ant parts. Increases hauling capacity.",
        image: "images/head/redAntHelmet.png",
        sleekEffect: {
            name: "Grass harvest speed",
            description: "Increases harvesting speed of grass by 25%.",
            amount: 25,
            unit: "%",
        },
        setEffect: {
            name: "HumAnt",
            description:
                "Red Soldier Ants ignore the player unless they attack an ant or steal an egg, and Red Worker Ants no longer become curious and instead ignore the player.",
            amount: 0,
            unit: undefined,
        },
        effects: [
            { name: "Defense", description: "Reduces incoming damage", amount: 3, unit: undefined },
            { name: "Resistance", description: "Reduces incoming damage", amount: 2.5, unit: "%" },
            { name: "Stamina usage", description: "Increases the amount of stamina used", amount: 5, unit: "%" },
            { name: "Hauling Strength", description: "", amount: 0, unit: undefined },
        ],
    },
    {
        name: "Acorn Face Mask",
        description: "A spooky mask made from an acorn which insects find delicious.",
        image: "images/head/acornFaceMask.png",
        sleekEffect: { name: "Max health", description: "Increases max health by 10.", amount: 10, unit: undefined },
        setEffect: {
            name: "Uncrackable",
            description: "Increases stun gauge when blocking attacks by 15.",
            amount: 15,
            unit: undefined,
        },
        effects: [
            { name: "Defense", description: "Reduces incoming damage", amount: 3, unit: undefined },
            { name: "Resistance", description: "Reduces incoming damage", amount: 7.5, unit: "%" },
            { name: "Stamina usage", description: "Increases the amount of stamina used", amount: 25, unit: "%" },
            { name: "Major Threat", description: "", amount: 0, unit: undefined },
        ],
    },
    {
        name: "Black Ant Helmet",
        description: "Sleek black kabuto crafted from black ant parts.",
        image: "images/head/blackAntHelmet.png",
        sleekEffect: {
            name: "Crit hyperstamina",
            description: "Critical hits have a 50% chance to increase stamina regen by 20% for 20 seconds.",
            amount: 0,
            unit: undefined,
        },
        setEffect: {
            name: "Pincushion",
            description: "Reflects 50% of the damage taken back to enemies.",
            amount: 50,
            unit: "%",
        },
        effects: [
            { name: "Defense", description: "Reduces incoming damage", amount: 7.5, unit: undefined },
            { name: "Resistance", description: "Reduces incoming damage", amount: 5, unit: "%" },
            { name: "Stamina usage", description: "Increases the amount of stamina used", amount: 15, unit: "%" },
            { name: "Crit After Block", description: "", amount: 0, unit: undefined },
        ],
    },
    {
        name: "Koi Scale Helmet",
        description: "A stylish head piece made from solid koi fish scales.",
        image: "images/head/koiScaleHelmet.png",
        sleekEffect: {
            name: "Parry stun",
            description:
                "Performing a perfect block has a 20% chance to increase the players attacks stun by 1 for 10 seconds.",
            amount: 0,
            unit: undefined,
        },
        setEffect: {
            name: "Dazzling riposte",
            description: "Perfect blocks decreases enemy defense by 20% for 10 seconds.",
            amount: 0,
            unit: undefined,
        },
        effects: [
            { name: "Defense", description: "Reduces incoming damage", amount: 7.5, unit: undefined },
            { name: "Resistance", description: "Reduces incoming damage", amount: 2.5, unit: "%" },
            { name: "Stamina usage", description: "Increases the amount of stamina used", amount: 5, unit: "%" },
            { name: "Perfect Block", description: "", amount: 0, unit: undefined },
        ],
    },
    {
        name: "Spider Hood",
        description:
            "Intimidating headgear pieced together from various spider parts. Perfect for out on field or hunting insects for sport.",
        image: "images/head/spiderHood.png",
        sleekEffect: {
            name: "Poison damage",
            description: "Increases damage of player-dealt poison attacks.",
            amount: 20,
            unit: "%",
        },
        setEffect: {
            name: "Hunter's prowess",
            description: "Increases stamina regeneration rate by 25%.",
            amount: 25,
            unit: "%",
        },
        effects: [
            { name: "Defense", description: "Reduces incoming damage", amount: 7.5, unit: undefined },
            { name: "Resistance", description: "Reduces incoming damage", amount: 5, unit: "%" },
            { name: "Stamina usage", description: "Increases the amount of stamina used", amount: 15, unit: "%" },
            { name: "Hasty Regen", description: "", amount: 0, unit: undefined },
        ],
    },
    {
        name: "Bee Face Mask",
        description:
            "An intimidating face mask made of hard to gather materials. Aerodynamic and adds a bonus to sprint distance.",
        image: "images/head/beeFaceMask.png",
        sleekEffect: {
            name: "Slow shot",
            description: "Ranged attacks have a 50% chance to slow targets by 20% for 5 seconds when hit.",
            amount: 0,
            unit: undefined,
        },
        setEffect: {
            name: "Pollen shot",
            description: "Ranged attacks give a 25% chance to release a cloud of pollen that deals 5 stun.",
            amount: 0,
            unit: undefined,
        },
        effects: [
            { name: "Defense", description: "Reduces incoming damage", amount: 7.5, unit: undefined },
            { name: "Resistance", description: "Reduces incoming damage", amount: 2.5, unit: "%" },
            { name: "Stamina usage", description: "Increases the amount of stamina used", amount: 5, unit: "%" },
            { name: "Bow Stun", description: "", amount: 0, unit: undefined },
        ],
    },
    {
        name: "Ladybug Faceplate",
        description: "A terrifying visage crafted from a shard of ladybug shell. Increases Block Strength.",
        image: "images/head/ladybugFaceplate.png",
        sleekEffect: {
            name: "Increased healing",
            description: "Increases the amount of health received from any healing options by 12%.",
            amount: 12,
            unit: "%",
        },
        setEffect: {
            name: "Scarlet embrace",
            description:
                "50% chance to apply temporary health regeneration when blocking an attack, healing 1 health every 2 seconds for 20 seconds.",
            amount: 0,
            unit: undefined,
        },
        effects: [
            { name: "Defense", description: "Reduces incoming damage", amount: 7.5, unit: undefined },
            { name: "Resistance", description: "Reduces incoming damage", amount: 7.5, unit: "%" },
            { name: "Stamina usage", description: "Increases the amount of stamina used", amount: 25, unit: "%" },
            { name: "Block Strength", description: "", amount: 0, unit: undefined },
        ],
    },
    {
        name: "Mask of the Mother Demon",
        description: "Defense:10\nResistance:7.5%",
        image: "images/head/maskoftheMotherDemon.png",
        sleekEffect: {
            name: "Venom coating",
            description:
                "All attacks have a 25% chance to apply Venom effect dealing 18 damage every 5 seconds over 30 seconds. DoT damage does not stack per armor piece.",
            amount: 0,
            unit: undefined,
        },
        setEffect: {
            name: "Poison nova",
            description:
                "Hitting a creature has a 10% chance to release a poison explosion that affects all creatures engulfed in it. It deals 30 damage every 5 seconds for 25 seconds.",
            amount: 0,
            unit: undefined,
        },
        effects: [
            { name: "Defense", description: "Reduces incoming damage", amount: 10, unit: undefined },
            { name: "Resistance", description: "Reduces incoming damage", amount: 7.5, unit: "%" },
            { name: "Stamina usage", description: "Increases the amount of stamina used", amount: 15, unit: "%" },
            { name: "Poison Coating", description: "", amount: 0, unit: undefined },
        ],
    },
    {
        name: "Mask of the Moldy Matriarch",
        description: "Defense:10\nResistance:7.5%",
        image: "images/head/maskoftheMoldyMatriarch.png",
        sleekEffect: {
            name: "DynaMighty",
            description:
                "Explosive attacks have a 10% chance to lower the target's explosive resistance by 20% for 20 seconds.",
            amount: 0,
            unit: undefined,
        },
        setEffect: {
            name: "Cluster bomb",
            description:
                "All bomb weapons have a 10% chance to cause an additional explosive that deals 70 explosive damage.",
            amount: 0,
            unit: undefined,
        },
        effects: [
            { name: "Defense", description: "Reduces incoming damage", amount: 10, unit: undefined },
            { name: "Resistance", description: "Reduces incoming damage", amount: 7.5, unit: "%" },
            { name: "Stamina usage", description: "Increases the amount of stamina used", amount: 15, unit: "%" },
            { name: "Explosive Stun", description: "", amount: 0, unit: undefined },
        ],
    },
    {
        name: "Wasp Morion",
        description: "Defense:10\nResistance:2.5%",
        image: "images/head/waspMorion.png",
        sleekEffect: {
            name: "Quick shot refund",
            description:
                "Charged bow shots have a 30% chance to give a buff for 5 seconds that makes uncharged bow shots refund 30 stamina per hit.",
            amount: 0,
            unit: undefined,
        },
        setEffect: {
            name: "Air superiority",
            description: "Uncharged bow shots have a 75% chance to deal 30 extra stun to flying Creatures.",
            amount: 0,
            unit: undefined,
        },
        effects: [
            { name: "Defense", description: "Reduces incoming damage", amount: 10, unit: undefined },
            { name: "Resistance", description: "Reduces incoming damage", amount: 2.5, unit: "%" },
            { name: "Stamina usage", description: "Increases the amount of stamina used", amount: 5, unit: "%" },
            { name: "Charged Shot Combo", description: "", amount: 0, unit: undefined },
        ],
    },
    {
        name: "Moth Wrap",
        description: "A stylish head wrap made from moth parts.",
        image: "images/head/mothWrap.png",
        sleekEffect: {
            name: "Jumpstart",
            description: "Ranged attacks have a 5% chance to refund 15 stamina.",
            amount: 0,
            unit: undefined,
        },
        setEffect: {
            name: "Wind run",
            description:
                "Ranged attacks have a 25% chance to increase the players movement speed by 20% for 10 seconds.",
            amount: 0,
            unit: undefined,
        },
        effects: [
            { name: "Defense", description: "Reduces incoming damage", amount: 4, unit: undefined },
            { name: "Resistance", description: "Reduces incoming damage", amount: 2.5, unit: "%" },
            { name: "Stamina usage", description: "Increases the amount of stamina used", amount: 5, unit: "%" },
            { name: "Ranged Cut", description: "", amount: 0, unit: undefined },
        ],
    },
    {
        name: "Widow Hood",
        description: "Light, practical headgear crafted from parts of a black widow.",
        image: "images/head/widowHood.png",
        sleekEffect: {
            name: "Parry poison",
            description:
                "Perfect blocks have a 20% chance to Poison targets, dealing 15 damage every 5 seconds for 30 seconds.",
            amount: 0,
            unit: undefined,
        },
        setEffect: {
            name: "Death's impetus",
            description: "Destroying anything increases the players movement speed by 20% for 10 seconds.",
            amount: 0,
            unit: undefined,
        },
        effects: [
            { name: "Defense", description: "Reduces incoming damage", amount: 10, unit: undefined },
            { name: "Resistance", description: "Reduces incoming damage", amount: 2.5, unit: "%" },
            { name: "Stamina usage", description: "Increases the amount of stamina used", amount: 5, unit: "%" },
            { name: "Poison Damage", description: "", amount: 0, unit: undefined },
        ],
    },
    {
        name: "Black Ox Helm",
        description: "An intimidating helmet crafted out of a black ox beetle.",
        image: "images/head/blackOxHelm.png",
        sleekEffect: {
            name: "Quickcharge",
            description: "Charged attacks charge up 12% quicker.",
            amount: 12,
            unit: "%",
        },
        setEffect: {
            name: "Stunning charger",
            description: "Increases the stun of charged attacks by 25.",
            amount: 25,
            unit: undefined,
        },
        effects: [
            { name: "Defense", description: "Reduces incoming damage", amount: 10, unit: undefined },
            { name: "Resistance", description: "Reduces incoming damage", amount: 5, unit: "%" },
            { name: "Stamina usage", description: "Increases the amount of stamina used", amount: 15, unit: "%" },
            { name: "Overbearing", description: "", amount: 0, unit: undefined },
        ],
    },
    {
        name: "Assassin's Mask",
        description:
            "A stunning mask built for speed and striking. Crafted from mantis chunks and a mantis head of a fallen assassin.",
        image: "images/head/assassin'sMask.png",
        sleekEffect: {
            name: "Crit stun",
            description: "Critical hits have a 30% chance to deal 25 stun.",
            amount: 0,
            unit: undefined,
        },
        setEffect: {
            name: "Critical chain",
            description:
                "Performing a critical hit increases the chance of performing another critical hit by 2.5% for 10 seconds.",
            amount: 0,
            unit: undefined,
        },
        effects: [
            { name: "Defense", description: "Reduces incoming damage", amount: 10, unit: undefined },
            { name: "Resistance", description: "Reduces incoming damage", amount: 2.5, unit: "%" },
            { name: "Stamina usage", description: "Increases the amount of stamina used", amount: 5, unit: "%" },
            { name: "Cutman", description: "", amount: 0, unit: undefined },
        ],
    },
    {
        name: "Fire Ant Helmet",
        description: "A black and red kabuto crafted from fire ant parts.",
        image: "images/head/fireAntHelmet.png",
        sleekEffect: {
            name: "Acid damage",
            description: "Increases damage of player-dealt acid-based attacks by 10%.",
            amount: 10,
            unit: "%",
        },
        setEffect: {
            name: "Acidic splash",
            description:
                "Melee attacks has a 10% chance to launch an additional acidic splash that will deal 25 extra damage. Can hit targets from any distance. Acid damage ignores enemy defense and all resistances.",
            amount: 0,
            unit: undefined,
        },
        effects: [
            { name: "Defense", description: "Reduces incoming damage", amount: 10, unit: undefined },
            { name: "Resistance", description: "Reduces incoming damage", amount: 5, unit: "%" },
            { name: "Stamina usage", description: "Increases the amount of stamina used", amount: 15, unit: "%" },
            { name: "Corrosion", description: "", amount: 0, unit: undefined },
        ],
    },
    {
        name: "Roly Poly Helmet",
        description: "A glorious helmet crafted from the impenetrable shell of a roly poly.",
        image: "images/head/rolyPolyHelmet.png",
        sleekEffect: {
            name: "Block strength",
            description:
                "Increases the block gauge by 50, allowing the player to take more damage before being stunned.",
            amount: 50,
            unit: undefined,
        },
        setEffect: {
            name: "Taunting Gaze",
            description: "Increases creatures favorability of the player over other sources of aggression by 50%.",
            amount: 50,
            unit: "%",
        },
        effects: [
            { name: "Defense", description: "Reduces incoming damage", amount: 10, unit: undefined },
            { name: "Resistance", description: "Reduces incoming damage", amount: 7.5, unit: "%" },
            { name: "Stamina usage", description: "Increases the amount of stamina used", amount: 25, unit: "%" },
            { name: "Block Stun", description: "", amount: 0, unit: undefined },
        ],
    },
    {
        name: "Antlion Wide Brim",
        description: "An impeccably fashionable hat made from antlion parts.",
        image: "images/head/antlionWideBrim.png",
        sleekEffect: { name: "Thirst rate", description: "Lowers thirst drain by 5%.", amount: 5, unit: "%" },
        setEffect: {
            name: "Quickdraw",
            description:
                "Increases bow and crossbow reload speed by 40% for 3 seconds when attacking with ranged weapons. Reduces the duration of the 'Rough Reload' effect on crossbows to 1.5 seconds rather than 2.3. Reduces ranged damage by 90% for 3 seconds after a fast shot happens.",
            amount: 0,
            unit: undefined,
        },
        effects: [
            { name: "Defense", description: "Reduces incoming damage", amount: 10, unit: undefined },
            { name: "Resistance", description: "Reduces incoming damage", amount: 5, unit: "%" },
            { name: "Stamina usage", description: "Increases the amount of stamina used", amount: 15, unit: "%" },
            { name: "Sizzle Protection", description: "", amount: 0, unit: undefined },
        ],
    },
];
