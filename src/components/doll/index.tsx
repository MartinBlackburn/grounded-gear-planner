// libraries
import React from "react";

// types
import { Slot as SlotType } from "../../types/slots";

// components
import Slot from "../slot";

// state
import { useDispatch } from "react-redux";

// styles
import "./index.css";
import { Actions } from "../../state/actions";

const Doll = () => {
    const dispatch = useDispatch();

    return (
        <div className="doll">
            <div className="doll__mainHand">
                <Slot type={SlotType.MAINHAND} onClick={() => dispatch(Actions.openSelector(SlotType.MAINHAND))} />
            </div>

            <div className="doll__offHand">
                <Slot type={SlotType.OFFHAND} onClick={() => dispatch(Actions.openSelector(SlotType.OFFHAND))} />
            </div>

            <div className="doll__trinket">
                <Slot type={SlotType.TRINKET} onClick={() => dispatch(Actions.openSelector(SlotType.TRINKET))} />
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
