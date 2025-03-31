'use client';

import { useRef } from 'react';
import { Provider } from 'react-redux';
import { makeStore, AppStore } from '../lib/store';
import StyledComponentsRegistry from '@/lib/registry';
import { HydrationBoundary, QueryClient, QueryClientProvider } from '@tanstack/react-query';

type ProvidersProps = {
  children: React.ReactNode;
  dehydratedState?: unknown;
};

export default function Providers({ children, dehydratedState }: ProvidersProps) {
  const storeRef = useRef<AppStore | null>(null);
  if (storeRef.current === null) {
    storeRef.current = makeStore();
  }

  const queryClientRef = useRef(new QueryClient());
  const queryClient = queryClientRef.current;

  return (
    <Provider store={storeRef.current!}>
      <QueryClientProvider client={queryClient}>
        <HydrationBoundary state={dehydratedState}>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </HydrationBoundary>
      </QueryClientProvider>
    </Provider>
  );
}
