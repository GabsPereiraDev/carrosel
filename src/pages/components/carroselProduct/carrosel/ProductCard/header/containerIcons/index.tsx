import { Icons } from "./icons";
import { Container } from "./style";
import {BsBagCheck,BsEye} from 'react-icons/bs'

export function ContainerIcons(){
    return (
        <Container className='ContainerIcons'> 
            <Icons url="https://reactstorefronts.com/" icon={<BsBagCheck/>} />
            <Icons url="https://reactstorefronts.com/" icon={<BsEye/>} />
        </Container>
    )
}