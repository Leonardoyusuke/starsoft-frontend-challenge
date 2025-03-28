'use client';

import { useEffect, useRef } from 'react';
import { Top, MotionContainer } from './styles';
import Image from 'next/image';
import backArrow from '/public/BackArrow.svg';
import { useDispatch } from 'react-redux';
import { closeCheckout } from '@/lib/features/checkout/checkoutSlice';
import { AppDispatch } from '@/lib/store';
import ProductCheckout from './ProductCheckout';

export default function OpenedCheckout() {
  const dispatch = useDispatch<AppDispatch>();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        dispatch(closeCheckout());
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dispatch]);

  return (
    <MotionContainer
      ref={containerRef}
      initial={{ x: '100%', opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: '100%', opacity: 0 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      <Top>
        <Image src={backArrow} alt="BackArrow" onClick={() => dispatch(closeCheckout())} />
        <p>Mochila de Compras</p>
      </Top>
      <ProductCheckout />
    </MotionContainer>
  );
}
