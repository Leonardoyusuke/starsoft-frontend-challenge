'use client';

import Image from 'next/image';
import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 190px;
  justify-self: center;
  background-color: #232323;
  height: 100%;
  width: 100%;
  max-width: 1455px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 25px;
  justify-items: center;
  position: relative;
  padding: 0 16px;

  @media (max-width: 1500px) {
    grid-template-columns: repeat(3, 1fr);
    padding: 0px;
  }
  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 750px) {
    grid-template-columns: 1fr;
  }
`;

export const Product = styled.div`
  width: 100%;
  max-width: 345px;
  height: 555px;
  border-radius: 8px;
  background-color: #191a20;
  display: flex;
  flex-direction: column;
  position: relative;
  :hover {
    cursor: pointer;
  }
`;

export const ProductImage = styled(Image)`
  margin: 24.5px;
  align-self: center;
  border-radius: 4px;
`;

export const ProductName = styled.p`
  width: 158px;
  height: 25px;
  font-family: Poppins;
  font-weight: 500;
  font-size: 18px;
  line-height: 140%;
  color: #ffffff;
`;

export const ProductDescription = styled.p`
  width: 296px;
  height: 12px;
  font-family: Poppins;
  font-weight: 300;
  font-size: 12px;
  line-height: 12px;
  color: #cccccc;
`;

export const ProductBottom = styled.div`
  width: 100%;
  max-width: 345px;
  height: 196px;
  gap: 19px;
  display: flex;
  flex-direction: column;
  margin: 0px 0px 0px 24px;
`;

export const ProductPrice = styled.div`
  width: 124px;
  height: 29px;
  color: #f0f0f0;
  font-family: Poppins;
  font-weight: 600;
  font-size: 20px;
  line-height: 110%;
  display: flex;
  align-items: flex-end;
  justify-content: space-evenly;
`;

export const ProductPriceBuy = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 24px;
  gap: 24px;
`;

export const Button = styled.button`
  width: 100%;
  max-width: 296px;
  height: 66px;
  border-radius: 8px;
  padding: 10px 26px;
  background: #ff8310;
  box-shadow: 0px 50px 100px -20px #32325d40;

  :hover {
    cursor: pointer;
  }

  p {
    font-family: Poppins;
    font-weight: 600;
    font-size: 16px;
    line-height: 140%;
    color: #ffffff;
  }
`;
