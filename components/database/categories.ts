export interface Category {
  id: number;
  name: string;
  subcategories: Category[];
}

export interface Categories {
  categories: Category[];
}

export const categories: Categories = {
  categories: [
    {
      id: 1,
      name: 'Licores',
      subcategories: [
        {
          id: 11,
          name: 'Vinos',
          subcategories: [
            {
              id: 111,
              name: 'Vinos tintos',
              subcategories: [],
            },
            {
              id: 112,
              name: 'Vinos blancos',
              subcategories: [],
            },
          ],
        },
      ],
    },
  ],
};
