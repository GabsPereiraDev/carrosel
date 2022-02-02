import { Button } from "./style";

interface ITransaction {
    onClick: ()=>void
}

export function TransactionCard({onClick}:ITransaction){
    return (
        <Button onClick={onClick}/>
    )
}