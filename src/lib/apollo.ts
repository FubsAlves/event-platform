import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client  = new ApolloClient({
    uri: process.env.CONTENT_API_KEY, // URI da API do GraphCMS(CONTENT_API)
    cache: new InMemoryCache(),
})