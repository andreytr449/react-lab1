'use client'

const COUNT = 8

const createAudio = (index: number) => {
    const audio = new Audio(`piano-mp3/A${index}.mp3`);
    return audio;
};

export default function Piano(){

    const playNote = (index: number) => {
        const audio = createAudio(index);
        audio.play();
    };

    return (
        <div className="flex gap-2 bg-black rounded-lg w-full h-[442px] p-1">
            {Array.from({length: COUNT}).map((_, index) => (
                <div
                    key={index}
                    className="cursor-pointer bg-gray-200 w-[150px] h-[434px] rounded-lg flex justify-center items-end transform transition-transform duration-200 active:scale-95"                    onClick={() => playNote(index)}
                >
                </div>
            ))}
        </div>
    )
}