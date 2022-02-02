import { Container } from "./styled";

interface ITimer{
    timer?:string;
}




export  function TimerCarrosel({
    timer
}:ITimer){
    return(
        <Container>Finaliza em: {timer}</Container>
    )
}