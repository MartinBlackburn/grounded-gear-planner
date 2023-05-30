// types
import { DamageType } from "../types/damageType";
import { IMainHand } from "../types/mainHand";

export const MainHand: IMainHand[] = [
    {
        name: "Pebblet hammer",
        description: "A basic busting tool necessary to pound large things into smaller, more portable things.",
        damageType: DamageType.BUSTING,
        damage: [13, 26, 38],
        stun: [2, 8, 15],
        effects: [],
    },
];
