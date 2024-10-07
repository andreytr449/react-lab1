'use client'

import {useState} from 'react';
import ChessSquare from "@/components/shared/chess-board/ChessSquare";

export default function ChessBoard() {
    const [selectedCell, setSelectedCell] = useState<{ row: number; col: number } | null>(null);

    const board = Array.from({length: 8}, (_, row) =>
        Array.from({length: 8}, (_, col) => ({row, col}))
    );

    const handleCellClick = (row: number, col: number) => {
        setSelectedCell({row, col})
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="grid grid-cols-8 border-4 border-black">
                {board.map((row) =>
                    row.map((cell) => (
                        <ChessSquare
                            key={`${cell.row}-${cell.col}`}
                            row={cell.row}
                            col={cell.col}
                            handleCellClick={handleCellClick}
                            selectedCell={selectedCell} />
                    ))
                )}
            </div>
        </div>
    );
}