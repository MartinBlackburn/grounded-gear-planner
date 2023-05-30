// libraries
import React from "react";

// types
import { Slot as SlotType } from "../../types/slots";

// components
import Slot from "../slot";

// state
import { useDispatch, useSelector } from "react-redux";

// styles
import "./index.css";
import { Actions } from "../../state/actions";
import { IState } from "../../state/store";

const Doll = () => {
    const dispatch = useDispatch();

    const selectedMainHand = useSelector((state: IState) => state.mainHand);
    const selectedOffhand = useSelector((state: IState) => state.offhand);
    const selectedTrinket = useSelector((state: IState) => state.trinket);

    return (
        <div className="doll">
            <div className="doll__mainHand">
                <Slot
                    type={SlotType.MAINHAND}
                    item={selectedMainHand}
                    onClick={() => dispatch(Actions.openSelector(SlotType.MAINHAND))}
                />
            </div>

            <div className="doll__offHand">
                <Slot
                    type={SlotType.OFFHAND}
                    item={selectedOffhand}
                    onClick={() => dispatch(Actions.openSelector(SlotType.OFFHAND))}
                />
            </div>

            <div className="doll__trinket">
                <Slot
                    type={SlotType.TRINKET}
                    item={selectedTrinket}
                    onClick={() => dispatch(Actions.openSelector(SlotType.TRINKET))}
                />
            </div>

            <div className="doll__head">
                <Slot type={SlotType.HEAD} onClick={() => dispatch(Actions.openSelector(SlotType.HEAD))} />
            </div>

            <div className="doll__body">
                <Slot type={SlotType.BODY} onClick={() => dispatch(Actions.openSelector(SlotType.BODY))} />
            </div>

            <div className="doll__legs">
                <Slot type={SlotType.LEGS} onClick={() => dispatch(Actions.openSelector(SlotType.LEGS))} />
            </div>
        </div>
    );
};

export default Doll;
