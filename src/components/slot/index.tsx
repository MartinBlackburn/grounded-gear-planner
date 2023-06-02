// libraries
import React from "react";

// types
import { Slot as SlotType } from "../../types/slots";
import { IArmour } from "../../types/armour";
import { IMainHand } from "../../types/mainHand";
import { ITrinket } from "../../types/trinket";

// styles
import "./index.css";

interface IProps {
    type: SlotType;
    onClick: () => void;
    item?: ITrinket | IMainHand | IArmour | null;
}

const Slot = (props: IProps) => {
    return (
        <div className="slot" onClick={() => props.onClick()}>
            <div className="slot__name">{props.item?.name || props.type}</div>
            <div className="slot__image">
                {props.item?.image ? <img alt={props.item?.name} src={props.item.image} /> : null}
            </div>
        </div>
    );
};

export default Slot;
