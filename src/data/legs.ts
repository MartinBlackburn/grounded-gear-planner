// types
import { IArmour } from "../types/armour";

export const Legs: IArmour[] = [
    {
        name: "Clover Shin Guards",
        description: "Thin, damp leg armor crafted from clovers and plant fiber.",
        image: "images/legs/cloverShinGuards.png",
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
        name: "Grub Leggings",
        description: "Slick and sick grub hide leggings that increase maximum stamina.",
        image: "images/legs/grubLeggings.png",
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
            { name: "Max stamina", description: "Increases max stamina.", amount: 20, unit: undefined },
        ],
    },
    {
        name: "Red Ant Knee Guards",
        description: "Sturdy knee guards formed out of red ant parts. Increases hauling capacity.",
        image: "images/legs/redAntKneeGuards.png",
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
            {
                name: "Hauling strength",
                description: "Increases the amount of Grass Planks and Weed Stems that can be carried at once by 3.",
                amount: 3,
                unit: undefined,
            },
        ],
    },
    {
        name: "Acorn Legplates",
        description: "Chunky leg protection crafted from shards of acorn that insects find delicious.",
        image: "images/legs/acornLegPlates.png",
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
            {
                name: "Major threat",
                description: "Increases creatures favorability of the player over other sources of aggression by 10%.",
                amount: 10,
                unit: "%",
            },
        ],
    },
    {
        name: "Black Ant Legplates",
        description: "Sleek black set of knee guards crafted from black ant parts.",
        image: "images/legs/blackAntLegplates.png",
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
            {
                name: "Crit after block",
                description:
                    "Blocking an attack has a 50% chance to increase the chance for a crit to be performed by 1% for 15 seconds.",
                amount: 0,
                unit: undefined,
            },
        ],
    },
    {
        name: "Koi Scale Greaves",
        description:
            "Sturdy and hydrodynamic leg plates made from koi fish scales. Offers increased protection without sacrificing style.",
        image: "images/legs/koiScaleGreaves.png",
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
            {
                name: "Perfect block",
                description: "Extends the perfect block timing window by 15 milliseconds.",
                amount: 0,
                unit: undefined,
            },
        ],
    },
    {
        name: "Spider Knee Pads",
        description:
            "Shiny and strong kneepads made from various spider pieces. Perfect for out on field or hunting insects for sport.",
        image: "images/legs/spiderKneePads.png",
        sleekEffect: {
            name: "Poison damage",
            description: "Increases damage of player-dealt poison attacks.",
            amount: 30,
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
            {
                name: "Hasty regen",
                description: "Lower exhaustion when running out of stamina by 5%.",
                amount: 0,
                unit: undefined,
            },
        ],
    },
    {
        name: "Bee Shin Guards",
        description: "Sleek shin protection crafted from bee parts that adds an increase to sprint distance.",
        image: "images/legs/beeShinGuards.png",
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
            {
                name: "Bow stun",
                description: "Has a 20% chance to inflict 3 stun when using bows or crossbows.",
                amount: 0,
                unit: undefined,
            },
        ],
    },
    {
        name: "Ladybug Shin Guards",
        description:
            "Protective shin armor made from bits of tough, beautuful ladybug shell. Increases Block Strength.",
        image: "images/legs/ladybugShinGuards.png",
        sleekEffect: {
            name: "Increased healing",
            description: "Increases the amount of health received from any healing options.",
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
            { name: "Block strength", description: "Increases block gauge.", amount: 25, unit: undefined },
        ],
    },
    {
        name: "Greaves of the Mother Demon",
        description: "Defense:20\nResistance:5%",
        image: "images/legs/greavesoftheMotherDemon.png",
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
            {
                name: "Poison coating",
                description:
                    "All attacks have a 25% chance to apply a Poison effect dealing 16 damage every 5 seconds over 30 seconds. DoT damage does not stack per armor piece.",
                amount: 0,
                unit: undefined,
            },
        ],
    },
    {
        name: "Greaves of the Moldy Matriarch",
        description: "Defense:20\nResistance:5%",
        image: "images/legs/greavesoftheMoldyMatriarch.png",
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
            {
                name: "Explosive stun",
                description: "Gives all explosive attacks 5 extra stun.",
                amount: 0,
                unit: undefined,
            },
        ],
    },
    {
        name: "Wasp Greaves",
        description: "Defense:20\nResistance:5%",
        image: "images/legs/waspGreaves.png",
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
            {
                name: "Charged shot combo",
                description:
                    "Uncharged bow attacks have a 30% chance to apply a 5 second buff that reduces the charged attack time of all sources by 25%.",
                amount: 0,
                unit: undefined,
            },
        ],
    },
    {
        name: "Moth Leggings",
        description: "A stylish leggings made from moth parts.",
        image: "images/legs/mothLeggings.png",
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
            {
                name: "Ranged cut",
                description:
                    "Ranged weapons have a 30% chance to inflict the Bleed effect, dealing 20 damage a second for 5 seconds.",
                amount: 0,
                unit: undefined,
            },
        ],
    },
    {
        name: "Widow Leggings",
        description: "Light legwear crafted from parts of a black widow.",
        image: "images/legs/widowLeggings.png",
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
            {
                name: "Poison damage",
                description: "Increases damage of player-dealt poison attacks.",
                amount: 30,
                unit: "%",
            },
        ],
    },
    {
        name: "Black Ox Legwraps",
        description: "An intimidating set of legwraps crafted out of a black ox beetle.",
        image: "images/legs/blackOxLegwraps.png",
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
            {
                name: "Overbearing",
                description:
                    "Performing a charge attack has a 33% chance to lower the damage of enemy attacks by 20% for 15 seconds.",
                amount: 0,
                unit: undefined,
            },
        ],
    },
    {
        name: "Assassin's Greaves",
        description:
            "A pair of greaves built for speed and striking. Crafted from mantis chunks and a mantis claw of a fallen assassin.",
        image: "images/legs/assassinsGreaves.png",
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
            {
                name: "Cutman",
                description:
                    "Critical hits have a 50% chance to inflict the Bleed effect, dealing 20 damage a second for 10 seconds.",
                amount: 0,
                unit: undefined,
            },
        ],
    },
    {
        name: "Fire Ant Legplates",
        description: "A black and red set of knee guards crafted from fire ant parts.",
        image: "images/legs/fireAntLegplates.png",
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
            {
                name: "Corrosion",
                description:
                    "Melee attacks have a 10% chance to debuff the enemy with acid, causing them to take 15% more damage for 10 seconds.",
                amount: 0,
                unit: undefined,
            },
        ],
    },
    {
        name: "Roly Poly Legplates",
        description: "A glorious set of legplates crafted from the impenetrable shell of a roly poly.",
        image: "images/legs/rolyPolyLegplates.png",
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
            {
                name: "Block stun",
                description: "Increases enemy stun by 3 when blocking attacks.",
                amount: 3,
                unit: undefined,
            },
        ],
    },
    {
        name: "Antlion Spurs",
        description: "Leg armor made of antlion parts.",
        image: "images/legs/antlionSpurs.png",
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
            {
                name: "Sizzle protection",
                description: "Increases sizzle resistance by 75%.",
                amount: 75,
                unit: "%",
            },
        ],
    },
];
