type Props = {
    tag:string,
    index:number,
    handleRemoveTag: (index:number) => void
}

export default function Tag({tag, index, handleRemoveTag}:Props){
    return (
        <div
            className="flex items-center bg-blue-100 text-blue-800 rounded-full px-4 py-2"
        >
            <span className="mr-2">{tag}</span>
            <button
                onClick={() => handleRemoveTag(index)}
                className="text-red-500 hover:text-red-700"
            >
                &times;
            </button>
        </div>
    )
}