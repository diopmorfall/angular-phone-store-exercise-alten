export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  imgUrl: string;
}

export const cars = [
  {
    id: 1,
    name: 'Audi A1',
    price: 16_000,
    description: 'City car',
    imgUrl:
      'https://immagini.alvolante.it/sites/default/files/styles/image_gallery_big/public/primo_contatto_galleria/2021/07/mercedes-eqs-580_05.jpg?itok=81SsvGLE',
  },
  {
    id: 2,
    name: 'Peugeout 5008',
    price: 36_000,
    description: 'Family car',
    imgUrl:
      'https://immagini.alvolante.it/sites/default/files/styles/image_gallery_big/public/primo_contatto_galleria/2021/07/mercedes-eqs-580_05.jpg?itok=81SsvGLE',
  },
  {
    id: 3,
    name: 'Smart ForTwo',
    price: 20_000,
    description: 'Single car',
    imgUrl:
      'https://immagini.alvolante.it/sites/default/files/styles/image_gallery_big/public/primo_contatto_galleria/2021/07/mercedes-eqs-580_05.jpg?itok=81SsvGLE',
  },
];
