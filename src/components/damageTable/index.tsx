// libraries
import React from "react";

// types
import { IEffect } from "../../types/effect";

// utils
import { damageTaken } from "../../utils/damageTaken";

// styles
import "./index.css";

interface IProps {
    effects: IEffect[];
}

const DamageTable = (props: IProps) => {
    const resistance = props.effects.reduce((acc, effect) => {
        if (effect.name === "Resistance") {
            return acc + effect.amount;
        }

        return acc;
    }, 0);

    const defense = props.effects.reduce((acc, effect) => {
        if (effect.name === "Defense") {
            return acc + effect.amount;
        }

        return acc;
    }, 0);

    return (
        <div className="damageTable">
            <h2>Estimated damage taken:</h2>

            <table>
                <tbody>
                    <tr>
                        <th>Attack damage</th>
                        <td>50</td>
                        <td>100</td>
                        <td>250</td>
                        <td>500</td>
                        <td>1000</td>
                    </tr>
                    <tr>
                        <th>Level 1 armour</th>
                        <td>{damageTaken(50, defense, resistance, 0.2, 0)}</td>
                        <td>{damageTaken(100, defense, resistance, 0.2, 0)}</td>
                        <td>{damageTaken(250, defense, resistance, 0.2, 0)}</td>
                        <td>{damageTaken(500, defense, resistance, 0.2, 0)}</td>
                        <td>{damageTaken(1000, defense, resistance, 0.2, 0)}</td>
                    </tr>
                    <tr>
                        <th>Max level armour (sleek)</th>
                        <td>{damageTaken(50, defense, resistance, 0.05, 0.45)}</td>
                        <td>{damageTaken(100, defense, resistance, 0.05, 0.45)}</td>
                        <td>{damageTaken(250, defense, resistance, 0.05, 0.45)}</td>
                        <td>{damageTaken(500, defense, resistance, 0.05, 0.45)}</td>
                        <td>{damageTaken(1000, defense, resistance, 0.05, 0.45)}</td>
                    </tr>

                    <tr>
                        <th>Max level armour (bulky)</th>
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
