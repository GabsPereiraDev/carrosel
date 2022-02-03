
import { Container } from "./style";

interface IPromotion {

    promotion?:string;

}

export function PromotionProduct({
    promotion
}:IPromotion){
    return(
        <Container>
            -{promotion}
        </Container>
    )
}