'use client';
import OpenedCheckout from './OpenedCheckout';
import ClosedCheckout from './ClosedCheckout';

export default function CheckOut() {
  return (
    <>
      <ClosedCheckout />
      <OpenedCheckout />
    </>
  );
}
