import { IProduct } from '@/lib/types/product';

export const mockProduct: IProduct = {
  id: 1,
  name: 'Espada Lendária',
  description: 'Uma espada forjada com magia antiga.',
  image: '/sword.png',
  price: 150,
  createdAt: '',
};

export const mockProducts: IProduct[] = Array.from({ length: 20 }).map((_, i) => ({
  id: i + 1,
  name: `Produto ${i + 1}`,
  description: `Descrição do produto ${i + 1}`,
  image: `/img-${i + 1}.png`,
  price: 100 + i,
  createdAt: new Date().toISOString(),
}));
