// types
import { DamageType } from "../../types/damageType";
import { IMainHand } from "../../types/mainHand";

export const Crossbows: IMainHand[] = [
    {
        name: "Black Ox Crossbow",
        description: "A crossbow made from impossibly strong black ox parts.",
        damageType: DamageType.STABBING,
        damage: [85],
        stun: [5],
        twoHanded: true,
        image: "images/mainHand/blackOxCrossbow.webp",
        effects: [
            {
                name: "Rough reload",
                description:
                    "Arrows fired within 2.3 seconds of a previous shot deal 80% less damage and cost 30% more stamina. Only possible via block cancelling after a shot.",
                amount: 0,
                unit: undefined,
            },
        ],
    },
    {
        name: "Crow Crossbow",
        description: "A crossbow made out of crow feathers.",
        damageType: DamageType.STABBING,
        damage: [65],
        stun: [5],
        twoHanded: true,
        image: "images/mainHand/crowCrossbow.webp",
        effects: [
            {
                name: "Rough reload",
                description:
                    "Arrows fired within 2.3 seconds of a previous shot deal 80% less damage and cost 30% more stamina. Only possible via block cancelling after a shot.",
                amount: 0,
                unit: undefined,
            },
        ],
    },
];
