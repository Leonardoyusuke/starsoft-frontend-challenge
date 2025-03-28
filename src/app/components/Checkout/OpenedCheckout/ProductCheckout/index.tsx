'use client';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@/lib/store';
import { decreaseItemQuantity, addItem, removeItem } from '@/lib/features/cart/cartSlice';
import Image from 'next/image';
import Eth from '/public/Eth.svg';
import TrashCan from '/public/TrashCan.svg';
import {
  BoxItem,
  Button,
  Item,
  ItemInfo,
  QuantityControls,
  Total,
  ItemsContainer,
  ItemPrice,
  Delet,
  H2,
  H1,
  BoxQuantity,
  BuyButton,
} from './styles';
import { useState } from 'react';

export default function ProductCheckout() {
  const dispatch = useDispatch<AppDispatch>();
  const items = useSelector((state: RootState) => state.cart.items);
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const [finish, setFinish] = useState(false);

  return (
    <>
      <ItemsContainer>
        {items.map((item) => (
          <BoxItem key={item.id}>
            <Item>
              <Image src={item.image} alt={item.name} width={139} height={139} />
              <ItemInfo>
                <H1>{item.name}</H1>
                <H2> {item.description}</H2>
                <ItemPrice>
                  <Image src={Eth} alt={'Eth'} /> {item.price} ETH
                </ItemPrice>
                <BoxQuantity>
                  <QuantityControls>
                    <Button onClick={() => dispatch(decreaseItemQuantity(item.id))}>-</Button>
                    <p>{item.quantity}</p>
                    <Button onClick={() => dispatch(addItem(item))}>+</Button>
                  </QuantityControls>
                  <Delet onClick={() => dispatch(removeItem(item.id))}>
                    <Image src={TrashCan} alt="TrashCan" />
                  </Delet>
                </BoxQuantity>
              </ItemInfo>
            </Item>
          </BoxItem>
        ))}
        <Total>
          <h1>Total</h1>{' '}
          <div>
            <Image src={Eth} alt={'Eth'} />
            {total.toFixed(2)} ETH
          </div>
        </Total>
        <BuyButton
          onClick={() => {
            setFinish(true);
          }}
        >
          {finish ? <p>COMPRA FINALIZADA!</p> : <p>FINALIZAR COMPRA</p>}
        </BuyButton>
      </ItemsContainer>
    </>
  );
}
