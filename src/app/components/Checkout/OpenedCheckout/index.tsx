import { Container, Top } from "./styles";
import Image from "next/image";
import backArrow from "/public/BackArrow.svg";
import { useDispatch, useSelector } from "react-redux";
import { closeCheckout } from "@/lib/features/checkout/checkoutSlice";
import { AppDispatch, RootState } from '@/lib/store';

export default function OpenedCheckout() {
  const dispatch = useDispatch<AppDispatch>();
  const isOpen = useSelector((state: RootState) => state.checkout.isOpen);

  return (
    <Container $isOpen={isOpen}>
      <Top>
        <Image src={backArrow} alt="BackArrow" onClick={() => dispatch(closeCheckout())} />
        <p>Mochila de Compras</p>
      </Top>
    </Container>
  );
}