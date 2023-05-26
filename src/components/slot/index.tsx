// libraries
import React from "react";

// types
import { Slot as SlotType } from "../../types/slots";
import { ITrinket } from "../../types/trinket";

// styles
import "./index.css";

interface IProps {
    type: SlotType;
    onClick: () => void;
    item?: ITrinket;
}

const Slot = (props: IProps) => {
    return (
        <div className="slot" onClick={() => props.onClick()}>
            <div className="slot__name">{props.item?.name || props.type}</div>
            <div className="slot__image">Image</div>
        </div>
    );
};

export default Slot;
