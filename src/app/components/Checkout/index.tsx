'use client';

import dynamic from 'next/dynamic';
import { useSelector } from 'react-redux';
import { RootState } from '@/lib/store';
import ClosedCheckout from './ClosedCheckout';
import { AnimatePresence } from 'framer-motion';

const OpenedCheckout = dynamic(() => import('./OpenedCheckout'), {
  ssr: false,
  loading: () => <p>Carregando carrinho...</p>,
});

export default function CheckOut() {
  const isOpen = useSelector((state: RootState) => state.checkout.isOpen);

  return (
    <>
      <ClosedCheckout />
      <AnimatePresence>{isOpen && <OpenedCheckout />}</AnimatePresence>
    </>
  );
}
