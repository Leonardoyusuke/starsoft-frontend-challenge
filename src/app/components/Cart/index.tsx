import ProductsContainer from "@/lib/productContainer";
import Products from "./Products";
import { Container } from "./styles";

export default function Cart(){
    return(
      <Container>
        <ProductsContainer />
      </Container>
    )
}