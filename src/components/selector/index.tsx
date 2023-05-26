// libraries
import React from "react";

// state
import { useSelector } from "react-redux";
import { IState } from "../../state/store";

// styles
import "./index.css";

const Selector = () => {
    const selectedSlot = useSelector((state: IState) => state.selectedSlot);

    if (!selectedSlot) {
        return null;
    }

    return (
        <div className="selector">
            <div>{selectedSlot}</div>
        </div>
    );
};

export default Selector;
