import { ApolloClient, ApolloLink, concat, HttpLink, InMemoryCache } from "@apollo/client"


const httpLink = new HttpLink({ uri: 'http://sektekomik_backend.test/graphql', credentials: "include", });

const headerMiddleware = new ApolloLink((operation, forward) => {
  // add the authorization to the headers
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      "Access-Control-Allow-Origin": "*",
    }
  }));

  return forward(operation);
})

export const createApolloClient = () => {
  return new ApolloClient({
    ssrMode : true,
    link: concat(headerMiddleware, httpLink),
    cache: new InMemoryCache()
  })
}


export function useApollo() {
  const store = createApolloClient()
  return store;
}
