'use client';
import { IProductsResponse } from '@/lib/types/product';
import Image from 'next/image';
import { Product, ProductImage, ProductName, ProductDescription, ProductBottom, ProductPrice, ProductPriceBuy, Button } from './styles';
import Eth from "/public/Eth.svg"

interface ProductsProps {
  data: IProductsResponse | undefined;
  isLoading: boolean;
  error: unknown;
}

export default function Products({ data, isLoading, error }: ProductsProps) {
  if (isLoading) return <p>Carregando Produtos...</p>;
  if (error instanceof Error) return <p>Erro: {error.message}</p>;
  return (
    <>
      {data?.data.map((product) => (
        <Product key={product.id}>
          <ProductImage src={product.image} width={296} height={258} alt={''}></ProductImage>
          <ProductBottom>
            <ProductName>{product.name}</ProductName>
            <ProductDescription>{product.description} </ProductDescription>
            <ProductPriceBuy>
            <ProductPrice><Image src={Eth} alt={'eth'} /> {product.price} ETH </ProductPrice>
            <Button><text>Comprar</text></Button>
            </ProductPriceBuy>
          </ProductBottom>
        </Product>
      ))}
    </>
  );
}