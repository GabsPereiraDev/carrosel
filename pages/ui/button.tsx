
import { Button } from "./style"

interface IButton {
    position: string;
    width: string;
    height: string;
    icon: React.ReactNode;
    onClick: ()=>void
}



export function ButtonUI({
    width,height,position, icon, onClick
}:IButton){

  

    return (
        <Button position={position} width={width} height={height} onClick={onClick}>
            {icon}
        </Button>
    )
}