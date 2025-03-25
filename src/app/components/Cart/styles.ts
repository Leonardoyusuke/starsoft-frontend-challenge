'use client'

import styled from "styled-components"

export const Container = styled.div`
position: absolute;
top: 23.5px;
width: 74px;
height: 53px;
right: 117px;
gap: 10px;
padding:10px;
`

export const BagWrapped = styled.div`
width: 54px;
height: 33px;
display: flex;
align-items: flex-end;
gap: 9px;
img{
    width: 33px;
    height: 33px;
}
text{
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
`