export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  imgUrl: string;
}

export const bikes = [
  {
    id: 1,
    name: 'R1',
    price: 12_000,
    description: 'Pista',
    imgUrl:
      'https://as2.ftcdn.net/v2/jpg/00/89/07/63/1000_F_89076312_sbxXwcGITdbVARuWd4PNsyMVvtBazKYi.jpg',
  },
  {
    id: 2,
    name: 'Gsx 1000rr',
    price: 36_000,
    description: ' pista pista',
    imgUrl:
      'https://as2.ftcdn.net/v2/jpg/00/89/07/63/1000_F_89076312_sbxXwcGITdbVARuWd4PNsyMVvtBazKYi.jpg',
  },
  {
    id: 3,
    name: 'Ducati',
    price: 20_000,
    description: 'brum',
    imgUrl:
      'https://as2.ftcdn.net/v2/jpg/00/89/07/63/1000_F_89076312_sbxXwcGITdbVARuWd4PNsyMVvtBazKYi.jpg',
  },
  {
    id: 4,
    name: 'Brutale',
    price: 999,
    description: 'brum',
    imgUrl:
      'https://as2.ftcdn.net/v2/jpg/00/89/07/63/1000_F_89076312_sbxXwcGITdbVARuWd4PNsyMVvtBazKYi.jpg',
  },
];
