'use client';

import styled from 'styled-components';

export const BagWrapped = styled.div.attrs({ role: 'button' })`
  position: absolute;
  top: 23.5px;
  right: 63px;
  width: 54px;
  height: 33px;
  display: flex;
  padding: 10px;
  align-items: flex-end;
  gap: 9px;
  cursor: pointer;
  img {
    width: 33px;
    height: 33px;
  }
  p {
    width: 12px;
    height: 26px;
    font-family: 'IBM Plex Sans', sans-serif;
    font-weight: 400;
    font-size: 20px;
    line-height: 100%;
    letter-spacing: -0.29px;
    text-align: center;
    color: white;
  }
`;
