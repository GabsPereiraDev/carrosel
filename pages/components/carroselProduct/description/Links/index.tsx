import Link from 'next/link'


interface ILinks{
    link:string;
}


export function LinksCarrosel({link}:ILinks){
    
    return(
        <div><Link href={`${link}`}>Veja Todos</Link></div>
    )
}