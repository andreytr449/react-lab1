type Props = {
    gameBoardValue:  (null | string)[][]
    onCellClick: (row:number, col:number) => void
}

export default function Game({gameBoardValue, onCellClick}:Props){
    return (
        <div className='grid grid-cols-3 gap-1 my-3 px-28'>
            {gameBoardValue.map((row, rowIndex) => (
                row.map((cell, colIndex) => (
                    <div
                        key={`${rowIndex}-${colIndex}`}
                        onClick={() => onCellClick(rowIndex, colIndex)}
                        className='h-24 flex items-center justify-center border-2 border-black text-xl cursor-pointer rounded-lg'
                    >
                        {cell}
                    </div>
                ))
            ))}
        </div>
    )
}