type Props = {
    children:React.ReactNode,
    value:string,
    onClick:(value:string) => void,
}

export default function CalculatorButton({children, value, onClick}:Props) {
    return (
        <div
            className={`bg-[#d1d1d6] rounded-full w-16 h-16 text-black flex justify-center items-center shadow-md shadow-[#8e8e93] ${value && 'transform transition-transform duration-200 active:scale-95 cursor-pointer ' }`}
            onClick={() => onClick(value)}
        >
            {children}
        </div>
    )
}