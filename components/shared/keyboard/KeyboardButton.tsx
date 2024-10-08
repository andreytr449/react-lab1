type Props = {
    handleClick: (key:string) => void
    buttonKey:string
}

export default function KeyboardButton({buttonKey, handleClick}: Props) {

    return (
        <button
            onClick={() => handleClick(buttonKey)}
            className={`text-white p-2 m-1 rounded-lg border border-gray-600 ${
                buttonKey === 'Space' ? 'w-48' : 'w-12'
            } bg-gray-700 hover:bg-gray-600 transition`}
        >
            {buttonKey}
        </button>

    )
}