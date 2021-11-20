import type { GetStaticProps, NextPage } from 'next'
import { Card, CardImage } from '../components'
import { client, gql } from '../config/apollo';

type Node = {
  sourceUrl: string
}

type FeaturedImage = {
  node: Node
}

type Nodes = {
  id: string,
  title: string,
  dateGmt: string,
  featuredImage: FeaturedImage
}

interface Mangas {
  mangas: {
    nodes: Nodes[]
  }
}

const Home: NextPage<Mangas> = ({ mangas }) => {
  if (!mangas) {
    return <div>Loading...</div>
  }

  return (
    <Card title={'Latest Post'} renderProps={
      <>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {mangas.nodes.map(manga => (
            <CardImage
              key={manga.id}
              title={manga.title}
              image={manga.featuredImage.node.sourceUrl}
            />
          ))}
        </div>
      </>
    } />
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await client.query({
    query: gql`
      {
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
  });

  return {
    props: {
      mangas: data.mangas,
      validate: 1
    }
  }
}


export default Home
