import React from "react"

interface Post {
    title: string
}

interface CardImageProps {
    title: string
    image: string
    posts?: Post[]
}

const CardImage: React.FC<CardImageProps> = ({ title, image, posts }) => {
    return (
        <div className="min-w-full">
            <div className="flex">
               <img className="bg-cover object-cover mask mask-hexagon-2 rounded h-24 w-24" src={image} alt={title} />
                <div className="flex flex-col">
                    <span className="ml-2">{title}</span>
                    {posts?.map((value) => (
                        <span className="ml-2">{value.title ?? 'title'}</span>
                    ))}
                </div>
            </div>
        </div>
    )
}

export {
    CardImage
}
