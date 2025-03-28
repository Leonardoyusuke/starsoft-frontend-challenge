'use client';
import { IProduct, IProductsProps, IProductsResponse } from '@/lib/types/product';
import Image from 'next/image';
import {
  Product,
  ProductImage,
  ProductName,
  ProductDescription,
  ProductBottom,
  ProductPrice,
  ProductPriceBuy,
  Button,
  Container,
} from './styles';
import Eth from '/public/Eth.svg';
import { AppDispatch } from '@/lib/store';
import { useDispatch } from 'react-redux';
import { addItem } from '@/lib/features/cart/cartSlice';

export default function Products({ data, isLoading, error, visibleCount }: IProductsProps) {
  const dispatch = useDispatch<AppDispatch>();
  if (isLoading) return <p>Carregando Produtos...</p>;
  if (error instanceof Error) return <p>Erro: {error.message}</p>;

  const products: IProduct[] = data?.pages.flatMap((page: IProductsResponse) => page.data) ?? [];

  return (
    <Container>
      {products.slice(0, visibleCount).map((product: IProduct) => (
        <Product key={product.id}>
          <ProductImage src={product.image} width={296} height={258} alt={product.name} />
          <ProductBottom>
            <ProductName>{product.name}</ProductName>
            <ProductDescription>{product.description}</ProductDescription>
            <ProductPriceBuy>
              <ProductPrice>
                <Image src={Eth} alt="eth" width={24} height={24} /> {product.price} ETH
              </ProductPrice>
              <Button onClick={() => dispatch(addItem({ ...product, quantity: 1 }))}>
                <p>Comprar</p>
              </Button>
            </ProductPriceBuy>
          </ProductBottom>
        </Product>
      ))}
    </Container>
  );
}
