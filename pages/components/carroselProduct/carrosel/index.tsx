import { Container} from "./style";
import { ProductCard } from "./ProductCard";
import { ButtonUI } from "../../../ui/button";
import { AiOutlineArrowLeft,AiOutlineArrowRight } from "react-icons/ai";
import { TransactionCard } from "./TransactionCard";
import { useEffect, useState } from "react";
import { product } from "../../../api/product";




export function Product() {

    


    const [count, setCount] = useState<number>(0)
    const [numberTransaction, setNumberTransaction] = useState<number>(0)
    

    
   useEffect(()=>{

    const handleClickright = () => {
        setCount(-32 * numberTransaction)
    }

    handleClickright()

    console.log(count)

   },[numberTransaction])






    return (
 
        <Container>
            <article><ProductCard count={count}/></article>
            <div className="transaction">
                <TransactionCard onClick={()=>setNumberTransaction(0)}/>
                <TransactionCard onClick={()=>setNumberTransaction(1)}/>
                <TransactionCard onClick={()=>setNumberTransaction(2)}/>
                <TransactionCard onClick={()=>setNumberTransaction(3)}/>
                <TransactionCard onClick={()=>setNumberTransaction(4)}/>
            </div>
        </Container>
        
   
    )
}