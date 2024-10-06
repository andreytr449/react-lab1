type Props = {
    handleCardClick: (id:number) => void
    id:number,
    isFlipped: boolean
    src: string
}

export default function Card({handleCardClick, id, isFlipped, src }:Props){
    return (
        <div
            className="relative w-32 h-32 cursor-pointer"
            onClick={() => handleCardClick(id)}
        >
            {isFlipped ? (
                    <img src={src} alt="card" className="w-full h-full rounded-lg"/>
                ) :
                <div
                    className={`absolute w-full h-full transition-transform duration-500 transform`}>
                    <div className="absolute w-full h-full bg-blue-600 rounded-lg" />
                </div>
            }
        </div>
    )
}
