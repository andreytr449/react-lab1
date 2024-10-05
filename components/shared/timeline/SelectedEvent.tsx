type Props = {
    title: string,
    description:string,
    date:string
}
export default function SelectedEvent({title, description, date}:Props){
    return (
        <div className="mt-6 p-4 border rounded-lg bg-white shadow-lg max-w-lg text-center">
            <h2 className="text-2xl font-bold text-blue-600">{title}</h2>
            <p className="mt-2 text-gray-600">{description}</p>
            <p className="mt-1 text-gray-500">Дата: {date}</p>
        </div>
    )
}