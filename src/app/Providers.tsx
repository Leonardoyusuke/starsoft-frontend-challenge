'use client'
import { useRef } from 'react'
import { Provider } from 'react-redux'
import { makeStore, AppStore } from '../lib/store'
import StyledComponentsRegistry from '@/lib/registry'

export default function Providers({
  children,
}: {
  children: React.ReactNode
}) {
  const storeRef = useRef<AppStore>(undefined)
  if (!storeRef.current) {
    storeRef.current = makeStore()
  }

  return (
    <Provider store={storeRef.current}>
      <StyledComponentsRegistry>
        {children}
      </StyledComponentsRegistry>
    </Provider>)
}