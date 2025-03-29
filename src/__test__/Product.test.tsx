import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { makeStore } from '@/lib/store';
import Products from '@/app/components/Cart/Products';
import { mockProduct, mockProducts } from './mockProduct';
import React from 'react';
import { getProductSlug } from '@/lib/utils/slug';
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

describe('Products', () => {
  it('should add product to checkout when "Comprar" is clicked', () => {
    const store = makeStore();

    render(
      <Provider store={store}>
        <Products
          data={{
            pages: [{ data: [mockProduct] }],
          }}
          isLoading={false}
          error={null}
          visibleCount={1}
        />
      </Provider>
    );

    const comprarBtn = screen.getByText('Comprar');
    fireEvent.click(comprarBtn);

    const state = store.getState();
    const item = state.cart.items.find((i) => i.id === mockProduct.id);

    expect(item).toBeDefined();
    expect(item?.quantity).toBe(1);
  });
  it('should load 8 more items when "Carregar mais" is clicked', () => {
    const store = makeStore();

    const Wrapper = () => {
      const [visibleCount, setVisibleCount] = React.useState(8);

      return (
        <>
          <Provider store={store}>
            <Products
              data={{ pages: [{ data: mockProducts }] }}
              isLoading={false}
              error={null}
              visibleCount={visibleCount}
            />
          </Provider>
          <button onClick={() => setVisibleCount((prev) => prev + 8)}>Carregar mais</button>
        </>
      );
    };

    render(<Wrapper />);

    expect(screen.getAllByTestId('product-name')).toHaveLength(8);
    fireEvent.click(screen.getByText('Carregar mais'));

    expect(screen.getAllByTestId('product-name')).toHaveLength(16);
  });
  it('should redirect to product page when product is clicked', () => {
    const store = makeStore();
    const push = jest.fn();
    jest.mocked(require('next/navigation')).useRouter = () => ({ push });

    render(
      <Provider store={store}>
        <Products
          data={{ pages: [{ data: [mockProduct] }] }}
          isLoading={false}
          error={null}
          visibleCount={1}
        />
      </Provider>
    );
    const productCard = screen.getByTestId('product-name').closest('div');
    fireEvent.click(productCard!);

    expect(push).toHaveBeenCalledWith(`/products/${getProductSlug(mockProduct)}`);
  });
});
