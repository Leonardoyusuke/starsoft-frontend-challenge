'use client';

import { useParams } from 'next/navigation';
import { getProductSlug } from '@/lib/utils/slug';
import { useEffect, useState } from 'react';
import { IProduct } from '@/lib/types/product';
import { useInfiniteData } from '@/lib/api';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import {
  ProductBottom,
  ProductDescription,
  ProductImage,
  ProductName,
  ProductPrice,
  ProductPriceBuy,
} from '@/app/components/Cart/Products/styles';
import { Container } from './styles';
import Image from 'next/image';
import Eth from '/public/Eth.svg';

export default function ProdutoPage() {
  const { slug } = useParams() as { slug: string };
  const { data, fetchNextPage, hasNextPage, isLoading } = useInfiniteData();
  const [product, setProduct] = useState<IProduct | null>(null);

  useEffect(() => {
    const allProducts = data?.pages.flatMap((page) => page.data) ?? [];
    const found = allProducts.find((p) => getProductSlug(p) === slug);

    if (found) {
      setProduct(found);
    } else if (hasNextPage) {
      fetchNextPage();
    }
  }, [data, slug, fetchNextPage, hasNextPage]);

  if (isLoading) return <p>Carregando...</p>;
  if (!product) return <p>Produto não encontrado</p>;

  return (
    <div>
      <Header />
      <Container>
        <ProductImage src={product.image} width={296} height={258} alt={product.name} />
        <ProductBottom>
          <ProductName data-testid="product-name">{product.name}</ProductName>
          <ProductDescription>{product.description}</ProductDescription>
          <ProductPriceBuy>
            <ProductPrice>
              <Image src={Eth} alt="eth" width={24} height={24} /> {product.price} ETH
            </ProductPrice>
          </ProductPriceBuy>
        </ProductBottom>
      </Container>
      <Footer />
    </div>
  );
}
