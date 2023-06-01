// types
import { DamageAugment } from "./damageAugment";
import { DamageType } from "./damageType";
import { IEffect } from "./effect";

export interface IMainHand {
    name: string;
    description: string;
    image: string;
    twoHanded?: boolean;
    damageAugment?: DamageAugment;
    damageType: DamageType;
    damage: number[];
    stun: number[];
    effects: IEffect[];
}
