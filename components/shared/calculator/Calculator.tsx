'use client'

import Result from "@/components/shared/calculator/Result";
import Buttons from "@/components/shared/calculator/Buttons";
import {useState} from "react";

export default function Calculator(){
    const [input, setInput] = useState<string>('');
    const [result, setResult] = useState<string>('0');

    function handleButtonClick(value: string) {
        if (value === 'clear') {
            setInput('')
            setResult('0')
        } else if (value === '=') {
            try {
                const evaluatedResult = eval(input)
                setResult(evaluatedResult.toString())
            } catch {
                setResult('Error')
            }
        } else {
            setInput(prev => prev + value)
        }
    }

    return (
        <div className='bg-[#f2f2f7] w-96 h-[550px] rounded-2xl p-3'>
            <Result result={result} input={input} />
            <Buttons onClick={handleButtonClick} />
        </div>
    )
}