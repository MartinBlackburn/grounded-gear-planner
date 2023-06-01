// types
import { IMainHand } from "../../types/mainHand";

// tools
import { Axes } from "./axes";
import { Daggers } from "./daggers";
import { Hammers } from "./hammers";
import { Misc } from "./misc";
import { Scythes } from "./scythes";
import { Shovels } from "./shovels";
import { Spears } from "./spears";
import { Swords } from "./swords";

export const MainHand: IMainHand[] = [
    ...Axes,
    ...Daggers,
    ...Hammers,
    ...Misc,
    ...Scythes,
    ...Shovels,
    ...Spears,
    ...Swords,
];
