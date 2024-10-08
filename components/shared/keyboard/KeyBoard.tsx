'use client'

import {keys} from "@/constants/keyboard";
import KeyboardButton from "@/components/shared/keyboard/KeyboardButton";

export default function KeyBoard(){

    const handleClick = (key: string) => {
        alert(`You clicked: ${key}`);
    }

    return (
        <div className="w-full max-w-4xl mx-auto p-4">
            {keys.map((row, rowIndex) => (
                <div key={rowIndex} className="flex justify-center mb-2">
                    {row.map((key, keyIndex) => (
                        <KeyboardButton
                            key={`${rowIndex}-${keyIndex}`}
                            handleClick={handleClick}
                            buttonKey={key} />
                    ))}
                </div>
            ))}
        </div>
    );
}