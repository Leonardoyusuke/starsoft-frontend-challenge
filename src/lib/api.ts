'use client';
import { useInfiniteQuery, QueryFunctionContext } from '@tanstack/react-query';
import { IProductsResponse } from '@/lib/types/product';

async function fetchProducts({
  pageParam,
}: QueryFunctionContext<[string], number>): Promise<IProductsResponse> {
  const page = pageParam;
  const res = await fetch(
    `https://starsoft-challenge-7dfd4a56a575.herokuapp.com/v1/products?page=${page}&limit=12`
  );
  if (!res.ok) {
    throw new Error('Error in fetch data');
  }
  const json = await res.json();
  return json as IProductsResponse;
}

export function useInfiniteData() {
  return useInfiniteQuery<IProductsResponse, Error, IProductsResponse, [string], number>({
    queryKey: ['products'],
    queryFn: fetchProducts,
    getNextPageParam: (lastPage) =>
      lastPage.metadata.hasNextPage ? lastPage.metadata.page + 1 : undefined,
    initialPageParam: 1,
  });
}
