'use client';
import { BoxButton, Line, Percentage, Button1 } from './styles';
import { MouseEventHandler, useEffect, useState } from 'react';

interface ButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
  percentage: number;
}

export default function Button({ percentage, onClick }: ButtonProps) {
  const [allShowed, setAllShowed] = useState(false);

  useEffect(() => {
    if (percentage === 100 && !allShowed) {
      setAllShowed(true);
    }
  }, [percentage, allShowed]);

  return (
    <BoxButton>
      <Line>
        <Percentage percent={percentage} />
      </Line>
      <Button1 onClick={onClick}>
        {allShowed ? <p>Você já viu tudo</p> : <p>Carregar mais</p>}
      </Button1>
    </BoxButton>
  );
}
