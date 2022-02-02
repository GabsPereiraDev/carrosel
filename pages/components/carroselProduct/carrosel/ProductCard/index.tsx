import { useState } from "react"
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai"
import { product } from "../../../../product"

import { ButtonUI } from "../../../../ui/button"
import { AvaliateProduct } from "./avaliate"
import { ImageProduct } from "./header/image"
import { PromotionProduct } from "./header/promotion"
import { MarkProduct } from "./main/mark"
import { PriceProduct } from "./main/price"
import { TitleProduct } from "./main/titleProduct"
import { Card } from "./styled"

interface IProductCard{
    count:number
}



export function ProductCard({count}:IProductCard) {

   


    return (
        <>
           

            {product.map((item) => {
                return (
                    <Card translate={count}>
                        <header>
                            <ImageProduct url={item.url} />
                            <PromotionProduct promotion="17%" />
                        </header>
                        <main>
                            <MarkProduct mark={item.mark} />
                            <hr />
                            <PriceProduct original={item.price.original} promotion={item.price.promotion} />
                            <TitleProduct title={item.title} />
                        </main>
                        <AvaliateProduct avaliate={item.avaliate} />

                    </Card>
                )
            })
            }

           
        </>
    )
}