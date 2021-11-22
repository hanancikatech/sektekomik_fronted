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
  posts: Post[]
}


interface Post {
  title: string
}

interface Media {
  original_url: string
}


interface Category {
  name: string
}

const Home: NextPage<Response> = ({ mangas }) => {
  return (
    <>
      <Head>
        <title> Homra </title>
      </Head>
      <div className="alert alert-warning">

        <div className="flex-1">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-6 h-6 mx-2 stroke-current">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
          </svg>
          <label>Selmat Datang !</label>
        </div>
      </div>

      <Card title={'Latest Post'} renderProps={
        <>
          <Head>
            {mangas.map((manga) => (
              <meta property="og:title" content={manga.title} key={manga.description} />
            ))}
          </Head>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 ">
            {mangas.map((manga, index) => (
              <CardImage
                key={index}
                title={manga.title}
                image={manga.media[0].original_url}
                posts={manga.posts}
              />
            ))}
          </div>
        </>
      } />

      <Card title={'Project Update'} renderProps={
        <>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 ">
            {mangas.map((manga, index) => (
              <CardImage
                key={index}
                title={manga.title}
                image={manga.media[0].original_url}
                posts={manga.posts}
              />
            ))}
          </div>
        </>
      } />
    </>
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
