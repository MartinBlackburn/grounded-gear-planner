// types
import { IEffect } from "./effect";

export interface IArmour {
    name: string;
    description: string;
    image: string;
    sleekEffect: IEffect;
    setEffect: IEffect;
    effects: IEffect[];
}
