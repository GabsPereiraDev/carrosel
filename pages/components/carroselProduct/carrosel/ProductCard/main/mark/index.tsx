import { Title } from "./style";

interface ITitle{
    mark:string
}

export function MarkProduct({mark}:ITitle){
    return(
        <Title>{mark}</Title>
    )
}