export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const cars = [
  {
    id: 1,
    name: 'Audi A1',
    price: 16_000,
    description: 'City car',
  },
  {
    id: 2,
    name: 'Peugeout 5008',
    price: 36_000,
    description: 'Family car',
  },
  {
    id: 3,
    name: 'Smart ForTwo',
    price: 20_000,
    description: 'Single car',
  },
];
