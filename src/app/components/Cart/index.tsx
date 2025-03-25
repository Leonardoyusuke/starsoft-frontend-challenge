import Image from "next/image"
import bag from "/public/bag.svg"
import { Container ,BagWrapped } from "./styles"

export default function Cart(){

    return(
        <Container>
            <BagWrapped>
                <Image src={bag} alt={"bag"}/>
                <text>0</text>
            </BagWrapped>
        </Container>
    )
}