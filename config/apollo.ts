import { ApolloClient, InMemoryCache , gql} from "@apollo/client";

const client = new ApolloClient({
    uri: 'https://sektekomik.com/graphql',
    cache: new InMemoryCache()
});

export {
    gql,
    client
}
