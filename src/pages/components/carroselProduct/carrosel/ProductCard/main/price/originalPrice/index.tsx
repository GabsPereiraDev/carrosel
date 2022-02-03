import { useEffect, useState } from "react";
import { Container } from "./style";


interface IPrice {
    original: number;
    promotion: number;
}

export function OriginalPrice({ original, promotion }: IPrice) {

    const [pricePromotion, setPricePromotion] = useState<boolean>(false);
    const [procePorcentage, setPricePorcentage] = useState<number>()

    const ispromotion = promotion

    useEffect(() => {
        ispromotion != undefined && (setPricePromotion(true));
        ispromotion != undefined && (setPricePorcentage(100 - Math.floor(promotion * 100 / original)));
    }, [])

    return (
        <>
            <Container promotion={pricePromotion}>
                {new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                }).format(original)}
            </Container>
            <span>{procePorcentage != undefined && (`-${procePorcentage}%`)}</span>
        </>

    )
}