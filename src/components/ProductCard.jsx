import { Montserrat, Open_Sans } from 'next/font/google'
import Image from 'next/image'
import { AiFillStar } from "react-icons/ai"


const montserrat = Montserrat({ subsets: ['latin'] })
const open_sans = Open_Sans({ subsets: ['latin'] })

export default function ProductCard({ product }) {
    return (
        <div className="w-full h-full  border-2 border-gray-400 shadow rounded-xl  hover:border-primary" key={product.id}>
            <div className="h-3/5 relative">
                <Image src={product.image} height={200} width={200} alt="productImage" className="w-full h-full object-fill p-8 rounded-md" />
                <div className="absolute flex items-center gap-1 top-8 right-8 px-2 py-1 rounded-md text-white bg-primary"><AiFillStar className="inline-block" /><p>{product.rating.rate}</p></div>
            </div>
            <div className="px-8 flex flex-col justify-around  h-2/5 ">
                <div>
                    <h3 className={` text-heading2 text-lg font-semibold ${montserrat.className}  line-clamp-2`}>{product.title}</h3>
                </div>
                <div className="flex justify-between">
                    <p className={`text-heading1 text-2xl font-bold {open_sans.className}`}>Rs.&nbsp;{product.price}</p>
                    <div className={`py-1 px-2 h-fit font-medium rounded-md bg-primary text-white border hover:border-primary   hover:bg-white hover:text-primary ${open_sans.className}`}>Add&nbsp;to&nbsp;cart</div>
                </div>
            </div>
        </div>
    )
}