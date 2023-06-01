// types
import { DamageType } from "../../types/damageType";
import { IMainHand } from "../../types/mainHand";

export const Hammers: IMainHand[] = [
    {
        name: "Black ox hammer",
        description: "A hammer so strong it can bust open almost all natural materials.",
        image: "images/mainHand/blackOxHammer.webp",
        damage: [36, 72, 108],
        stun: [6, 12, 24],
        effects: [],
        damageType: DamageType.BUSTING,
    },
    {
        name: "Insect hammer",
        description: "A capable hammer made of durable bug parts that are much stronger than the pebblet hammer.",
        image: "images/mainHand/insectHammer.webp",
        damage: [21, 42, 64],
        stun: [5, 11, 20],
        effects: [],
        damageType: DamageType.BUSTING,
    },
    {
        name: "Pebblet hammer",
        description: "A basic busting tool necessary to pound large things into smaller, more portable things.",
        image: "images/mainHand/pebbletHammer.webp",
        damage: [13, 26, 38],
        stun: [2, 8, 15],
        effects: [],
        damageType: DamageType.BUSTING,
    },
];
