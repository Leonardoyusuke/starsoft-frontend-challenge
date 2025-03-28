'use client';

import styled from 'styled-components';

export const BoxItem = styled.div`
  width: 619px;
  height: 200px;
  border-radius: 8px;
`;

export const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px 30px 0px 30px;
  position: absolute;
  top: 288px;
  width: 620px;
  height: auto;
  border-radius: 5px;
  z-index: 10;
  gap: 24px;
`;

export const Item = styled.div`
  background: #2b2b2b;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 17px 30px 17px 30px;
  height: 161px;
  border-radius: 8px;
  gap: 10px;
  img {
    border-radius: 8px;
  }
`;

export const H1 = styled.h1`
  width: auto;
  height: 25px;
  font-family: Poppins;
  font-weight: 500;
  font-size: 18px;
  line-height: 140%;
  letter-spacing: 0%;
  color: #ffffff;
`;
export const H2 = styled.h2`
  width: auto;
  height: auto;
  font-family: Poppins;
  font-weight: 300;
  font-size: 12px;
  line-height: 12px;
  letter-spacing: 0px;
  color: #cccccc;
`;
export const ItemPrice = styled.div`
  display: flex;
  align-items: center;
  width: auto;
  height: 29px;
  gap: 10px;
  font-family: Poppins;
  font-weight: 600;
  font-size: 20px;
  line-height: 110.00000000000001%;
  letter-spacing: 0%;
  color: #f0f0f0;
`;

export const ItemInfo = styled.div`
  width: 367px;
  height: 160px;
  display: flex;
  flex-direction: column;
  gap: 10px;
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
  width: 105%;
  display: flex;
  justify-content: space-between;
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
  padding: 0px;
  background: #ff8310;
  border: none;
  color: white;
  cursor: pointer;
`;
export const Total = styled.div`
  width: 579px;
  height: 34px;
  display: flex;
  margin: auto;
  align-items: center;
  justify-content: flex-end;
  gap: 340px;
  h1 {
    width: 73px;
    height: 26px;
    font-family: Poppins;
    font-weight: 700;
    font-size: 24px;
    line-height: 26px;
    letter-spacing: -1px;
    text-transform: uppercase;
    color: #ffffff;
  }
  div {
    gap: 10px;
    display: flex;
    align-items: center;
    font-family: Poppins;
    font-weight: 600;
    font-size: 24px;
    line-height: 110.00000000000001%;
    letter-spacing: 0%;
    color: #f0f0f0f0;
  }
`;

export const BuyButton = styled.button`
  width: 620px;
  height: 81px;
  gap: 10px;
  border-radius: 8px;
  padding-top: 10px;
  padding-right: 26px;
  padding-bottom: 10px;
  padding-left: 26px;
  background-color: #ff8310;
  p {
    font-family: Lato;
    font-weight: 700;
    font-size: 16px;
    line-height: 140%;
    letter-spacing: 0%;
    width: 155;
    height: 22;
    color: #ffffff;
  }
`;
