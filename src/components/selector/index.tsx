// libraries
import React from "react";

// state
import { useSelector, useDispatch } from "react-redux";
import { Actions } from "../../state/actions";
import { IState } from "../../state/store";

// utils
import { getSlotItems } from "../../utils/getSlotItems";

// types
import { Slot as SlotType } from "../../types/slots";
import { ITrinket } from "../../types/trinket";
import { IMainHand } from "../../types/mainHand";
import { IOffhand } from "../../types/offhand";
import { IArmour } from "../../types/armour";

// styles
import "./index.css";

const Selector = () => {
    const selectedSlot = useSelector((state: IState) => state.selectedSlot);
    const dispatch = useDispatch();

    const [searchTerm, setSearchTerm] = React.useState("");

    if (!selectedSlot) {
        return null;
    }

    let items = getSlotItems(selectedSlot).sort((itemA, itemB) => {
        if (itemA.name < itemB.name) {
            return -1;
        }

        if (itemA.name > itemB.name) {
            return 1;
        }

        return 0;
    });

    items = items.filter((item) => {
        return item.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

    const onClick = (item: IMainHand | ITrinket | IOffhand | null) => {
        if (selectedSlot === SlotType.TRINKET) {
            dispatch(Actions.selectTrinket(item as ITrinket));
        }

        if (selectedSlot === SlotType.MAINHAND) {
            dispatch(Actions.selectMainHand(item as IMainHand));
        }

        if (selectedSlot === SlotType.OFFHAND) {
            dispatch(Actions.selectOffhand(item as IOffhand));
        }

        if (selectedSlot === SlotType.HEAD) {
            dispatch(Actions.selectHead(item as IArmour));
        }

        if (selectedSlot === SlotType.BODY) {
            dispatch(Actions.selectBody(item as IArmour));
        }

        if (selectedSlot === SlotType.LEGS) {
            dispatch(Actions.selectLegs(item as IArmour));
        }

        dispatch(Actions.closeSelector());
    };

    return (
        <div className="selector">
            <div className="selector__inner">
                <div
                    className="selector__close"
                    onClick={() => {
                        dispatch(Actions.closeSelector());
                        setSearchTerm("");
                    }}
                >
                    x
                </div>

                <input
                    type="text"
                    placeholder="search..."
                    onChange={(e) => setSearchTerm(e.target.value)}
                    value={searchTerm}
                    autoFocus
                />

                <div className="selector__items">
                    <div
                        className="selector__item"
                        onClick={() => {
                            onClick(null);
                            setSearchTerm("");
                        }}
                    >
                        <img src="images/nothing.png" alt="nothing" />
                        <span>Nothing</span>
                    </div>

                    {items.map((item, index) => (
                        <div
                            className="selector__item"
                            key={index}
                            onClick={() => {
                                onClick(item);
                                setSearchTerm("");
                            }}
                        >
                            <img src={item.image} alt={item.name} />

                            <span>{item.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Selector;
