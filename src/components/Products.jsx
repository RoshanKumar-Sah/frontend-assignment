import Image from "next/image";
import { Montserrat, Open_Sans } from 'next/font/google'
import ProductCard from "./ProductCard";


const montserrat = Montserrat({ subsets: ['latin'] })
const open_sans = Open_Sans({ subsets: ['latin'] })



export default function Products({ products }) {
    console.log(products);

    return (
        <section className="py-8">
            <div className="container">
                <h1 className={`text-2xl font-bold text-heading1 py-8 ${montserrat.className}`}>Products</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {
                        products?.map(product => {
                            return <ProductCard product={product} />
                        })
                    }
                </div>
            </div>
        </section>
    )
}