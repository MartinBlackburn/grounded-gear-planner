// libraries
import React from "react";

// state
import { useSelector } from "react-redux";
import { IState } from "../../state/store";
import { IEffect } from "../../types/effect";

// utils
import { combineEffects } from "../../utils/combineEffects";
import { roundToTwoDecimalPlaces } from "../../utils/roundNumber";
import DamageTable from "../damageTable";

// styles
import "./index.css";

const Effects = () => {
    const selectedMainHand = useSelector((state: IState) => state.mainHand);
    const selectedOffhand = useSelector((state: IState) => state.offhand);
    const selectedTrinket = useSelector((state: IState) => state.trinket);

    const selectedHead = useSelector((state: IState) => state.head);
    const selectedBody = useSelector((state: IState) => state.body);
    const selectedLegs = useSelector((state: IState) => state.legs);

    const selectedMutations = useSelector((state: IState) => state.mutations);

    const combinedEffects = combineEffects({
        mainHand: selectedMainHand,
        offhand: selectedOffhand,
        trinket: selectedTrinket,
        head: selectedHead,
        body: selectedBody,
        legs: selectedLegs,
        mutations: selectedMutations,
    });

    return (
        <div className="effects">
            {combinedEffects.effects.map((effect, index) => {
                return (
                    <div className="effect" key={index}>
                        <div className="effect__name">
                            {effect.name}: {effect.amount !== 0 ? roundToTwoDecimalPlaces(effect.amount) : undefined}
                            {effect.unit}
                        </div>
                        <div>{effect.description}</div>
                    </div>
                );
            })}

            {combinedEffects.sleekEffects.map((effect, index) => {
                return (
                    <React.Fragment key={`sleek-${index}`}>
                        {index === 0 ? <h2>Sleek bonus:</h2> : ""}

                        <div className="effect effect--isSleek">
                            <div className="effect__name">
                                {effect.name}:{" "}
                                {effect.amount !== 0 ? roundToTwoDecimalPlaces(effect.amount) : undefined}
                                {effect.unit}
                            </div>
                            <div>{effect.description}</div>
                        </div>
                    </React.Fragment>
                );
            })}

            {combinedEffects.setEffect && (
                <React.Fragment>
                    <h2>Set bonus:</h2>

                    <div className="effect effect--isSet">
                        <div className="effect__name">
                            {combinedEffects.setEffect.name}:{" "}
                            {combinedEffects.setEffect.amount !== 0
                                ? roundToTwoDecimalPlaces(combinedEffects.setEffect.amount)
                                : undefined}
                            {combinedEffects.setEffect.unit}
                        </div>
                        <div>{combinedEffects.setEffect.description}</div>
                    </div>
                </React.Fragment>
            )}

            {combinedEffects.mutationEffects.map((effect, index) => {
                return (
                    <React.Fragment key={`mutation-${index}`}>
                        {index === 0 ? <h2>Mutation bonus:</h2> : ""}

                        <div className="effect effect--mutations">
                            <div className="effect__name">
                                {effect.name}:{" "}
                                {effect.amount !== 0 ? roundToTwoDecimalPlaces(effect.amount) : undefined}
                                {effect.unit}
                            </div>
                            <div>{effect.description}</div>
                        </div>
                    </React.Fragment>
                );
            })}

            <DamageTable combinedEffects={combinedEffects} />
        </div>
    );
};

export default Effects;
