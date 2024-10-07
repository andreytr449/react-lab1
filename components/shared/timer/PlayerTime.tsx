type Props = {
    timeLeft:number,
    children:React.ReactNode
    isActive:boolean
}


export default function PlayerTime({timeLeft, children, isActive}:Props) {
    const formatTime = (seconds: number) => {
        const min = Math.floor(seconds / 60);
        const sec = seconds % 60;
        return `${min}:${sec < 10 ? '0' : ''}${sec}`;
    }


    return (
        <div className={`bg-gray-800 text-white text-3xl p-8 rounded-lg ${isActive ? 'border-2 border-violet-600' : ''}`}>
            <h2 className="mb-4">{children}</h2>
            <div>{formatTime(timeLeft)}</div>
        </div>
    )
}