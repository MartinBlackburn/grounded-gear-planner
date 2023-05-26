// libraries
import React from "react";

// types
import { Slot as SlotType } from "../../types/slots";

// components
import Slot from "../slot";

// styles
import "./index.css";

const Doll = () => {
    return (
        <div className="doll">
            <div className="doll__mainHand">
                <Slot type={SlotType.MAINHAND} />
            </div>

            <div className="doll__offHand">
                <Slot type={SlotType.OFFHAND} />
            </div>

            <div className="doll__trinket">
                <Slot type={SlotType.TRINKET} />
            </div>

            <div className="doll__head">
                <Slot type={SlotType.HEAD} />
            </div>

            <div className="doll__body">
                <Slot type={SlotType.BODY} />
            </div>

            <div className="doll__legs">
                <Slot type={SlotType.LEGS} />
            </div>
        </div>
    );
};

export default Doll;
