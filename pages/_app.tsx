import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Navbar } from '../Layouts'
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client"

function MyApp({ Component, pageProps }: AppProps) {

  const client = new ApolloClient({
    uri: 'https://sektekomik.com/graphql',
    cache: new InMemoryCache()
  });

  return (
    <div className='dark:bg-gray-800 min-h-screen min-w-screen'>
      <div className="container mx-auto">
        <ApolloProvider client={client}>
          <Navbar />
          <Component {...pageProps} />
        </ApolloProvider>
      </div>
    </div>
  )
}

export default MyApp
