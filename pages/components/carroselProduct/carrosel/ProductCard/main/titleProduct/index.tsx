import { Title } from "./style";
import Link from 'next/link'

interface ITitle {
    title: string
}

export function TitleProduct({ title }: ITitle) {
    return (
        <Title><Link href=''>{title}</Link></Title>
    )
}