type Props = {
    name: string
    x: string
    y: string
    width: string
    height: string
}

export default function SelectedRegion({name, x, y, width, height}:Props) {
    return (
        <div className="p-4 border rounded-lg bg-white shadow-lg max-w-md text-center mt-6">
            <h2 className="text-2xl font-bold text-blue-600">{name}</h2>
            <p className="mt-2 text-gray-600">Інформація про {name}.</p>
            <p className="mt-1 text-gray-500">
                Координати: ({x}, {y})
            </p>
            <p className="mt-1 text-gray-500">
                Розмір: {width} x {height}
            </p>
        </div>
    )
}