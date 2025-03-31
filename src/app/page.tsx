import { fetchProductsBuild } from '@/lib/api';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import Cart from './components/Cart';
import Header from './components/Header';
import Footer from './components/Footer';
import { IProductsResponse } from '@/lib/types/product';

export default async function Home() {
  const queryClient = new QueryClient();

  await queryClient.prefetchInfiniteQuery({
    queryKey: ['products'],
    queryFn: ({ pageParam = 1 }) => fetchProductsBuild(pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage: IProductsResponse) =>
      lastPage.metadata.hasNextPage ? lastPage.metadata.page + 1 : undefined,
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <Header />
      <Cart />
      <Footer />
    </HydrationBoundary>
  );
}
