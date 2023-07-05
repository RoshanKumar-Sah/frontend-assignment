import '@/styles/globals.css'

import React from 'react'

import {
  QueryClient,
  QueryClientProvider,
  Hydrate
} from '@tanstack/react-query'






export default function App({ Component, pageProps }) {

  const [queryClient] = React.useState(() => new QueryClient())
  return <QueryClientProvider client={queryClient}>
  <Hydrate state={pageProps.dehydratedState}>

    <Component {...pageProps} />
    </Hydrate>
    </QueryClientProvider>
}


