'use client'

import {useState} from "react";
import Progress from "@/components/shared/progress-bar/Progress";
import Range from "@/components/shared/progress-bar/Range";

export default function ProgressBarPage(){
    const [value, setValue] = useState<number>(15)

    const handleChange = (rangeValue:string) => {
        setValue(Number(rangeValue))
    };

    return (
        <div className="flex flex-col items-center justify-center mt-10 space-y-6">
            <Progress value={value} />

            <Range value={value} handleChange={handleChange}/>

            <span className="text-gray-700 font-medium">{value}%</span>
        </div>
    );
}