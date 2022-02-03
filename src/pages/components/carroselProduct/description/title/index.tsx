import { Title } from "./style";

interface ITitle{
    title:string;
}




export function TitleCarrosel({
    title
}:ITitle){
    return(
        <Title>{title}</Title>
    )
}