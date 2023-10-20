import Image from 'next/image'
import Link from "next/link"

export default function Cabecalho() {
  return (
    <>
    <header className='bg-slate-800 text-white'>
      <h1 className='text-center text-3x1 font-extrabold'> Produtos </h1> 
      <hr className='bg-red-600 border-red-700'/>
        <nav className='menu'>
          <div>
            <ul>
              <li><Link href="/produtos/tenis">TÊNIS</Link></li>
              <li><Link href="/produtos/meia">MEIAS</Link></li>
              <li><Link href="/produtos/camisa">CAMISAS</Link></li>
              <li><Link href="/produtos/fazenda/loja/laticinios">QUEIJOS</Link></li>
            </ul>
          </div>
        </nav>
    </header>
    </>
  )
}
