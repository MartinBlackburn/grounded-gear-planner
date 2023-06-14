// libraries
import React from "react";

// types
import { IEffectsCombined } from "../../utils/combineEffects";

// utils
import { damageTaken } from "../../utils/damageTaken";

// styles
import "./index.css";

interface IProps {
    combinedEffects: IEffectsCombined;
}

const DamageTable = (props: IProps) => {
    let resistance = props.combinedEffects.effects.reduce((acc, effect) => {
        if (effect.name === "Resistance") {
            return acc + effect.amount;
        }

        return acc;
    }, 0);

    resistance = props.combinedEffects.sleekEffects.reduce((acc, effect) => {
        if (effect.name === "Resistance") {
            return acc + effect.amount;
        }

        return acc;
    }, resistance);

    let defense = props.combinedEffects.effects.reduce((acc, effect) => {
        if (effect.name === "Defense") {
            return acc + effect.amount;
        }

        return acc;
    }, 0);

    defense = props.combinedEffects.sleekEffects.reduce((acc, effect) => {
        if (effect.name === "Defense") {
            return acc + effect.amount;
        }

        return acc;
    }, defense);

    return (
        <div className="damageTable">
            <h2>Estimated damage taken:</h2>

            <table>
                <tbody>
                    <tr>
                        <th>Incoming attack</th>
                        <th>50</th>
                        <th>100</th>
                        <th>250</th>
                        <th>500</th>
                        <th>1000</th>
                    </tr>
                    <tr>
                        <td>Level 1 armour</td>
                        <td>{damageTaken(50, defense, resistance, 0.2, 0)}</td>
                        <td>{damageTaken(100, defense, resistance, 0.2, 0)}</td>
                        <td>{damageTaken(250, defense, resistance, 0.2, 0)}</td>
                        <td>{damageTaken(500, defense, resistance, 0.2, 0)}</td>
                        <td>{damageTaken(1000, defense, resistance, 0.2, 0)}</td>
                    </tr>
                    <tr>
                        <td>Max level armour (sleek)</td>
                        <td>{damageTaken(50, defense, resistance, 0.05, 0.45)}</td>
                        <td>{damageTaken(100, defense, resistance, 0.05, 0.45)}</td>
                        <td>{damageTaken(250, defense, resistance, 0.05, 0.45)}</td>
                        <td>{damageTaken(500, defense, resistance, 0.05, 0.45)}</td>
                        <td>{damageTaken(1000, defense, resistance, 0.05, 0.45)}</td>
                    </tr>

                    <tr>
                        <td>Max level armour (bulky)</td>
                        <td>{damageTaken(50, defense, resistance, 0.05, 0.65)}</td>
                        <td>{damageTaken(100, defense, resistance, 0.05, 0.65)}</td>
                        <td>{damageTaken(250, defense, resistance, 0.05, 0.65)}</td>
                        <td>{damageTaken(500, defense, resistance, 0.05, 0.65)}</td>
                        <td>{damageTaken(1000, defense, resistance, 0.05, 0.65)}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default DamageTable;
