
interface CardProps {
    title : string,
    renderProps: React.ReactChild
}

export const Card : React.FC<CardProps> = ({title , renderProps}) => {
    return (
        <div className="card shadow-lg">
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                {renderProps}
            </div>
        </div>
    )
}
