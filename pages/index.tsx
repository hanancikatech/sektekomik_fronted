import { useQuery } from '@apollo/client';
import { Card, CardImage } from '../components'
import {MANGA_QUERY} from "../query/manga"
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

const Home = () => {
  const {data , loading } = useQuery<Mangas>(MANGA_QUERY) 

  if (loading) {
    return <div> loading ... </div> 
  }
  return (
    <Card title={'Latest Post'} renderProps={
      <>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {data?.mangas.nodes.map((manga) => (
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


export default Home
