// types
import { IEffect } from "./effect";

export interface IMutation {
    name: string;
    description: string;
    image: string;
    effects: IEffect[];
}
