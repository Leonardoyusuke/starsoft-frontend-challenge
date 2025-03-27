'use client'

import Image from "next/image";
import styled from "styled-components";


export const Container = styled.div`
    margin-top: 190px;
    justify-self: center;
    background-color: #232323;
    height: 100%;
    width: 1455px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 25px;
    justify-items: center;
    position: relative;
`

export const Product = styled.div`
    width: 345px;
    height: 555px;
    border-radius: 8px;
    position: relative;
    background-color: #191A20;
    display: flex;
    flex-direction: column; 
`
export const ProductImage = styled(Image)`
    margin: 24.5px;
    align-self: center;
    border-radius: 4px;
`
export const ProductName = styled.p`
    width: 158px;
    height: 25px;
    font-family: Poppins;
    font-weight: 500;
    font-size: 18px;
    line-height: 140%;
    letter-spacing: 0%;
    color: #FFFFFF;
`
export const ProductDescription = styled.p`
    width: 296px;
    height: 12px;
    font-family: Poppins;
    font-weight: 300;
    font-size: 12px;
    line-height: 12px;
    letter-spacing: 0px;
    color: #CCCCCC;
`
export const ProductBottom = styled.div`
    width: 345px;
    height: 196px;
    gap: 19px;
    display: flex;
    flex-direction: column;
    margin: 0px 0px 0px 24px;
    
`
export const ProductPrice = styled.div`
    width: 124px;
    height: 29px;
    color: #F0F0F0 ;
    font-family: Poppins;
    font-weight: 600;
    font-size: 20px;
    line-height: 110.00000000000001%;
    letter-spacing: 0%;
    margin-top: 10px;
    display: flex;
    align-items: flex-end;
    justify-content: space-evenly;
    flex-direction: row;
`

export const ProductPriceBuy = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 24px;
    gap: 24px;    
`

export const Button = styled.button`
    width: 296px;
    height: 66px;
    gap: 10px;
    border-radius: 8px;
    padding-top: 10px;
    padding-right: 26px;
    padding-bottom: 10px;
    padding-left: 26px;
    background: #FF8310;
    box-shadow: 0px 50px 100px -20px #32325D40;
    p{
        width: 81;
        height: 22;
        font-family: Poppins;
        font-weight: 600;
        font-size: 16px;
        line-height: 140%;
        letter-spacing: 0%;
        color: #FFFFFF;
    }
`