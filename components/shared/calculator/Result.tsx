type Props = {
    input:string
    result:string
}

export default function Result({input, result}:Props){
    return (
        <div className='w-full h-36 bg-[#d1d1d6] rounded-2xl'>
            <div className='text-2xl text-right text-gray-600'>{input}</div>
            <div className='text-4xl text-right text-black'>{result}</div>
        </div>
    )
}