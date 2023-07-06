import { Montserrat } from 'next/font/google'
import Link from 'next/link'


const montserrat = Montserrat({ subsets: ['latin'] })


export default function Footer() {
    return (
        <footer className='py-8 mt-16  bg-white/50 border-t border-tertiary/50'>
            <div className='container'>
                <h2 className={`text-3xl ${montserrat.className} font-bold text-primary after:content-['.'] after:text-secondary after:ml-1`}><Link href={"/"}>Online<span className='text-tertiary'>Store</span></Link></h2>
                <p className='text-caption text-sm'>© 2023 OnlineStore. All Rights Reserved.</p>
            </div>
        </footer>
    )
}