import {ReactNode} from "react";

export default function Container({children}: {children: ReactNode}) {
    return (
        <div className="mx-auto min-w-[1200px] px-36">
            {children}
        </div>
    )
}