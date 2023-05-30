// types
import { DamageType } from "./damageType";
import { IEffect } from "./effect";

export interface IMainHand {
    name: string;
    description: string;
    damageType: DamageType;
    damage: number[];
    stun: number[];
    effects: IEffect[];
}
