'use client'

import Container from "@/components/shared/general/Container";
import {sudokuInitialGameArray} from "@/constants/sudoku";
import Square from "@/components/shared/sudoku/Square";
import {useEffect, useState} from "react";

function isValidInput(
    board: (number | null)[][],
    value: number,
    row: number,
    col: number
): boolean {
    for (let c = 0; c < 9; c++) {
        if (board[row][c] === value) return false;
    }

    for (let r = 0; r < 9; r++) {
        if (board[r][col] === value) return false;
    }

    const startRow = Math.floor(row / 3) * 3;
    const startCol = Math.floor(col / 3) * 3;

    for (let r = startRow; r < startRow + 3; r++) {
        for (let c = startCol; c < startCol + 3; c++) {
            if (board[r][c] === value) return false;
        }
    }

    return true;
}


export default function SudokuPage() {
    const [playingField, setPlayingField] = useState<(number | null)[][]>([])

    function changeSquareValue(value: string, rowIndex :number, colIndex: number) {
        const parsedValue = parseInt(value, 10)

        if (isNaN(parsedValue) || parsedValue < 1 || parsedValue > 9) return

        const newField = [...playingField]
        newField[rowIndex][colIndex] = parsedValue

        if (isValidInput(newField, parsedValue, rowIndex, colIndex)) {
            setPlayingField(newField);
        } else {
            alert("Некоректне значення! Введене число порушує правила Судоку.")
        }
    }

    useEffect(() => {
        setPlayingField([...sudokuInitialGameArray])
    }, [])

    useEffect(() => {
        const arrayWithoutNull = playingField.filter(item => item != null)
        if(arrayWithoutNull.length === playingField.length)
            setPlayingField([...sudokuInitialGameArray])
    }, [playingField])

    return (
        <div className="mt-16 mb-16">
            <Container>
                <div className="mt-16">
                    <Container>
                        <div className="grid grid-cols-9 gap-0 mx-auto text-black bg-white">
                            {playingField.map((row, rowIndex) =>
                                row.map((cell, colIndex) => (
                                    <Square rowIndex={rowIndex} colIndex={colIndex} setInputValue={changeSquareValue} key={`${rowIndex}-${colIndex}`} value={cell}/>
                                ))
                            )}
                        </div>
                    </Container>
                </div>
            </Container>
        </div>
    )
}