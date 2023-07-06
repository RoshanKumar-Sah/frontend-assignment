import '@/styles/globals.css'

import React from 'react'

import {
  QueryClient,
  QueryClientProvider,
  Hydrate
} from '@tanstack/react-query'

import { Provider } from 'react-redux'
import store from '../redux/store'




function App({ Component, pageProps }) {

  const [queryClient] = React.useState(() => new QueryClient())

  return <QueryClientProvider client={queryClient}>
    <Hydrate state={pageProps.dehydratedState}>
      <Component {...pageProps} />
    </Hydrate>
  </QueryClientProvider>
}

const WithReduxProvider = (App) => {

  function Wrapper(props) {
    return <>
      <Provider store={store}>
        <App {...props} />
      </Provider>
    </>
  }
  return Wrapper
}

export default WithReduxProvider(App)


