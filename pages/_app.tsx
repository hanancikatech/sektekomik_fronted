import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Navbar } from '../Layouts'
import {  ApolloProvider } from "@apollo/client"
import { useApollo } from '../config/apollo';

function MyApp({ Component, pageProps }: AppProps) {
  const client = useApollo()
  return (
    <div className='dark:bg-gray-800 min-h-screen min-w-screen'>
      <Navbar />
      <div className="container mx-auto">
        <ApolloProvider client={client}>
          <Component {...pageProps} />
        </ApolloProvider>
      </div>
    </div>
  )
}

export default MyApp
