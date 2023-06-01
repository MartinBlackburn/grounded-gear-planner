// types
import { DamageType } from "../../types/damageType";
import { IMainHand } from "../../types/mainHand";

export const Shovels: IMainHand[] = [
    {
        name: "Black ant shovel",
        description: "A dependable shovel that can dig and harvest all sorts of goodies.",
        image: "images/mainHand/blackAntShovel.webp",
        damage: [20],
        stun: [15],
        twoHanded: true,
        effects: [],
        damageType: DamageType.DIGGING,
    },
    {
        name: "Acorn shovel",
        description: "Used to dig up grubs.",
        image: "images/mainHand/acornShovel.webp",
        damage: [10],
        stun: [15],
        twoHanded: true,
        effects: [],
        damageType: DamageType.DIGGING,
    },
];
