import { gql } from "@apollo/client";

export const MANGA_QUERY = gql`
      query mangas {
          mangas(last: 100) {
            nodes {
              title
              slug
              featuredImageId
              id
              mangaId
              dateGmt
              featuredImage {
                node {
                  mediaItemId
                  sourceUrl
                  uri
                  title
                }
              }
            }
          }
      }
`
