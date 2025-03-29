import slugify from 'slugify';
import { IProduct } from '@/lib/types/product';

export function getProductSlug(product: IProduct): string {
  return slugify(product.name, {
    lower: true,
    strict: true,
  });
}
