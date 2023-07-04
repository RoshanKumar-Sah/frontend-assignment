

import { Montserrat, Open_Sans } from 'next/font/google'
import Link from 'next/link'


const montserrat = Montserrat({ subsets: ['latin'] })


export default function Header(){
    return(
        <header className='container py-8 flex flex-col gap-4 items-center sm:flex-row sm:justify-between'>
      <h2 className= {`text-3xl ${montserrat.className} font-bold text-primary after:content-['.'] after:text-secondary after:ml-1`}><Link href={"/"}>Online<span className='text-tertiary'>Store</span></Link></h2>
   <nav className='sm:w-2/4'>
    <ul className={`flex items-center py-1 gap-8 uppercase ${montserrat.className} font-medium`}>
    <li className='hover:text-primary transition duration-150 ease-in-out hover:scale-110 hover:border-b border-primary'>
      <Link href={"/"}>Home</Link>
    </li>
      <li className='hover:text-primary transition duration-150 ease-in-out hover:scale-110 hover:border-b border-primary'>
      <Link href={"/search"}>Search&nbsp;Page</Link>
      </li>
    </ul>
   </nav>
    </header>
    )
}