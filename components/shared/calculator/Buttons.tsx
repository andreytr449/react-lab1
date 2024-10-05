import {calculatorButtons} from "@/constants/calculator";
import CalculatorButton from "@/components/shared/calculator/Button";

export default function Buttons({onClick}: {onClick: (value:string) => void}){
    return (
        <div className='grid grid-cols-4 gap-2 mt-3 mx-2'>
            {calculatorButtons.map(button => (
                <CalculatorButton  key={button.value} value={button.value} onClick={onClick}>{button.name}</CalculatorButton>
            ))}
        </div>
    )
}