import { Container } from "./style";

interface IImage{
    url: string
}





export function ImageProduct({url}:IImage){
    return(

        <Container>

            <img src={url} alt=""  />

        </Container>

    )
}