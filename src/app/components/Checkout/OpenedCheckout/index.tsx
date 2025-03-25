import { Container, Top, Itens } from "./styles";
import Image from "next/image";
import backArrow from "/public/BackArrow.svg"
import { useDispatch } from 'react-redux';
import { closeCheckout } from "@/lib/features/checkout/checkoutSlice";
import { AppDispatch } from '@/lib/store';

export default function OpenedCheckout() {
    const dispatch = useDispatch<AppDispatch>();

    return (
        <Container>
            <Top>
                <Image src={backArrow} alt={"BackArrow"} onClick={() => dispatch(closeCheckout())} />
                <text>Mochila de Compras</text>
            </Top>
            <Itens>

            </Itens>
        </Container>
    )
}