import { Container } from "./style";

import { LinksCarrosel } from "./Links";
import {TimerCarrosel} from "./timer";
import {TitleCarrosel} from "./title";

export function DescriptionTitle(){


    
    


  
    return(
        <Container>
            <div className='title'>
                <TitleCarrosel title='Produtos Diversos'/>
                <TimerCarrosel timer='11:12:24'/>
            </div>
            <LinksCarrosel link='https://www.notion.so/Componente-Carrossel-30b46f8321f848858d92b434fe9eb1ef'/>
        </Container>
    )
}