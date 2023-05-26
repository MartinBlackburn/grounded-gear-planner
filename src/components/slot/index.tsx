// libraries
import React from "react";

// types
import { Slot as SlotType } from "../../types/slots";

// state
import { useDispatch } from "react-redux";

// styles
import "./index.css";
import { Actions } from "../../state/actions";

interface IProps {
    type: SlotType;
}

const Slot = (props: IProps) => {
    const dispatch = useDispatch();

    return (
        <div className="slot" onClick={() => dispatch(Actions.openSelector(props.type))}>
            <div className="slot__name">{props.type}</div>
            <div className="slot__image">Image</div>
        </div>
    );
};

export default Slot;
