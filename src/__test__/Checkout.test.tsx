import { render, screen, fireEvent } from '@testing-library/react';
import ClosedCheckout from '@/app/components/Checkout/ClosedCheckout';
import { Provider } from 'react-redux';
import { makeStore } from '@/lib/store';
import OpenedCheckout from '@/app/components/Checkout/OpenedCheckout';

jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    const { src, alt, onClick } = props;
    return <img src={src} alt={alt} onClick={onClick} />;
  },
}));

describe('Checkout', () => {
  it('Expect openedCheckout when closedCheckout is clicked ', () => {
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

  it('Expect closedCheckout when back button is clicked', () => {
    const store = makeStore();
    store.dispatch({ type: 'checkout/openCheckout' });

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

  it('Expect ClosedCheckout when clicked outside the container', () => {
    const store = makeStore();
    store.dispatch({ type: 'checkout/openCheckout' });

    const { container } = render(
      <Provider store={store}>
        <OpenedCheckout />
      </Provider>
    );

    fireEvent.mouseDown(document);

    const state = store.getState();
    expect(state.checkout.isOpen).toBe(false);
  });
});
