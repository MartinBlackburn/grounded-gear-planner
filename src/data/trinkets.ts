// types
import { ITrinket } from "../types/trinket";

export const Trinkets: ITrinket[] = [
    {
        name: "Sarah's charm",
        description:
            "A reunited Pebble Village gossip elf hug charm. A shrunken keepsake of Sarah Tully. A powerful embrace combines the energy of both pieces in one.",
        image: "images/trinkets/sarahsCharm.webp",
        effects: [
            {
                name: "Invincible shielding",
                description: "Blocking attacks with a shield has a 10% chance to repair its durability by 25.",
                amount: 0,
                unit: undefined,
            },
            {
                name: "Invincible attack",
                description: "Melee attacks have a chance to repair the currently equipped weapon.",
                amount: 0,
                unit: undefined,
            },
        ],
    },
    {
        name: "Broodmother trinket",
        description: "Rare memento from the broodmother.",
        image: "images/trinkets/broodmotherTrinket.webp",
        effects: [
            {
                name: "Summon poison",
                description:
                    "Summons from Mutations can inflict Poison, dealing 25 damage every 5 seconds for 30 seconds.",
                amount: 0,
                unit: undefined,
            },
        ],
    },
    {
        name: "Infected broodmother trinket",
        description: "Extremely rare memento from the Infected Broodmother.",
        image: "images/trinkets/infectedBroodmotherTrinket.webp",
        effects: [
            {
                name: "Blastwave",
                description:
                    "All player summons have a 25% chance to cause an explosion on hits, dealing 70 explosive damage. Deals damage to everything nearby (players included) apart from the summon that caused it.",
                amount: 0,
                unit: undefined,
            },
        ],
    },
    {
        name: "Mantis trinket",
        description: "A rare and powerful memento from the mysterious mantis.",
        image: "images/trinkets/mantisTrinket.webp",
        effects: [
            {
                name: "Crit energise",
                description: "Performing a crit on a creature gives 50 stamina instantly.",
                amount: 0,
                unit: undefined,
            },
        ],
    },
    {
        name: "Wasp queen trinket",
        description: "A rare and powerful memento of the elegant Wasp Queen.",
        image: "images/trinkets/waspQueenTrinket.webp",
        effects: [
            {
                name: "Arrow refund",
                description: "Bows and crosssbows have a 25% chance to not consume ammo.",
                amount: 0,
                unit: undefined,
            },
        ],
    },
    {
        name: "Volatile fang",
        description: "The fang of an infected wolf spider that's ready to explode on command.",
        image: "images/trinkets/volatileFang.webp",
        effects: [
            {
                name: "Explosive perfect block",
                description:
                    "Perfect blocks have a 30% chance to make a fungal explosion, dealing 120 explosive damage.",
                amount: 0,
                unit: undefined,
            },
        ],
    },
    {
        name: "Insulating larva spike",
        description: "A larva spike that seems to absorb heat.",
        image: "images/trinkets/insulatingLarvaSpike.webp",
        effects: [
            {
                name: "Sizzle protection",
                description: "Increases sizzle resistance by 50%.",
                amount: 0,
                unit: undefined,
            },
        ],
    },
    {
        name: "Left elf charm",
        description: "A pebble village gossip elf reaches for something to the right. It feels important.",
        image: "images/trinkets/leftElfCharm.webp",
        effects: [
            {
                name: "Invincible shielding",
                description: "Blocking attacks with a shield has a 10% chance to repair its durability by 25.",
                amount: 0,
                unit: undefined,
            },
        ],
    },
    {
        name: "Right elf charm",
        description: "A pebble village gossip elf reaches for something to the left. It feels important.",
        image: "images/trinkets/rightElfCharm.webp",
        effects: [
            {
                name: "Invincible attack",
                description: "Melee attacks have a chance to repair the currently equipped weapon.",
                amount: 0,
                unit: undefined,
            },
        ],
    },
    {
        name: "Speed droplet",
        description: "A mystical droplet that gives you the energy to run faster and longer.",
        image: "images/trinkets/speedDroplet.webp",
        effects: [
            {
                name: "Sprint distance",
                description: "Reduces the stamina usage of sprinting by 10%.",
                amount: 10,
                unit: "%",
            },
            {
                name: "The quickness",
                description: "Increases movement speed by 10%. This effect pauses while in combat.",
                amount: 10,
                unit: "%",
            },
        ],
    },
    {
        name: "Sticky fingers",
        description: "A sticky pair of gloves that lets you steal pieces of insects as you attack them.",
        image: "images/trinkets/stickyFingers.webp",
        effects: [
            {
                name: "Steal item",
                description: "Melee attacks have a 10% chance to steal 1 of any item from a Creatures loot table",
                amount: 10,
                unit: "%",
            },
        ],
    },
    {
        name: "Power droplet",
        description: "Tap into a hidden power, unleashing unarmed fury on your foes.",
        image: "images/trinkets/powerDroplet.webp",
        effects: [
            {
                name: "Fury",
                description:
                    "Unarmed attacks have a 25% chance to deal a second hit. These 2nd hits that deals 6 damage and are able to inherit effects from Mutations and Armor intended for different damage types. Attacks also give 10 seconds of immunity to the 'Rough Reload' effect of crossbows, as some 2nd hits may deal crossbow-type damage.",
                amount: 0,
                unit: undefined,
            },
        ],
    },
    {
        name: "Rotten berry charm",
        description: "A piece of a grotesque berry that seems to bring out the innate power of rotten weapons.",
        image: "images/trinkets/rottenBerryCharm.webp",
        effects: [
            {
                name: "Rotten deluge",
                description:
                    "Rotten Equipment has a 10% chance to create a poison cloud when attacking enemies that inflicts Poison, dealing 25 damage every 5 seconds for 15 seconds. Does not stack with Parry Poison.",
                amount: 0,
                unit: undefined,
            },
        ],
    },
    {
        name: "Shield solidifier",
        description: "An impossibly strong layer of fiber that can reinforce a shield to be nearly unbreakable.",
        image: "images/trinkets/shieldsolidifier.webp",
        effects: [
            {
                name: "Block strength",
                description: "Increases block gauge",
                amount: 200,
                unit: undefined,
            },
        ],
    },
    {
        name: "Thor's pendant",
        description:
            "A shining helm charm from the Minotaurs and Myrmidons logo on a simple chain. A shrunken keepsake from Thor Tully that inspires perseverance.",
        image: "images/trinkets/thorsPendant.webp",
        effects: [
            {
                name: "Pendant",
                description:
                    "A 10% increase to most player stats, including: \n* Health Regeneration (+1HP /10 sec) \n* Stamina Regeneration (+5 /10 sec) \n* Critical Hit Chance (+1%) \n* Critical Hit Damage (+10%) \n* Healing Received (+10%) \n* Sizzle Effect Resistance (+10%) \n* Attack Stamina Cost (-10%) \n* Stamina Regeneration Delay (-10%) \n* Hunger Drain Rate (-10%) \n* Thirst Drain Rate (-10%)",
                amount: 0,
                unit: undefined,
            },
        ],
    },
    {
        name: "Wittle widowling",
        description: "An unusual piece of a black widow that seems to call for its children.",
        image: "images/trinkets/wittleWidowling.webp",
        effects: [
            {
                name: "Widowling wrangler",
                description: "Attacks have a 10% chance to spawn friendly Black Widowlings to aid in battle.",
                amount: 0,
                unit: undefined,
            },
        ],
    },
    {
        name: "Biomedical Badge",
        description: "A badge from an Ominent scientist, granting access to their specific department of work.",
        image: "images/trinkets/badge.webp",
        effects: [
            {
                name: "Trickle regen",
                description: "Regenerates 1 health every 10 seconds.",
                amount: 0,
                unit: undefined,
            },
            {
                name: "Food conversion",
                description: "Drains the players hunger by 2 every 10 seconds.",
                amount: 0,
                unit: undefined,
            },
        ],
    },
    {
        name: "Compliance Badge",
        description: "A badge from an Ominent scientist, granting access to their specific department of work.",
        image: "images/trinkets/badge.webp",
        effects: [
            {
                name: "Parry heal",
                description: "Perfect blocking attacks heal the player for 8 points of their health.",
                amount: 0,
                unit: undefined,
            },
            {
                name: "Resistance",
                description: "Reduces incoming damage",
                amount: -35,
                unit: "%",
            },
        ],
    },
    {
        name: "Defense Badge",
        description: "A badge from an Ominent scientist, granting access to their specific department of work.",
        image: "images/trinkets/badge.webp",
        effects: [
            {
                name: "Resistance",
                description: "Reduces incoming damage",
                amount: 25,
                unit: "%",
            },
            {
                name: "Attack damage",
                description: "Reduces damage delt by 15%.",
                amount: -15,
                unit: "%",
            },
        ],
    },
    {
        name: "Entomologist Badge",
        description: "A badge from an Ominent scientist, granting access to their specific department of work.",
        image: "images/trinkets/badge.webp",
        effects: [
            {
                name: "Imperfect block",
                description: "Removes the players ability to perfect block.",
                amount: 0,
                unit: undefined,
            },
            {
                name: "Attack damage",
                description: "Increases damage output by 10% on all sources.",
                amount: 10,
                unit: "%",
            },
        ],
    },
    {
        name: "Health And Safety Badge",
        description: "A badge from an Ominent scientist, granting access to their specific department of work.",
        image: "images/trinkets/badge.webp",
        effects: [
            {
                name: "Life steal",
                description: "Converts 4% of the exact damage dealt to enemies into health for the player.",
                amount: 4,
                unit: "%",
            },
            {
                name: "Fresh wound",
                description: "Deals 5 points of damage every 3 seconds.",
                amount: 0,
                unit: undefined,
            },
        ],
    },
    {
        name: "Intern Badge",
        description: "A badge from an Ominent scientist, granting access to their specific department of work.",
        image: "images/trinkets/badge.webp",
        effects: [
            {
                name: "Hauling strength",
                description: "Increases the amount of Grass Planks and Weed Stems that can be carried at once by 10.",
                amount: 10,
                unit: undefined,
            },
            {
                name: "Movement speed",
                description: "Reduces movement speed by 25%.",
                amount: 25,
                unit: "%",
            },
        ],
    },
    {
        name: "Toxicology Badge",
        description: "A badge from an Ominent scientist, granting access to their specific department of work.",
        image: "images/trinkets/badge.webp",
        effects: [
            {
                name: "Dust guard",
                description:
                    "Provides immunity to the slowness and attack speed reduction effects of dust clouds from Termite Soldier, Moth, and Dust Mite attacks.",
                amount: 0,
                unit: undefined,
            },
            {
                name: "Gas resist",
                description: "Reduces damage taken from gas by 90%.",
                amount: 90,
                unit: "%",
            },
            {
                name: "Poison resist",
                description: "Poison does 100% more damage.",
                amount: -100,
                unit: "%",
            },
        ],
    },
    {
        name: "Everlasting hogstopper",
        description: "A source of infinite food. A nibble now and then satiates your hunger in just the right amounts.",
        image: "images/trinkets/everlastingHogstopper.webp",
        effects: [
            {
                name: "Food generation",
                description: "Passively fills the players food bar by 10 every minute.",
                amount: 0,
                unit: undefined,
            },
        ],
    },
    {
        name: "Wondrous wormhole",
        description: "A condensed nugget of elemental force. Simply holding it fills you with power.",
        image: "images/trinkets/wondrousWormhole.webp",
        effects: [
            {
                name: "Sour attack",
                description: "Attacks inflict 15 extra Sour Damage. Doesn't apply to bows.",
                amount: 0,
                unit: undefined,
            },
        ],
    },
    {
        name: "Fancy fletching",
        description: "A mysterious feather that makes shooting arrows significantly less exhausting",
        image: "images/trinkets/fancyFletching.webp",
        effects: [
            {
                name: "Effortless arrows",
                description: "Bow or crossbow attacks give a 5 second buff that reduces exhaustion recovery by 50%.",
                amount: 0,
                unit: undefined,
            },
        ],
    },
    {
        name: "Fluffy dandelion tuft",
        description:
            "A fluffy puff of dandelion of exceptionally high quality. Could be used to drift down from even greater heights.",
        image: "images/trinkets/fluffyDandelionTuft.webp",
        effects: [],
    },
    {
        name: "Fungal charm",
        description: "A pretty growth of fungus that seems to want to protect you from harm.",
        image: "images/trinkets/fungalCharm.webp",
        effects: [
            {
                name: "Explosive Resist",
                description: "Increases resistance to explosive damage by 75%.",
                amount: 75,
                unit: "%",
            },
        ],
    },
    {
        name: "Hot cha charm",
        description: "A condensed nugget of elemental force. Simply holding it fills you with power.",
        image: "images/trinkets/hotChaCharm.webp",
        effects: [
            {
                name: "Spicy attack",
                description: "Attacks inflict 15 extra Spicy Damage. Doesn't apply to bows.",
                amount: 0,
                unit: undefined,
            },
        ],
    },
    {
        name: "Shiny salt crystal",
        description: "A condensed nugget of elemental force. Simply holding it fills you with power.",
        image: "images/trinkets/shinySaltCrystal.webp",
        effects: [
            {
                name: "Salty Attack",
                description: "Attacks inflict 15 extra Salty Damage. Doesn't apply to bows.",
                amount: 0,
                unit: undefined,
            },
        ],
    },
    {
        name: "Suspicious ice cap",
        description: "A condensed nugget of elemental force. Simply holding it fills you with power.",
        image: "images/trinkets/suspiciousIceCap.webp",
        effects: [
            {
                name: "Fresh attack",
                description: "Attacks inflict 15 extra Fresh Damage. Doesn't apply to bows.",
                amount: 0,
                unit: undefined,
            },
        ],
    },
    {
        name: "Dandelion tuft",
        description: "A fluffy puff of dandelion stuff. Could be used to drift down from great heights.",
        image: "images/trinkets/dandelionTuft.webp",
        effects: [],
    },
];
