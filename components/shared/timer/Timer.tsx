'use client'

import  { useState, useEffect } from 'react';
import PlayerTime from "@/components/shared/timer/PlayerTime";


export default function Timer() {
    const [timeLeft, setTimeLeft] = useState({ player1: 300, player2: 300 })
    const [activePlayer, setActivePlayer] = useState<1 | 2 | null>(null);

    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (activePlayer !== null) {
            timer = setInterval(() => {
                setTimeLeft((prevTime) => ({
                    ...prevTime,
                    [activePlayer === 1 ? 'player1' : 'player2']: prevTime[activePlayer === 1 ? 'player1' : 'player2'] - 1,
                }));
            }, 1000);
        }

        return () => clearInterval(timer);
    }, [activePlayer]);


    const switchPlayer = () => {
        setTimeLeft({ player1: 300, player2: 300 });
        setActivePlayer((prevPlayer) => (prevPlayer === 1 ? 2 : 1));
    };

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="text-center space-y-8">

               <PlayerTime isActive={activePlayer === 1} timeLeft={timeLeft.player1}>Player 1</PlayerTime>

                <button
                    onClick={switchPlayer}
                    className="px-6 py-2 text-lg bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
                >
                    Switch Player
                </button>

                <PlayerTime isActive={activePlayer === 2} timeLeft={timeLeft.player2}>Player 2</PlayerTime>

            </div>
        </div>
    );
}