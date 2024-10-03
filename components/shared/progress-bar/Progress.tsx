export default function Progress({value}: {value: number}) {
    return (
        <div className="relative w-64 h-6 bg-white rounded-xl overflow-hidden border border-gray-300">
            <div
                className="h-full bg-blue-300 rounded-xl"
                style={{width: `${value}%`}}
            ></div>
        </div>
    )
}