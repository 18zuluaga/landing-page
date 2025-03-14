export const products: IProducts[] = [
  {
    id: 1,
    name: 'camisetas',
    price: 10,
    description : 'Camisetas de algodon',
  },
  {
    id: 2,
    name: 'jeans',
    price: 20,
    description : 'jeans de algodon',
  },
  {
    id: 3,
    name: 'pantalones',
    price: 30,
    description : 'Pantalones de algodon',
  },
  {
    id: 4,
    name: 'gorras',
    price: 20,
    description : 'gorras de algodon',
  },
  {
    id: 5,
    name: 'zapatos',
    price: 50,
  }
]

export interface IProducts {
  id: number;
  name: string;
  price: number;
  description?: string
}
