'use client';

import { BagWrapped } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { openCheckout } from '@/lib/features/checkout/checkoutSlice';
import { RootState, AppDispatch } from '@/lib/store';
import { Bag } from './Bag';

export default function ClosedCheckout() {
  const dispatch = useDispatch<AppDispatch>();
  const items = useSelector((state: RootState) => state.cart.items);
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <BagWrapped onClick={() => dispatch(openCheckout())}>
      <Bag />
      <p>{totalItems}</p>
    </BagWrapped>
  );
}
