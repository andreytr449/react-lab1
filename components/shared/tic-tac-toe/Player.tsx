'use client'

import {useState} from "react";

type Props = {
    defaultName:string
    symbol:string
    isActive:boolean
}

export default function Player({defaultName, symbol, isActive }:Props) {
    const [userName, setUserName] = useState<string>(defaultName)
    return (
        <div className={isActive ? 'border-2 border-black h-16  rounded-md': ''}>
            <input
                className='h-10 rounded-xl bg-gray-100 py-2 px-3 mx-2 mt-2'
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
            />
            <span className='font-bold mx-2'>
                {symbol}
            </span>
        </div>
    )
}