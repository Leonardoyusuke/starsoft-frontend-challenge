'use client';
import Products from '@/app/components/Cart/Products';
import { useData } from './api';

export default function ProductsContainer() {
  const { data, isLoading, error } = useData();

  return (
    <Products
      data={data}
      isLoading={isLoading}
      error={error}
    />
  );
}