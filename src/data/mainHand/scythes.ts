// types
import { DamageType } from "../../types/damageType";
import { IMainHand } from "../../types/mainHand";

export const Scythes: IMainHand[] = [
    {
        name: "Scythe of blossoms",
        description: "A deadly, nimble scythe crafted from mantis chunks and a mantis claw of a fallen assassin.",
        image: "images/mainHand/scytheOfBlossoms.webp",
        damage: [25, 70, 105],
        stun: [2],
        twoHanded: true,
        damageType: DamageType.SLASHING,
        effects: [
            {
                name: "Yoked blows",
                description: "Increases critical hit damage.",
                amount: 100,
                unit: "%",
            },
        ],
    },
];
