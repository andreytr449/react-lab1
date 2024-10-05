'use client';

import { Mic, Search } from "lucide-react";
import { useState } from "react";
import PasswordResultMessage from "@/components/shared/password-checker/PasswordResultMessage";

export type PasswordStrengthType = {
    message: string;
    passwordStrengthLevel: number | null;
};

function checkPassword(password: string, setPasswordResult: React.Dispatch<React.SetStateAction<PasswordStrengthType>>) {
    let strength = 0;

    if (password.match(/[a-z]+/)) strength += 1;
    if (password.match(/[A-Z]+/)) strength += 1;
    if (password.match(/[0-9]+/)) strength += 1;
    if (password.match(/[$@#&!]+/)) strength += 1;

    if (password.length < 6) {
        setPasswordResult({ message: "Minimum number of characters is 6", passwordStrengthLevel: 0 });
        return;
    }

    if (password.length > 12) {
        setPasswordResult({ message: "Maximum number of characters is 12", passwordStrengthLevel: 0 });
        return;
    }

    switch (strength) {
        case 0:
            setPasswordResult({ message: "The password is too weak", passwordStrengthLevel: 0 });
            break;
        case 1:
            setPasswordResult({ message: "The password is weak", passwordStrengthLevel: 25 });
            break;
        case 2:
            setPasswordResult({ message: "The password is medium", passwordStrengthLevel: 50 });
            break;
        case 3:
            setPasswordResult({ message: "The password is above average", passwordStrengthLevel: 75 });
            break;
        case 4:
            setPasswordResult({ message: "The password is strong", passwordStrengthLevel: 100 });
            break;
    }
}

export default function PasswordChecker() {
    const [inputValue, setInputValue] = useState<string>("");
    const [passwordStrength, setPasswordStrength] = useState<PasswordStrengthType>({
        message: "",
        passwordStrengthLevel: 0,
    });

    function onChange(e: string) {
        setInputValue(e);
        checkPassword(e, setPasswordStrength);
    }

    return (
        <>
            <div className="flex justify-center">
                <div className="mt-14 text-center flex justify-between gap-2 items-center h-10 my-1 bg-[#333336] rounded w-96">
                    <div>
                        <Search color="#8e8e93" size={18} />
                    </div>
                    <div className="w-full">
                        <input
                            placeholder="Search"
                            className="my-1 bg-[#333336] text-[#8e8e93] rounded w-full outline-none"
                            value={inputValue}
                            onChange={(e) => onChange(e.target.value)}
                        />
                    </div>
                    <div>
                        <Mic color="#8e8e93" size={18} />
                    </div>
                </div>
            </div>

            {passwordStrength.message && (
                <PasswordResultMessage message={passwordStrength.message} passwordStrengthLevel={passwordStrength.passwordStrengthLevel} />
            )}
        </>
    );
}
