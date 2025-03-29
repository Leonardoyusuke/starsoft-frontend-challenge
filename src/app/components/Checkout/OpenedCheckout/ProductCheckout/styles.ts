'use client';

import styled from 'styled-components';

export const BoxItem = styled.div`
  width: 619px;
  height: 200px;
  border-radius: 8px;

  @media (max-width: 768px) {
    height: auto;
    width: 100%;
  }
`;

export const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 30px;
  position: absolute;
  top: 288px;
  width: 620px;
  height: auto;
  border-radius: 5px;
  z-index: 10;
  gap: 24px;

  @media (max-width: 768px) {
    padding: 0px;
    width: 100%;
    position: static;
    margin-top: 150px;
  }
`;

export const Item = styled.div`
  background: #2b2b2b;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 17px 30px;
  height: 161px;
  border-radius: 8px;
  gap: 10px;

  img {
    border-radius: 8px;
    width: 80px;
    height: 80px;
  }

  @media (max-width: 768px) {
    align-items: flex-start;
    height: auto;
    gap: 12px;
  }
`;

export const H1 = styled.h1`
  font-family: Poppins;
  font-weight: 500;
  font-size: 18px;
  line-height: 140%;
  color: #ffffff;
`;

export const H2 = styled.h2`
  font-family: Poppins;
  font-weight: 300;
  font-size: 11px;
  line-height: 12px;
  color: #cccccc;
`;

export const ItemPrice = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: Poppins;
  font-weight: 600;
  font-size: 20px;
  color: #f0f0f0;
  @media (max-width: 768px) {
    margin-top: 20px;
    img {
      width: 30px;
      height: 30px;
    }
  }
`;

export const ItemInfo = styled.div`
  width: 367px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const QuantityControls = styled.div`
  width: 115px;
  height: 49px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  background-color: #232323;

  p {
    color: #ffffff;
  }
`;

export const BoxQuantity = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

export const Button = styled.button`
  background-color: #232323;
  height: 49px;
  width: 44px;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;

export const Delet = styled.button`
  border-radius: 100%;
  padding: 0;
  background: #ff8310;
  border: none;
  color: white;
  cursor: pointer;
  @media (max-width: 768px) {
    margin-top: -40px;
    width: auto;
    height: auto;
  }
`;

export const Total = styled.div`
  width: 579px;
  display: flex;
  margin: auto;
  align-items: center;
  justify-content: space-between;
  gap: 24px;

  h1 {
    font-family: Poppins;
    font-weight: 700;
    font-size: 24px;
    color: #ffffff;
  }

  div {
    display: flex;
    align-items: center;
    gap: 10px;
    font-family: Poppins;
    font-weight: 600;
    font-size: 24px;
    color: #f0f0f0f0;
  }

  @media (max-width: 768px) {
    width: 90%;
    align-items: flex-end;
    gap: 8px;
  }
`;

export const BuyButton = styled.button`
  width: 620px;
  height: 81px;
  border-radius: 8px;
  padding: 10px 26px;
  background-color: #ff8310;

  p {
    font-family: Lato;
    font-weight: 700;
    font-size: 16px;
    color: #ffffff;
  }

  @media (max-width: 768px) {
    padding: 10px;
    margin-left: 5%;
    width: 90%;
  }
`;
