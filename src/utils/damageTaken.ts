export const damageTaken = (
    attackDamage: number,
    defense: number,
    resistance: number,
    minDamagePercent: number,
    armourModifier: number
) => {
    // convert resistance to percentage
    const resistancePercentage = resistance / 100;

    // reduce damage by resistance
    const afterResistance = attackDamage - attackDamage * resistancePercentage;

    // reduce by defense and its armour modifier
    const afterDefense = afterResistance - defense - defense * armourModifier;

    // make sure damage taken is at least minDamagePercent
    const minDamage = attackDamage * minDamagePercent;
    let damageTaken = afterDefense;

    if (damageTaken < minDamage) {
        damageTaken = minDamage;
    }

    return Math.round(damageTaken);
};
