'use client';
import { useState } from 'react';
import ProductsContainer from "@/lib/productContainer";
import { Container } from "./styles";
import Button from './Button';

export default function Cart(){
  const [visibleCount, setVisibleCount] = useState(8);

  const handleShowMore = () => {
    setVisibleCount(prev => prev + 8);
  };

  return(
    <Container>
      <ProductsContainer visibleCount={visibleCount} />
      <Button onClick={handleShowMore} />
    </Container>
  );
}