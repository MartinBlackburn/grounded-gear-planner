// types
import { IOffhand } from "../types/offhand";

export const Offhand: IOffhand[] = [
    {
        name: "Weevil Shield",
        description: "Hopefully this shell will defend you better than the weevil it came from.",
        effects: [
            {
                name: "Block strength",
                description: "Increases block gauge",
                amount: 25,
                unit: undefined,
            },
        ],
    },
];
