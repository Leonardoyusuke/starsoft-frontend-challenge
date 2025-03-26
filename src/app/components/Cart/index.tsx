'use client';
import { useState } from 'react';
import Products from '@/app/components/Cart/Products';
import { useInfiniteData } from '@/lib/api';
import { IProduct, IProductsResponse } from '@/lib/types/product';
import Button from './Button';

export default function Cart() {
  const { data, isLoading, error, fetchNextPage, hasNextPage } = useInfiniteData();
  const [visibleCount, setVisibleCount] = useState(8);

  const products: IProduct[] = data?.pages.flatMap((page: IProductsResponse) => page.data) ?? [];

  const handleShowMore = () => {
    if (products.length - visibleCount < 8 && hasNextPage) {
      fetchNextPage();
    }
    setVisibleCount(prev => prev + 8);
  };

  const totalProducts = data?.pages[data.pages.length - 1]?.metadata.count || 0;
  const percentage = totalProducts ? (visibleCount / totalProducts) * 100 : 0;

  return (
    <div>
      <Products 
        data={data}
        isLoading={isLoading}
        error={error}
        visibleCount={visibleCount}
      />
      <Button onClick={handleShowMore} percentage={percentage}></Button>
    </div>
  );
}