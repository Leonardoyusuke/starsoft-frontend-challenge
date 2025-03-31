import { renderWithProviders } from './utils/renderWithProviders';
import { screen, waitFor } from '@testing-library/react';
import { mockProduct } from '../mockProduct';
import ProductPage from '@/app/products/[slug]/product';

jest.mock('@/lib/api', () => ({
  useInfiniteData: () => ({
    data: {
      pages: [
        {
          data: [mockProduct],
        },
      ],
    },
    fetchNextPage: jest.fn(),
    hasNextPage: false,
    isLoading: false,
  }),
}));

describe('Product page', () => {
  it('Should display product details based on product slug', async () => {
    renderWithProviders(<ProductPage slug="espada-lendaria" />);

    await waitFor(() => {
      expect(screen.getByTestId('product-name')).toHaveTextContent(/espada lendária/i);
      expect(screen.getByText(/uma espada forjada com magia antiga/i)).toBeInTheDocument();
    });
  });
});
