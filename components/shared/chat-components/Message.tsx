type Props = {
    text:string,
    isMyMessage: boolean,
}

export default function Message({text, isMyMessage}:Props) {
    return (
        <div className={`flex ${isMyMessage? 'justify-end' : 'justify-start'} `}>
            <h2 className={`text-sm  h-10 items-center justify-center flex rounded-2xl mx-3 px-3 ${isMyMessage  ? 'bg-[#0A84FF]' : 'bg-[#1e1e1e]'}`}>{text}</h2>
        </div>
    )
}