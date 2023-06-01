// types
import { DamageAugment } from "../../types/damageAugment";
import { DamageType } from "../../types/damageType";
import { IMainHand } from "../../types/mainHand";

export const Axes: IMainHand[] = [
    {
        name: "Sour battle-axe",
        damage: [45, 90, 135],
        stun: [12, 24, 36],
        description:
            "A shockingly deadly axe that's larger than necessary, packing the jolting power of Wormhole sour candies.",
        image: "images/mainHand/sourBattleAxe.webp",
        twoHanded: true,
        damageAugment: DamageAugment.SOUR,
        effects: [],
        damageType: DamageType.SLASHING,
    },
    {
        name: "Termite axe",
        damage: [29 / 59 / 88],
        stun: [5],
        description:
            "An axe made of the super sharp mandibles of a termite. Powerful enough to cut through almost all natural materials.",
        image: "images/mainHand/termiteAxe.webp",
        effects: [],
        damageType: DamageType.CHOPPING,
    },
    {
        name: "Insect axe",
        damage: [20 / 35 / 50],
        stun: [5],
        description: "Axe made up of sharp and strong bug parts. Sturdier and more durable than the pebblet axe.",
        image: "images/mainHand/insectAxe.webp",
        effects: [],
        damageType: DamageType.CHOPPING,
    },
    {
        name: "Pebblet axe",
        damage: [10 / 20 / 30],
        stun: [5],
        description: "A basic chopping tool strong enough to hack into plant material.",
        image: "images/mainHand/pebbletAxe.webp",
        effects: [],
        damageType: DamageType.CHOPPING,
    },
];
