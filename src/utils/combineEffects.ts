// types
import { IMainHand } from "../types/mainHand";
import { IOffhand } from "../types/offhand";
import { ITrinket } from "../types/trinket";
import { IArmour } from "../types/armour";
import { IEffect } from "../types/effect";

interface IItems {
    mainHand: IMainHand | null;
    offhand: IOffhand | null;
    trinket: ITrinket | null;
    head: IArmour | null;
    body: IArmour | null;
    legs: IArmour | null;
}

export const combineEffects = ({ mainHand, offhand, trinket, head, body, legs }: IItems): IEffect[] => {
    const effects: IEffect[] = [];

    const addEffect = (effectToAdd: IEffect) => {
        const existingEffect = effects.findIndex((effect) => {
            return effectToAdd.name === effect.name;
        });

        const clonedEffectToAdd = structuredClone(effectToAdd);

        if (existingEffect > -1) {
            const clonedOldEffect = structuredClone(effects[existingEffect]);
            const newAmount = clonedOldEffect.amount + clonedEffectToAdd.amount;

            effects[existingEffect].amount = newAmount;
        } else {
            effects.push(clonedEffectToAdd);
        }
    };

    mainHand?.effects.forEach((effect) => {
        addEffect(effect);
    });

    offhand?.effects.forEach((effect) => {
        addEffect(effect);
    });

    trinket?.effects.forEach((effect) => {
        addEffect(effect);
    });

    head?.effects.forEach((effect) => {
        addEffect(effect);
    });

    body?.effects.forEach((effect) => {
        addEffect(effect);
    });

    legs?.effects.forEach((effect) => {
        addEffect(effect);
    });

    return effects;
};
