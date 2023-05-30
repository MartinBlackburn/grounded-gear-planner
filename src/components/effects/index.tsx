// libraries
import React from "react";

// state
import { useSelector } from "react-redux";
import { IState } from "../../state/store";

// styles
import "./index.css";

const Effects = () => {
    const selectedMainHand = useSelector((state: IState) => state.mainHand);
    const selectedOffhand = useSelector((state: IState) => state.offhand);
    const selectedTrinket = useSelector((state: IState) => state.trinket);

    const selectedHead = useSelector((state: IState) => state.head);
    const selectedBody = useSelector((state: IState) => state.body);
    const selectedLegs = useSelector((state: IState) => state.legs);

    return (
        <div className="effects">
            {selectedTrinket?.effects.map((effect, index) => {
                return (
                    <div className="effect" key={index}>
                        <div className="effect__name">{effect.name}</div>
                        <div>{effect.description}</div>
                    </div>
                );
            })}

            {selectedOffhand?.effects.map((effect, index) => {
                return (
                    <div className="effect" key={index}>
                        <div className="effect__name">{effect.name}</div>
                        <div>{effect.description}</div>
                    </div>
                );
            })}

            {selectedMainHand?.effects.map((effect, index) => {
                return (
                    <div className="effect" key={index}>
                        <div className="effect__name">{effect.name}</div>
                        <div>{effect.description}</div>
                    </div>
                );
            })}

            {selectedHead?.effects.map((effect, index) => {
                return (
                    <div className="effect" key={index}>
                        <div className="effect__name">{effect.name}</div>
                        <div>{effect.description}</div>
                    </div>
                );
            })}

            {selectedBody?.effects.map((effect, index) => {
                return (
                    <div className="effect" key={index}>
                        <div className="effect__name">{effect.name}</div>
                        <div>{effect.description}</div>
                    </div>
                );
            })}

            {selectedLegs?.effects.map((effect, index) => {
                return (
                    <div className="effect" key={index}>
                        <div className="effect__name">{effect.name}</div>
                        <div>{effect.description}</div>
                    </div>
                );
            })}
        </div>
    );
};

export default Effects;
