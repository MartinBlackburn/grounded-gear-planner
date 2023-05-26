// types
import { ITrinket } from "../types/trinket";

export const Trinkets: ITrinket[] = [
    {
        name: "Left elf charm",
        description: "A pebble village gossip elf reaches for something to the right. It feels important.",
        effects: [
            {
                name: "Invincible shielding",
                description: "Blocking attacks with a shield has a 10% chance to repair its durability by 25.",
                amount: 10,
                unit: "%",
            },
        ],
    },
    {
        name: "Right elf charm",
        description: "A pebble village gossip elf reaches for something to the left. It feels important.",
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
        effects: [
            {
                name: "Steal item",
                description: "Melee attacks have a 10% chance to steal 1 of any item from a Creatures loot table",
                amount: 10,
                unit: "%",
            },
        ],
    },
];
