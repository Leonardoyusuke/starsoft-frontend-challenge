'use client';
import { BoxButton, Line, Percentage, Button1 } from "./styles";
import { MouseEventHandler } from 'react';

interface ButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export default function Button({ onClick }: ButtonProps) {
  return (
    <BoxButton>
      <Line> 
        <Percentage />
      </Line>
      <Button1 onClick={onClick}>
        <p>Carregar mais</p>
      </Button1>
    </BoxButton>
  );
}