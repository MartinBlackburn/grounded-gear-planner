export interface IEffect {
    name: string;
    description: string;
    amount: number;
    unit: "%" | undefined;
}
