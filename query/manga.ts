import { gql } from "@apollo/client";

export const MANGA_QUERY = gql`
    query Manga {
      post(
        where: {dateQuery: {column: MODIFIED}, orderby: {field: DATE, order: DESC}}
      ) {
        edges {
          node {
            id
            title
            dateGmt
          }
        }
      }
      mangas(last: 200) {
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
