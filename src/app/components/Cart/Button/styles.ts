'use client'

import styled from "styled-components"
import { IPercentageProps } from "@/lib/types/product"

export const BoxButton = styled.div`
    width: 403;
    height: 107;
    gap: 11px;
    display: flex;
    margin-top: 100px;
    flex-direction: column;
    align-items: center;
    `

export const Button1 = styled.button`
    width: 403px;
    height: 86px;
    border-radius: 8px;
    background-color: #393939;
p{
    width: 149;
    height: 26;
    font-family: Poppins;
    font-weight: 600;
    font-size: 20px;
    line-height: 26px;
    letter-spacing: 0px;
    color: #FFFFFF;
}`

export const Line = styled.div`
    position: relative;
    width: 403px;
    height: 10px;
    border-radius: 8px;
    gap: 8px;
    background-color: #393939;
`

export const Percentage = styled.div<IPercentageProps>`
    border-radius: 8px;
    height: 10px;
    width: ${props => props.percent}%;
    max-width: 100%;
    background-color: #FF8310;
`