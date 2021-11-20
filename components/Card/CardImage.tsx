import React from "react"

interface CardImageProps {
    title: string
    image: string
}

const CardImage: React.FC<CardImageProps> = ({ title, image }) => {
    return (
        <div className="card relative shadow-xl w-auto h-auto">
            <img className="w-full min-h-full" src={image} alt={title} />
            <div className="bg-gray-500 bottom-0 w-full h-12 text-center absolute">
                <h2 className="bottom-0 absolute mx-2 mb-2 font-bold text-sm text-white"> {title} </h2>
            </div>
        </div>
    )
}

export {
    CardImage
}
