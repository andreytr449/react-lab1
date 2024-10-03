type Props = {
    value:number,
    handleChange: (value:string) => void
}

export default function Range({value, handleChange}: Props) {
    return (
        <input
            type="range"
            min="0"
            max="100"
            value={value}
            onChange={(e) => handleChange(e.target.value)}
            className="w-64 h-2 bg-gray-200 rounded-lg cursor-pointer accent-blue-400"
        />
    )
}