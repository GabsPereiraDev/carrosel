import { Container} from "./style";
import { ProductCard } from "./ProductCard";
import { TransactionCard } from "./TransactionCard";
import { useEffect, useState } from "react";
import { useWindowSize } from './../../../../hooks/useWindowSize';





export function Product() {

    const {width, height} = useWindowSize()


    const [count, setCount] = useState<number>(0)
    const [numberTransaction, setNumberTransaction] = useState<number>(0)
    

    
   useEffect(()=>{

    const handleClickright = () => {
        
        if(width>= 1367){
            setCount(-540 * numberTransaction)
        }
         else if(width> 850 && width<=950){
            setCount(-570 * numberTransaction)
        }else if (width<= 850 && width>450){
            setCount(-535 * numberTransaction)
        }else if (width<= 450 && width>390){
            setCount(-425 * numberTransaction)
        }else if (width<=390){
            setCount(-365 * numberTransaction)
        }else{
            setCount(-512 * numberTransaction)
        }
        


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