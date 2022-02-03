import Link from "next/link";
import { Container } from "./style";

interface IIcons{
    icon:React.ReactNode;
    url:string;   
}







export function Icons({icon, url}:IIcons){
    return(
        <Container>

            <Link href={url}>
                {icon}
            </Link>

        </Container>
    )
    
}