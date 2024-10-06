'use client'

import Player from "@/components/shared/tic-tac-toe/Player";
import { useEffect, useState } from "react";
import Game from "@/components/shared/tic-tac-toe/Game";

const initialArray: (null | string)[][] = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

export default function GameBoard() {
    const [gamePlace, setGamePlace] = useState<(null | string)[][]>([]);
    const [currentPlayer, setCurrentPlayer] = useState<string>('X');

    useEffect(() => {
        setGamePlace(initialArray);
    }, []);

    const checkWinner = () => {
        const lines = [
            [gamePlace[0][0], gamePlace[0][1], gamePlace[0][2]],
            [gamePlace[1][0], gamePlace[1][1], gamePlace[1][2]],
            [gamePlace[2][0], gamePlace[2][1], gamePlace[2][2]],
            [gamePlace[0][0], gamePlace[1][0], gamePlace[2][0]],
            [gamePlace[0][1], gamePlace[1][1], gamePlace[2][1]],
            [gamePlace[0][2], gamePlace[1][2], gamePlace[2][2]],
            [gamePlace[0][0], gamePlace[1][1], gamePlace[2][2]],
            [gamePlace[0][2], gamePlace[1][1], gamePlace[2][0]],
        ];

        for (const line of lines) {
            if (line[0] && line[0] === line[1] && line[1] === line[2]) {
                return line[0];
            }
        }
        return null;
    };

    function handleClick(row: number, col: number) {
        if (gamePlace[row][col] === null) {
            const newGamePlace = gamePlace.map((r) => [...r])
            newGamePlace[row][col] = currentPlayer
            setGamePlace(newGamePlace)
            const winner = checkWinner()

            if (winner) {
                alert(`Player ${winner} won!`);
                setGamePlace(initialArray);
            } else if (newGamePlace.flat().every(cell => cell !== null)) {
                alert("Draw!")
                setGamePlace(initialArray)
            } else {
                setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X')
            }
        }
    }

    return (
        <div className="flex flex-col justify-center p-6 min-w-[550px] min-h-96 bg-white rounded-lg text-black mt-20">
            <div className='flex justify-between gap-2'>
                <Player isActive={currentPlayer === 'X'} symbol='X' defaultName='player 1' />
                <Player isActive={currentPlayer === 'O'} symbol='O' defaultName='player 2' />
            </div>
            <div>
                {gamePlace && (
                    <Game gameBoardValue={gamePlace} onCellClick={handleClick} />
                )}
            </div>
        </div>
    );
}
