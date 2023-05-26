// libraries
import React from "react";

// state
import { useSelector, useDispatch } from "react-redux";
import { Actions } from "../../state/actions";
import { IState } from "../../state/store";

// utils
import { getSlotItems } from "../../utils/getSlotItems";

// components
import Slot from "../slot";

// styles
import "./index.css";

const Selector = () => {
    const selectedSlot = useSelector((state: IState) => state.selectedSlot);
    const dispatch = useDispatch();

    if (!selectedSlot) {
        return null;
    }

    const items = getSlotItems(selectedSlot);

    return (
        <div className="selector">
            <div className="selector__inner">
                <div className="selector__close" onClick={() => dispatch(Actions.closeSelector())}>
                    x
                </div>

                {items.map((item, index) => (
                    <Slot
                        key={index}
                        type={selectedSlot}
                        item={item}
                        onClick={() => {
                            dispatch(Actions.closeSelector());
                            dispatch(Actions.selectTrinket(item));
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default Selector;
