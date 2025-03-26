'use client';
import Products from '@/app/components/Cart/Products';
import { useData } from './api';

interface ProductsContainerProps {
  visibleCount: number;
}

export default function ProductsContainer({ visibleCount }: ProductsContainerProps) {
  const { data, isLoading, error } = useData();

  return (
    <Products
      data={data}
      isLoading={isLoading}
      error={error}
      visibleCount={visibleCount}
    />
  );
}