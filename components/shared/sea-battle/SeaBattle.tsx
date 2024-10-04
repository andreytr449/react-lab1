'use client'

import Cell from "@/components/shared/sea-battle/Cell";
import {useState} from "react";

const BOARD_SIZE = 10;

export default function SeaBattle(){
    const [board, setBoard] = useState<string[][]>(
        Array(BOARD_SIZE).fill(Array(BOARD_SIZE).fill("empty"))
    )

    function Attack(row: number, col: number){
        const updatedBoard = board.map((rowArray, rowIndex) =>
            rowArray.map((cell, colIndex) => {
                if (rowIndex === row && colIndex === col) {
                    const isHit = Math.random() < 0.2
                    if (isHit && cell === "empty") {
                        return "hit"
                    } else if (cell === "empty" && !isHit) {
                        return "miss"
                    }
                }
                return cell
            })
        )
        setBoard(updatedBoard)
    }



    return (
        <div className="flex flex-col items-center mt-10">
            <div className="grid" style={{gridTemplateColumns: `repeat(${BOARD_SIZE}, 3rem)`}}>
                {board.map((row, rowIndex) =>
                    row.map((cell, colIndex) => (
                        <Cell
                            key={`${rowIndex}-${colIndex}`}
                            row={rowIndex}
                            col={colIndex}
                            status={cell}
                            Attack={Attack}
                        />
                    ))
                )}
            </div>
        </div>
    )
}