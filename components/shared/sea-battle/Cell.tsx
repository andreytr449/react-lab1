type Props = {
    row: number
    col: number
    Attack: (row:number,col:number) => void
    status:string
}

export default function Cell({ Attack, row, col, status }: Props) {
    const getColor = () => {
        switch (status) {
            case "miss":
                return "bg-[#007aff] border-[#0040dd]";
            case "hit":
                return "bg-[#ff2d55] border-[#d20f44]";
            default:
                return "bg-[#f2f2f7] border-[#d1d1d6] ";
        }
    };

    return (
        <div onClick={() => Attack(row, col)} className={`border-2 h-10 w-10 cursor-pointer text-black text-center ${getColor()}`}>
            {status === "hit" ? "X" : status === "miss" ? "O" : ""}
        </div>
    )
}