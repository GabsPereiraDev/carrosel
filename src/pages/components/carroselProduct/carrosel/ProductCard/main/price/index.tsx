import { OriginalPrice } from "./originalPrice";
import { PromotionPrice } from "./PromotionPrice";
import { Container } from "./style";

interface IPrice {
        original: number;
        promotion: number;
}

export function PriceProduct({ original, promotion }: IPrice) {
    return (
        <Container>
            <PromotionPrice price={promotion}/>
            <OriginalPrice original={original} promotion={promotion}/>
            
        </Container>
    )
}