// libraries
import React from "react";

// state
import { useSelector } from "react-redux";
import { IState } from "../../state/store";

// utils
import { combineEffects } from "../../utils/combineEffects";
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

    const combinedEffects = combineEffects({
        mainHand: selectedMainHand,
        offhand: selectedOffhand,
        trinket: selectedTrinket,
        head: selectedHead,
        body: selectedBody,
        legs: selectedLegs,
    });

    return (
        <div className="effects">
            {combinedEffects.map((effect, index) => {
                return (
                    <div className="effect" key={index}>
                        <div className="effect__name">
                            {effect.name}: {effect.amount !== 0 ? effect.amount : undefined}
                            {effect.unit}
                        </div>
                        <div>{effect.description}</div>
                    </div>
                );
            })}

            <DamageTable effects={combinedEffects} />
        </div>
    );
};

export default Effects;
