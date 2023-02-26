
export type BreakfastType = {
    id: number;
    name: string;
    details: string;
    isNew: boolean;
    isFavorite: boolean;
    price: number
}

export const Breakfast: BreakfastType[] = [
    {
        id: 1,
        name: 'Tapa & Garlic Fried Rice',
        details: '',
        isNew: false,
        isFavorite: true,
        price: 100.00
    }
]