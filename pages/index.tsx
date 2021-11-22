import { GetStaticProps, NextPage } from 'next'
import { Card, CardImage } from '../components'
import { createApolloClient } from '../config/apollo'
import Head from "next/head"



import MANGA_QUERY from '../query/manga.graphql'

interface Response {
  mangas: Manga[]
}

interface Manga {
  id: string | number
  title: string,
  description: string,
  release: string
  categories: Category[]
  media: Media[]
}


interface Media {
  original_url: string
}


interface Category {
  name: string
}

const Home: NextPage<Response> = ({ mangas }) => {
  return (
    <Card title={'Latest Post'} renderProps={

      <>
        <Head>
          {mangas.map((manga) => (
            <meta property="og:title" content={manga.title} key={manga.description} />
          ))}
        </Head>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-12 gap-6">
          {mangas.map((manga, index) => (
            <CardImage
              key={index}
              title={manga.title}
              image={manga.media[0].original_url}
            />
          ))}
        </div>
      </>
    } />
  )
}



export const getStaticProps: GetStaticProps = async () => {
  const client = createApolloClient()
  const { data } = await client.query({
    query: MANGA_QUERY
  })

  return {
    props: {
      mangas: data.mangas.data,
    },
    revalidate: 1,
  }
}

export default Home
