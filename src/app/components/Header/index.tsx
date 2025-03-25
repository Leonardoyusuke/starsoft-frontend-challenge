import Image from "next/image"
import logo from "/public/logo.svg"
import { Container,LogoWrapper } from "./styles"
import CheckOut from "../Checkout"

export default function Header(){
    return(
        <Container >
            <LogoWrapper>
                <Image src={logo} alt={"logo"}/>
            </LogoWrapper>
           <CheckOut/>
        </Container>
    )
}