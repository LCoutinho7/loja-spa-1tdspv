import Link from "next/link"
import Image from "next/image"
export default function Meia(){
    return(
        <div>
            <h1>MEIAS</h1>
            
            <figure>
                <Image src="/socks.png" alt="Camiseta" width={640} height={575} />
            </figure>
            
            <p><strong>DESCRIÇÃO: </strong></p>
            
            <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, at similique libero maxime iste veniam quidem suscipit? Minus veniam reprehenderit obcaecati dolores commodi, ipsum possimus repellat aperiam, odit vero ad.</p>

                <p><Link href="/">Voltar</Link></p>
            </div>
        </div>
    )
}