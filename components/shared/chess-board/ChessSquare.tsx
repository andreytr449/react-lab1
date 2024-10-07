type Props = {
    row:number
    col:number
    handleCellClick(row:number, col:number):void
    selectedCell:{ row: number; col: number } | null

}

export default function ChessSquare({row, col, handleCellClick, selectedCell}: Props) {
    return (
        <div
            onClick={() => handleCellClick(row, col)}
            className={`w-16 h-16 flex items-center justify-center cursor-pointer
                ${selectedCell?.row === row && selectedCell?.col === col
                ? 'bg-green-400'
                : (row + col) % 2 === 0
                    ? 'bg-white'
                    : 'bg-gray-600'
            }`}
        >
        </div>
    )
}