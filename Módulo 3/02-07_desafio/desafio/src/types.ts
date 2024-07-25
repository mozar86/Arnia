export type Category = 'Comida' | 'Bebida' | 'NaoComestivel';

export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    quantity: number;
    category: string;
    isFood: boolean;
    isDrink: boolean;
}