import {PasswordStrengthType} from "@/components/shared/password-checker/PasswordChecker";

export default function PasswordResultMessage({message, passwordStrengthLevel}:PasswordStrengthType) {
    function setColor() {
        switch(passwordStrengthLevel) {
            case 0:
                return "text-[#ff3b30]";
            case 25:
                return "text-[#ff9500]";
            case 50:
                return "text-[#ffcc00]"
            case 75:
                return "text-[#34c759]";
            case 100:
                return "text-[#30db5b]";
        }
    }

    return (
        <div className='ml-44 mt-20'>
            <h1 className={`font-bold ${setColor()}`}>{message}</h1>
        </div>
    )
}