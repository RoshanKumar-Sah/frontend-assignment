import { Montserrat, Open_Sans } from 'next/font/google'
import Link from 'next/link'
const montserrat = Montserrat({ subsets: ['latin'] })



export default function Nav(){
    return(
        
            <nav className='sm:w-full'>
    <ul className={`flex flex-col sm:flex-row  items-start sm:items-center py-4 mt-12 sm:mt-0 gap-8 uppercase ${montserrat.className} font-medium`}>
    <li className='hover:text-primary transition duration-150 ease-in-out hover:scale-110 hover:border-b border-primary'>
      <Link href={"/"}>Home</Link>
    </li>
      <li className='hover:text-primary transition duration-150 ease-in-out hover:scale-110 hover:border-b border-primary'>
      <Link href={"/search"}>Search&nbsp;Page</Link>
      </li>
    </ul>
   </nav>
        
    )
}