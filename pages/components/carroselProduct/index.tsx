import { DescriptionTitle } from "./description";
import { Product } from "./carrosel";
import { Container } from "./style";
import { product } from "../../api/product";



export function CarroselProduct() {



    return (
        <Container>
            <DescriptionTitle />
            <Product/>
        </Container>
    )

}