// types
import { IMainHand } from "../../types/mainHand";

// tools
import { Axes } from "./axes";
import { Bows } from "./bows";
import { Crossbows } from "./crossbows";
import { Daggers } from "./daggers";
import { Hammers } from "./hammers";
import { Misc } from "./misc";
import { Scythes } from "./scythes";
import { Shovels } from "./shovels";
import { Spears } from "./spears";
import { Staffs } from "./staffs";
import { Swords } from "./swords";

export const MainHand: IMainHand[] = [
    ...Axes,
    ...Bows,
    ...Crossbows,
    ...Daggers,
    ...Hammers,
    ...Misc,
    ...Scythes,
    ...Shovels,
    ...Spears,
    ...Staffs,
    ...Swords,
];
