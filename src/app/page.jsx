import Image from 'next/image'
import Link from "next/link"

export default function Home() {
  return (
    <>
      <h1>HOME</h1>

      <div>
        <ul>
          <li><Link href="/produtos/tenis">TÊNIS</Link></li>
          <li><Link href="/produtos/meia">MEIAS</Link></li>
          <li><Link href="/produtos/camisa">CAMISAS</Link></li>
        </ul>
      </div>
    </>
  )
}
