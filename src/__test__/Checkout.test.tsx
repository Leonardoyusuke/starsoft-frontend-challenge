/* eslint-disable @next/next/no-img-element */

import { render, screen, fireEvent } from '@testing-library/react';
import ClosedCheckout from '@/app/components/Checkout/ClosedCheckout';
import { Provider } from 'react-redux';
import { makeStore } from '@/lib/store';
import OpenedCheckout from '@/app/components/Checkout/OpenedCheckout';
import { mockProduct } from './mockProduct';
import { addItem } from '@/lib/features/cart/cartSlice';
import ProductCheckout from '@/app/components/Checkout/OpenedCheckout/ProductCheckout';

describe('Checkout', () => {
  it('Should openedCheckout when closedCheckout is clicked ', () => {
    const store = makeStore();

    render(
      <Provider store={store}>
        <ClosedCheckout />
      </Provider>
    );

    const button = screen.getByRole('button');
    fireEvent.click(button);

    const state = store.getState();
    expect(state.checkout.isOpen).toBe(true);
  });

  it('Should closedCheckout when back button is clicked', () => {
    const store = makeStore();

    render(
      <Provider store={store}>
        <OpenedCheckout />
      </Provider>
    );

    const backButton = screen.getByAltText('BackArrow');
    fireEvent.click(backButton);

    const state = store.getState();
    expect(state.checkout.isOpen).toBe(false);
  });

  it('Should ClosedCheckout when clicked outside container', () => {
    const store = makeStore();

    const { container } = render(
      <Provider store={store}>
        <OpenedCheckout />
      </Provider>
    );

    fireEvent.mouseDown(document);
    const state = store.getState();
    expect(state.checkout.isOpen).toBe(false);
    expect(container).toBeInTheDocument();
  });

  it('Should increase quantity of item when the "+" is clicked', () => {
    const store = makeStore();

    store.dispatch(addItem({ ...mockProduct, quantity: 1 }));

    render(
      <Provider store={store}>
        <ProductCheckout />
      </Provider>
    );

    const plusButton = screen.getByText('+');
    fireEvent.click(plusButton);

    const state = store.getState();
    const item = state.cart.items.find((i) => i.id === mockProduct.id);

    expect(item?.quantity).toBe(2);
  });

  it('Should Decrease quantity when "-" is clicked', () => {
    const store = makeStore();

    store.dispatch(addItem({ ...mockProduct, quantity: 1 }));
    store.dispatch(addItem({ ...mockProduct, quantity: 1 }));

    render(
      <Provider store={store}>
        <ProductCheckout />
      </Provider>
    );

    const minusButton = screen.getByText('-');
    fireEvent.click(minusButton);

    const state = store.getState();
    const item = state.cart.items.find((i) => i.id === mockProduct.id);

    expect(item?.quantity).toBe(1);
  });

  it('Should remove the item when "-" is clicked and quantity is iqual to 1', () => {
    const store = makeStore();

    store.dispatch(addItem({ ...mockProduct, quantity: 1 }));

    render(
      <Provider store={store}>
        <ProductCheckout />
      </Provider>
    );

    const minusButton = screen.getByText('-');
    fireEvent.click(minusButton);

    const state = store.getState();
    const item = state.cart.items.find((i) => i.id === mockProduct.id);

    expect(item).toBeUndefined();
    expect(state.cart.items.length).toBe(0);
  });

  it('Should remove the item when delete is clicked ', () => {
    const store = makeStore();

    store.dispatch(addItem({ ...mockProduct, quantity: 1 }));
    store.dispatch(addItem({ ...mockProduct, quantity: 1 }));

    render(
      <Provider store={store}>
        <ProductCheckout />
      </Provider>
    );

    const deleteButton = screen.getByAltText('TrashCan');
    fireEvent.click(deleteButton);

    const state = store.getState();
    const item = state.cart.items.find((i) => i.id === mockProduct.id);

    expect(item).toBeUndefined();
    expect(state.cart.items.length).toBe(0);
  });
});
