import { QueryFunctionContext } from '@tanstack/react-query';
import { IProductsResponse } from '@/lib/types/product';

export async function fetchProducts({
  pageParam,
}: QueryFunctionContext<[string], number>): Promise<IProductsResponse> {
  const page = pageParam;
  const res = await fetch(
    `https://starsoft-challenge-7dfd4a56a575.herokuapp.com/v1/products?page=${page}&limit=12`,
    { next: { revalidate: 6000 } }
  );
  if (!res.ok) {
    throw new Error('Error in fetch data');
  }
  const json = await res.json();
  return json as IProductsResponse;
}

export async function fetchProductsBuild(page = 1): Promise<IProductsResponse> {
  const res = await fetch(
    `https://starsoft-challenge-7dfd4a56a575.herokuapp.com/v1/products?page=${page}&limit=12`,
    { next: { revalidate: 6000 } }
  );
  if (!res.ok) {
    throw new Error('Error in fetch data');
  }
  return res.json();
}
