import Image from 'next/image'
import { Montserrat, Open_Sans } from 'next/font/google'
import Link from 'next/link'
import Header from '@/components/Header'

const montserrat = Montserrat({ subsets: ['latin'] })
const open_sans = Open_Sans({ subsets: ['latin'] })
import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query'
import Products from '@/components/Products'


export default function Home(props) {


  // console.log(props.dehydratedState.queries[0]?.state.data);
  let products = props.dehydratedState.queries[0]?.state.data
  return (
    <>
      <Header />
      <Products products={products} />
    </>
  )
}


export async function getServerSideProps() {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery({
    queryKey: ['products'],
    queryFn: () =>
      fetch('https://fakestoreapi.com/products').then(
        (res) => res.json(),
      ),
  })
  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    }
  }
}
