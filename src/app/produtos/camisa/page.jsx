import Link from "next/link"
import Image from "next/image"
export default function Camisa(){
    return(
        <div>
            <h1>CAMISAS</h1>

            <figure>
                <Image src="/t-shirt.png" alt="Camiseta" width={531} height={640} />
            </figure>
            
            <p><strong>DESCRIÇÃO: </strong></p>
            
            <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, at similique libero maxime iste veniam quidem suscipit? Minus veniam reprehenderit obcaecati dolores commodi, ipsum possimus repellat aperiam, odit vero ad.</p>

                <p><Link href="/">Voltar</Link></p>
            </div>
        </div>
    )
}