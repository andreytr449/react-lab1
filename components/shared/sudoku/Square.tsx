type Props = {
    value: number | null;
    setInputValue: (value: string, rowIndex :number, colIndex: number) => void
    rowIndex: number,
    colIndex: number,
}

export default function Square({value, setInputValue, rowIndex, colIndex}: Props) {


    return (
        <div
            className={`h-20 bg-[#3a3a3c]  flex justify-center items-center border-2 border-[#1c1c1e] text-[#f2f2f7] text-xl ${
                value !== null ? "bg-gray-200 font-bold" : "bg-white"
            }`}
        >
            {value !== null ? value :
                <input className='w-full h-full bg-[#3a3a3c] cursor-pointer text-center'
                       onChange={(e) => setInputValue(e.target.value, rowIndex, colIndex)}
                />

            }
        </div>
    )
}