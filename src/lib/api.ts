'use client';

import { useQuery } from '@tanstack/react-query';
import { IProductsResponse } from '@/lib/types/product';

async function fetchProducts(): Promise<IProductsResponse> {
  const res = await fetch('https://starsoft-challenge-7dfd4a56a575.herokuapp.com/v1/products?page=1&limit=20');
  if (!res.ok) {
    throw new Error('Error in fetch data');
  }
  const json = await res.json();
  return json;
}

export function useData() {
  return useQuery<IProductsResponse>({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });
}