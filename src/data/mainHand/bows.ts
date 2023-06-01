// types
import { DamageType } from "../../types/damageType";
import { IMainHand } from "../../types/mainHand";

export const Bows: IMainHand[] = [
    {
        name: "Bard's Bow",
        description: "To both entertain and defend yourself gracefully in the queen's court.",
        image: "images/mainHand/bardsBow.webp",
        damageType: DamageType.STABBING,
        damage: [60],
        stun: [0],
        twoHanded: true,
        effects: [
            {
                name: "Minor threat",
                description: "Decreases creatures favorability of the player over other sources of aggression by 10%.",
                amount: 0,
                unit: undefined,
            },
        ],
    },
    {
        name: "Insect Bow",
        description: "A high quality bow made of sturdy chunks of various insects.",
        image: "images/mainHand/insectBow.webp",
        damageType: DamageType.STABBING,
        damage: [40],
        stun: [0],
        twoHanded: true,
        effects: [],
    },
    {
        name: "Sprig Bow",
        description: "Perform attacks from a long distance requires arrows to be useful.",
        image: "images/mainHand/sprigBow.webp",
        damageType: DamageType.STABBING,
        damage: [20],
        stun: [0],
        twoHanded: true,
        effects: [],
    },
];
