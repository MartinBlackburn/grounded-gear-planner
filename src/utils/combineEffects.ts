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

export interface IEffectsCombined {
    effects: IEffect[];
    sleekEffects: IEffect[];
    setEffect?: IEffect;
}

export const combineEffects = ({ mainHand, offhand, trinket, head, body, legs }: IItems): IEffectsCombined => {
    const combinedEffects: IEffectsCombined = {
        effects: [],
        sleekEffects: [],
        setEffect: undefined,
    };

    const addSleekEffect = (effectToAdd: IEffect) => {
        const existingEffect = combinedEffects.sleekEffects.findIndex((effect) => {
            return effectToAdd.name === effect.name;
        });

        const clonedEffectToAdd = structuredClone(effectToAdd);

        clonedEffectToAdd.isSleek = true;

        if (existingEffect > -1) {
            const clonedOldEffect = structuredClone(combinedEffects.sleekEffects[existingEffect]);

            const newAmount = clonedOldEffect.amount + clonedEffectToAdd.amount;

            combinedEffects.sleekEffects[existingEffect].amount = newAmount;
        } else {
            combinedEffects.sleekEffects.push(clonedEffectToAdd);
        }
    };

    const addEffect = (effectToAdd: IEffect) => {
        const existingEffect = combinedEffects.effects.findIndex((effect) => {
            return effectToAdd.name === effect.name;
        });

        const clonedEffectToAdd = structuredClone(effectToAdd);

        if (existingEffect > -1) {
            let clonedOldEffect = structuredClone(combinedEffects.effects[existingEffect]);

            const newAmount = clonedOldEffect.amount + clonedEffectToAdd.amount;

            combinedEffects.effects[existingEffect].amount = newAmount;
        } else {
            combinedEffects.effects.push(clonedEffectToAdd);
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

    // add sleek effect
    if (head) {
        addSleekEffect(head.sleekEffect);
    }
    if (body) {
        addSleekEffect(body.sleekEffect);
    }
    if (legs) {
        addSleekEffect(legs.sleekEffect);
    }

    // add set bonus
    if (head && head.setEffect.name === body?.setEffect.name && head.setEffect.name === legs?.setEffect.name) {
        combinedEffects.setEffect = structuredClone(head.setEffect);
    }

    return combinedEffects;
};
