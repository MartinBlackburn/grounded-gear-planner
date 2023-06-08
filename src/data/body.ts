// types
import { IArmour } from "../types/armour";

export const Body: IArmour[] = [
    {
        name: "Clover Poncho",
        description: "A breezy poncho crafted from clovers and plant fiber.",
        image: "images/body/cloverPoncho.png",
        sleekEffect: {
            name: "Trickle regen",
            description: "Regenerates the players health over time.",
            amount: 0.35,
            unit: undefined,
        },
        setEffect: { name: "Moist", description: "Reduces thirst drain rate.", amount: 25, unit: "%" },
        effects: [
            { name: "Defense", description: "Reduces incoming damage", amount: 9, unit: undefined },
            { name: "Resistance", description: "Reduces incoming damage", amount: 5, unit: "%" },
            { name: "Stamina usage", description: "Increases the amount of stamina used", amount: 5, unit: "%" },
            { name: "Fuller", description: "Reduces hunger drain rate", amount: 5, unit: "%" },
        ],
    },
    {
        name: "Grub Vest",
        description: "An aerodynamic vest made from smooth grub hide leather that lends a boost to maximum stamina.",
        image: "images/body/grubVest.png",
        sleekEffect: {
            name: "Hyperstamina",
            description: "Increases stamina regeneration rate.",
            amount: 20,
            unit: "%",
        },
        setEffect: {
            name: "Optimized offense",
            description: "Reduces the time it takes for stamina to regenerate.",
            amount: 10,
            unit: "%",
        },
        effects: [
            { name: "Defense", description: "Reduces incoming damage", amount: 9, unit: undefined },
            { name: "Resistance", description: "Reduces incoming damage", amount: 10, unit: "%" },
            { name: "Stamina usage", description: "Increases the amount of stamina used", amount: 15, unit: "%" },
            { name: "Max stamina", description: "Increases max stamina.", amount: 20, unit: undefined },
        ],
    },
    {
        name: "Red Ant Arm Guards",
        description: "A spaulder and gauntlet combo crafted from tough red ant parts. Increases hauling capacity.",
        image: "images/body/redAntArmGuards.png",
        sleekEffect: {
            name: "Grass harvest speed",
            description: "Increases harvesting speed of grass.",
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
            { name: "Defense", description: "Reduces incoming damage", amount: 9, unit: undefined },
            { name: "Resistance", description: "Reduces incoming damage", amount: 5, unit: "%" },
            { name: "Stamina usage", description: "Increases the amount of stamina used", amount: 5, unit: "%" },
            {
                name: "Hauling strength",
                description: "Increases the amount of Grass Planks and Weed Stems that can be carried at once.",
                amount: 3,
                unit: undefined,
            },
        ],
    },
    {
        name: "Acorn Chestplate",
        description: "Chunky torso protection crafted from acorn bits that insects find delicious.",
        image: "images/body/acornChestplate.png",
        sleekEffect: { name: "Max health", description: "Increases max health.", amount: 10, unit: undefined },
        setEffect: {
            name: "Uncrackable",
            description: "Increases stun gauge when blocking attacks.",
            amount: 15,
            unit: undefined,
        },
        effects: [
            { name: "Defense", description: "Reduces incoming damage", amount: 9, unit: undefined },
            { name: "Resistance", description: "Reduces incoming damage", amount: 15, unit: "%" },
            { name: "Stamina usage", description: "Increases the amount of stamina used", amount: 25, unit: "%" },
            {
                name: "Major threat",
                description: "Increases creatures favorability of the player over other sources of aggression.",
                amount: 10,
                unit: "%",
            },
        ],
    },
    {
        name: "Black Ant Chestplate",
        description: "Sleek spaulders and gauntlet combo crafted from black ant parts.",
        image: "images/body/blackAntChestplate.png",
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
            { name: "Defense", description: "Reduces incoming damage", amount: 15, unit: undefined },
            { name: "Resistance", description: "Reduces incoming damage", amount: 10, unit: "%" },
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
        name: "Koi Scale Chestplate",
        description: "A sturdy chest piece made from koi fish scales.",
        image: "images/body/koiScaleChestplate.png",
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
            { name: "Defense", description: "Reduces incoming damage", amount: 15, unit: undefined },
            { name: "Resistance", description: "Reduces incoming damage", amount: 5, unit: "%" },
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
        name: "Spider Shoulder Guard",
        description:
            "Fashioned from the hairy rump of an orb weaver. Perfect for out on field or hunting insects for sport.",
        image: "images/body/spiderShoulderGuard.png",
        sleekEffect: {
            name: "Poison damage",
            description: "Increases damage of player-dealt poison attacks.",
            amount: 40,
            unit: "%",
        },
        setEffect: {
            name: "Hunter's prowess",
            description: "Increases stamina regeneration rate.",
            amount: 25,
            unit: "%",
        },
        effects: [
            { name: "Defense", description: "Reduces incoming damage", amount: 15, unit: undefined },
            { name: "Resistance", description: "Reduces incoming damage", amount: 10, unit: "%" },
            { name: "Stamina usage", description: "Increases the amount of stamina used", amount: 15, unit: "%" },
            {
                name: "Hasty regen",
                description: "Lower exhaustion when running out of stamina.",
                amount: 5,
                unit: "%",
            },
        ],
    },
    {
        name: "Bee Shoulder Pads",
        description: "Intense spaulders made from tough bee parts that add an increase to sprint distance.",
        image: "images/body/beeShoulderPads.png",
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
            { name: "Defense", description: "Reduces incoming damage", amount: 15, unit: undefined },
            { name: "Resistance", description: "Reduces incoming damage", amount: 5, unit: "%" },
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
        name: "Ladybug Chestplate",
        description: "A torso armor from a shard of ladybug shell. Increases Block Strength.",
        image: "images/body/ladybugChestplate.png",
        sleekEffect: {
            name: "Increased healing",
            description: "Increases the amount of health received from any healing options",
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
            { name: "Defense", description: "Reduces incoming damage", amount: 15, unit: undefined },
            { name: "Resistance", description: "Reduces incoming damage", amount: 15, unit: "%" },
            { name: "Stamina usage", description: "Increases the amount of stamina used", amount: 25, unit: "%" },
            { name: "Block strength", description: "Increases block gauge.", amount: 25, unit: undefined },
        ],
    },
    {
        name: "Chest of the Mother Demon",
        description: "A foreboding helm crafted from the frightening pieces of a fallen Broodmother.",
        image: "images/body/chestoftheMotherDemon.png",
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
            { name: "Defense", description: "Reduces incoming damage", amount: 20, unit: undefined },
            { name: "Resistance", description: "Reduces incoming damage", amount: 5, unit: "%" },
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
        name: "Chest of the Moldy Matriarch",
        description: "A grossly fungal piece of equipment crafted from the infected broodmother.",
        image: "images/body/chestoftheMoldyMatriarch.png",
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
            { name: "Defense", description: "Reduces incoming damage", amount: 20, unit: undefined },
            { name: "Resistance", description: "Reduces incoming damage", amount: 5, unit: "%" },
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
        name: "Wasp Breastplate",
        description: "A fashionable, durable helm. A symbol of the queen's wisdom.",
        image: "images/body/waspBreastplate.png",
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
            { name: "Defense", description: "Reduces incoming damage", amount: 20, unit: undefined },
            { name: "Resistance", description: "Reduces incoming damage", amount: 5, unit: "%" },
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
        name: "Moth Robe",
        description: "A stylish robe made from moth parts.",
        image: "images/body/mothRobe.png",
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
            { name: "Defense", description: "Reduces incoming damage", amount: 7, unit: undefined },
            { name: "Resistance", description: "Reduces incoming damage", amount: 5, unit: "%" },
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
        name: "Widow Spaulder",
        description: "Light shoulder coverings crafted from parts of a black widow.",
        image: "images/body/widowSpaulder.png",
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
            { name: "Defense", description: "Reduces incoming damage", amount: 20, unit: undefined },
            { name: "Resistance", description: "Reduces incoming damage", amount: 5, unit: "%" },
            { name: "Stamina usage", description: "Increases the amount of stamina used", amount: 5, unit: "%" },
            {
                name: "Poison damage",
                description: "Increases damage of player-dealt poison attacks.",
                amount: 40,
                unit: "%",
            },
        ],
    },
    {
        name: "Black Ox Harness",
        description: "An intimidating harness crafted out of a black ox beetle.",
        image: "images/body/blackOxHarness.png",
        sleekEffect: {
            name: "Quickcharge",
            description: "Charged attacks charge up 12% quicker.",
            amount: 12,
            unit: "%",
        },
        setEffect: {
            name: "Stunning charger",
            description: "Increases the stun of charged attacks.",
            amount: 25,
            unit: undefined,
        },
        effects: [
            { name: "Defense", description: "Reduces incoming damage", amount: 20, unit: undefined },
            { name: "Resistance", description: "Reduces incoming damage", amount: 10, unit: "%" },
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
        name: "Assassin's Chestplate",
        description:
            "Chest armor built for speed and striking. Crafted from mantis chunks and a mantis claw of a fallen assassin.",
        image: "images/body/assassinsChestplate.png",
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
            { name: "Defense", description: "Reduces incoming damage", amount: 20, unit: undefined },
            { name: "Resistance", description: "Reduces incoming damage", amount: 5, unit: "%" },
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
        name: "Fire Ant Chestplate",
        description: "A black and red spaulder and gauntlet combo crafted from fire ant parts.",
        image: "images/body/fireAntChestplate.png",
        sleekEffect: {
            name: "Acid damage",
            description: "Increases damage of player-dealt acid-based attacks.",
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
            { name: "Defense", description: "Reduces incoming damage", amount: 20, unit: undefined },
            { name: "Resistance", description: "Reduces incoming damage", amount: 10, unit: "%" },
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
        name: "Roly Poly Breastplate",
        description: "A glorious breastplate crafted from the impenetrable shell of a roly poly.",
        image: "images/body/rolyPolyBreastplate.png",
        sleekEffect: {
            name: "Block strength",
            description: "Increases the block gauge.",
            amount: 50,
            unit: undefined,
        },
        setEffect: {
            name: "Taunting Gaze",
            description: "Increases creatures favorability of the player over other sources of aggression.",
            amount: 50,
            unit: "%",
        },
        effects: [
            { name: "Defense", description: "Reduces incoming damage", amount: 20, unit: undefined },
            { name: "Resistance", description: "Reduces incoming damage", amount: 15, unit: "%" },
            { name: "Stamina usage", description: "Increases the amount of stamina used", amount: 25, unit: "%" },
            {
                name: "Block stun",
                description: "Increases enemy stun when blocking attacks.",
                amount: 3,
                unit: undefined,
            },
        ],
    },
    {
        name: "Antlion Poncho",
        description: "Chest armor made of antlion parts.",
        image: "images/body/antlionPoncho.png",
        sleekEffect: { name: "Thirst rate", description: "Lowers thirst drain.", amount: 5, unit: "%" },
        setEffect: {
            name: "Quickdraw",
            description:
                "Increases bow and crossbow reload speed by 40% for 3 seconds when attacking with ranged weapons. Reduces the duration of the 'Rough Reload' effect on crossbows to 1.5 seconds rather than 2.3. Reduces ranged damage by 90% for 3 seconds after a fast shot happens.",
            amount: 0,
            unit: undefined,
        },
        effects: [
            { name: "Defense", description: "Reduces incoming damage", amount: 20, unit: undefined },
            { name: "Resistance", description: "Reduces incoming damage", amount: 10, unit: "%" },
            { name: "Stamina usage", description: "Increases the amount of stamina used", amount: 15, unit: "%" },
            {
                name: "Sizzle protection",
                description: "Increases sizzle resistance.",
                amount: 75,
                unit: "%",
            },
        ],
    },
];
