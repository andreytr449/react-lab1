import {Dot} from "lucide-react";

export type ColorKey = 'blue' | 'green' | 'yellow' | 'red' | 'gray';

type Props = {
    color: ColorKey,
    children: React.ReactNode,
}

const colors: Record<ColorKey, { dot: string; text: string; bg: string }> = {
    blue: {
        dot: '#3B82F6',
        text: 'text-blue-600',
        bg: 'bg-blue-200',
    },
    green: {
        dot: '#10B981',
        text: 'text-green-600',
        bg: 'bg-green-200',
    },
    yellow: {
        dot: '#F59E0B',
        text: 'text-yellow-600',
        bg: 'bg-yellow-200',
    },
    red: {
        dot: '#EF4444',
        text: 'text-red-600',
        bg: 'bg-red-200',
    },
    gray: {
        dot: '#6B7280',
        text: 'text-gray-600',
        bg: 'bg-gray-200',
    },
};


export default function Badge({color, children}: Props) {
    const colorObject = color in colors ? colors[color] : colors.gray
    return (
        <div className={`inline-flex text-xs ${colorObject.bg} rounded-xl `}>
            <Dot color={colorObject.dot} size={24}/>
            <h1 className={`my-1 mr-2 ${colorObject.text}`}>{children}</h1>
        </div>
    )
}