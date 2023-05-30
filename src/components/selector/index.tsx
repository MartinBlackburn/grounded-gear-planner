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

// types
import { Slot as SlotType } from "../../types/slots";
import { ITrinket } from "../../types/trinket";
import { IMainHand } from "../../types/mainHand";

// styles
import "./index.css";
import { IOffhand } from "../../types/offhand";

const Selector = () => {
    const selectedSlot = useSelector((state: IState) => state.selectedSlot);
    const dispatch = useDispatch();

    if (!selectedSlot) {
        return null;
    }

    const items = getSlotItems(selectedSlot);

    const onClick = (item: IMainHand | ITrinket | IOffhand) => {
        if (selectedSlot === SlotType.TRINKET) {
            dispatch(Actions.selectTrinket(item as ITrinket));
        }

        if (selectedSlot === SlotType.MAINHAND) {
            dispatch(Actions.selectMainHand(item as IMainHand));
        }

        if (selectedSlot === SlotType.OFFHAND) {
            dispatch(Actions.selectOffhand(item as IOffhand));
        }

        dispatch(Actions.closeSelector());
    };

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
                            onClick(item);
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default Selector;
