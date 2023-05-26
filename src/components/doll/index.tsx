// libraries
import React from "react";

// components
import Slot from "../slot";

// styles
import "./index.css";

const Doll = () => {
    return (
        <div className="doll">
            <div className="doll__mainHand">
                <Slot />
            </div>

            <div className="doll__offHand">
                <Slot />
            </div>

            <div className="doll__trinket">
                <Slot />
            </div>

            <div className="doll__head">
                <Slot />
            </div>

            <div className="doll__body">
                <Slot />
            </div>

            <div className="doll__legs">
                <Slot />
            </div>
        </div>
    );
};

export default Doll;
