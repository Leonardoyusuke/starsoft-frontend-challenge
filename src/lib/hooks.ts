import { useDispatch, useSelector, useStore } from 'react-redux';
import type { RootState, AppDispatch, AppStore } from './store';
import { useInfiniteQuery } from '@tanstack/react-query';
import { IProductsResponse } from './types/product';
import { fetchProducts } from './api';

export function useInfiniteData() {
  return useInfiniteQuery<IProductsResponse, Error, IProductsResponse, [string], number>({
    queryKey: ['products'],
    queryFn: fetchProducts,
    getNextPageParam: (lastPage) =>
      lastPage.metadata.hasNextPage ? lastPage.metadata.page + 1 : undefined,
    initialPageParam: 1,
  });
}

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppStore = useStore.withTypes<AppStore>();
