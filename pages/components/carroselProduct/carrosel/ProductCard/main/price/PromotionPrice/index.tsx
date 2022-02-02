import { Container } from "./style";

interface IPrice {
    price?: number
}

export function PromotionPrice({ price }: IPrice) {
    return (
        <Container>
            {price != undefined && (`${
                new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                }).format(price)
            }`)}
        </Container>
    )
}