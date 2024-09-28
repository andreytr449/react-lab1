import {ReactNode} from "react";

export default function Input({children}: {children: ReactNode}) {
    return (
        <input>{children}</input>
    )
}