'use client'
import { useRef } from 'react'
import { Provider } from 'react-redux'
import { makeStore, AppStore } from '../lib/store'
import StyledComponentsRegistry from '@/lib/registry'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export default function Providers({
  children,
}: {
  children: React.ReactNode
}) {
  const storeRef = useRef<AppStore | null>(null);
  if (storeRef.current === null) {
    storeRef.current = makeStore();
  }

  const queryClientRef = useRef(new QueryClient());
  const queryClient = queryClientRef.current;

  return (
    <Provider store={storeRef.current!}>
      <QueryClientProvider client={queryClient}>
        <StyledComponentsRegistry>
          {children}
        </StyledComponentsRegistry>
      </QueryClientProvider>
    </Provider>
  );
}