import { fireEvent, screen } from '@testing-library/react';
import { renderWithProviders } from './utils/renderWithProviders';
import Products from '@/app/components/Cart/Products';
import { IProductsResponse } from '@/lib/types/product';
import { mockProduct } from '../mockProduct';

const mockData = {
  pages: [
    {
      data: [mockProduct],
    },
  ],
} as unknown as IProductsResponse;

describe('checkout', () => {
  it('Should add to checkout when product button is clicked', () => {
    renderWithProviders(
      <Products data={mockData} isLoading={false} error={null} visibleCount={10} />
    );

    const button = screen.getByRole('button', { name: /comprar/i });
    fireEvent.click(button);

    expect(button).toBeDisabled();
    expect(button).toHaveTextContent(/adicionado ao carrinho/i);
  });
});
