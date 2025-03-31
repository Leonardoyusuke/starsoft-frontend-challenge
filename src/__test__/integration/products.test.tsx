import { fireEvent, screen } from '@testing-library/react';
import { IProductsResponse } from '@/lib/types/product';
import Products from '@/app/components/Cart/Products';
import { renderWithProviders } from './utils/renderWithProviders';
import { mockProduct } from '../mockProduct';

const mockData = {
  pages: [
    {
      data: [mockProduct],
    },
  ],
} as unknown as IProductsResponse;

describe('Products', () => {
  it('Should render product with name and button', () => {
    renderWithProviders(
      <Products data={mockData} isLoading={false} error={null} visibleCount={10} />
    );

    expect(screen.getByTestId('product-name')).toHaveTextContent('Espada Lendária');
    expect(screen.getByRole('button', { name: /comprar/i })).toBeInTheDocument();
  });

  it('Should add product to checkout and desable button', () => {
    renderWithProviders(
      <Products data={mockData} isLoading={false} error={null} visibleCount={10} />
    );

    const botao = screen.getByRole('button', { name: /comprar/i });
    fireEvent.click(botao);

    expect(botao).toBeDisabled();
    expect(botao).toHaveTextContent('ADICIONADO AO CARRINHO');
  });

  it('Should show "carregando produtos" when "isLoading" is true', () => {
    renderWithProviders(
      <Products data={undefined} isLoading={true} error={null} visibleCount={10} />
    );

    expect(screen.getByText(/carregando produtos/i)).toBeInTheDocument();
  });

  it('Should show "erro" when shows error', () => {
    renderWithProviders(
      <Products
        data={undefined}
        isLoading={false}
        error={new Error('Erro de teste')}
        visibleCount={10}
      />
    );

    expect(screen.getByText(/erro: erro de teste/i)).toBeInTheDocument();
  });
});
