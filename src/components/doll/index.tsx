// libraries
import React from "react";

// types
import { Slot as SlotType } from "../../types/slots";

// components
import Slot from "../slot";

// state
import { useDispatch, useSelector } from "react-redux";

// styles
import "./index.css";
import { Actions } from "../../state/actions";
import { IState } from "../../state/store";

const Doll = () => {
    const dispatch = useDispatch();

    const selectedMainHand = useSelector((state: IState) => state.mainHand);
    const selectedOffhand = useSelector((state: IState) => state.offhand);
    const selectedTrinket = useSelector((state: IState) => state.trinket);

    const selectedHead = useSelector((state: IState) => state.head);
    const selectedBody = useSelector((state: IState) => state.body);
    const selectedLegs = useSelector((state: IState) => state.legs);

    const selectedMutations = useSelector((state: IState) => state.mutations);

    return (
        <div className="doll">
            <div className="doll__equipment">
                <div className="doll__mainHand">
                    <Slot
                        type={SlotType.MAINHAND}
                        item={selectedMainHand}
                        onClick={() => dispatch(Actions.openSelector(SlotType.MAINHAND))}
                    />
                </div>

                <div className="doll__offHand">
                    <Slot
                        type={SlotType.OFFHAND}
                        item={selectedOffhand}
                        onClick={() => dispatch(Actions.openSelector(SlotType.OFFHAND))}
                    />
                </div>

                <div className="doll__trinket">
                    <Slot
                        type={SlotType.TRINKET}
                        item={selectedTrinket}
                        onClick={() => dispatch(Actions.openSelector(SlotType.TRINKET))}
                    />
                </div>

                <div className="doll__head">
                    <Slot
                        type={SlotType.HEAD}
                        item={selectedHead}
                        onClick={() => dispatch(Actions.openSelector(SlotType.HEAD))}
                    />
                </div>

                <div className="doll__body">
                    <Slot
                        type={SlotType.BODY}
                        item={selectedBody}
                        onClick={() => dispatch(Actions.openSelector(SlotType.BODY))}
                    />
                </div>

                <div className="doll__legs">
                    <Slot
                        type={SlotType.LEGS}
                        item={selectedLegs}
                        onClick={() => dispatch(Actions.openSelector(SlotType.LEGS))}
                    />
                </div>
            </div>

            <div className="doll__equipment">
                <div className="doll__mutations">
                    <Slot
                        type={SlotType.MUTATION_1}
                        item={selectedMutations[0]}
                        onClick={() => dispatch(Actions.openSelector(SlotType.MUTATION_1))}
                    />
                </div>

                <div className="doll__mutations">
                    <Slot
                        type={SlotType.MUTATION_2}
                        item={selectedMutations[1]}
                        onClick={() => dispatch(Actions.openSelector(SlotType.MUTATION_2))}
                    />
                </div>

                <div className="doll__mutations">
                    <Slot
                        type={SlotType.MUTATION_3}
                        item={selectedMutations[2]}
                        onClick={() => dispatch(Actions.openSelector(SlotType.MUTATION_3))}
                    />
                </div>

                <div className="doll__mutations">
                    <Slot
                        type={SlotType.MUTATION_4}
                        item={selectedMutations[3]}
                        onClick={() => dispatch(Actions.openSelector(SlotType.MUTATION_4))}
                    />
                </div>

                <div className="doll__mutations">
                    <Slot
                        type={SlotType.MUTATION_5}
                        item={selectedMutations[4]}
                        onClick={() => dispatch(Actions.openSelector(SlotType.MUTATION_5))}
                    />
                </div>
            </div>
        </div>
    );
};

export default Doll;
