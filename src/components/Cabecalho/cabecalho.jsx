import Image from 'next/image'
import Link from "next/link"

export default function Cabecalho() {
  return (
    <>
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
