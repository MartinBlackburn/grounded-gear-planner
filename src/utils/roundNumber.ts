export const roundToTwoDecimalPlaces = (number: number) => {
    if (Number.isInteger(number)) {
        return number;
    }

    const rounded = Math.round(number * 100) / 100;

    return rounded.toFixed(rounded % 1 === 0 ? 0 : 2);
};
