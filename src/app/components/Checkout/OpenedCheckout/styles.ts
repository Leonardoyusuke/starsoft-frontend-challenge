'use client'

import styled from "styled-components"

interface ContainerProps {
    $isOpen: boolean;
  }
  
  export const Container = styled.div<ContainerProps>`
    position: absolute;
    right: 0px;
    top: 0px;
    width: 679px;
    height: 1117px;
    border-radius: 5px;
    background-color: #232323;
    z-index: 1;
  
    transition: transform 300ms ease-out, opacity 300ms ease-out;
    transform: ${({ $isOpen }) => ($isOpen ? 'translateX(0)' : 'translateX(100%)')};
    opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
    pointer-events: ${({ $isOpen }) => ($isOpen ? 'auto' : 'none')};
  `;

export const Top = styled.div`
position: relative;
img{
    position: absolute;
    width: 60px;
    height: 60px;
    top: 60px;
    left: 40px;
}
p{
    position: absolute;
    width: 253px;
    height: 26px;
    top: 85px;
    right: 184px;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 24px;
    line-height: 110%;
    letter-spacing: 0;
    color: #FFFFFF;
}
`