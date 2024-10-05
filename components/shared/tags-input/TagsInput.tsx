'use client'

import {useState} from "react";
import TagsList from "@/components/shared/tags-input/TagsList";
import {Send} from "lucide-react";

export default function TagsInput(){
    const [tags, setTags] = useState<string[]>([]);
    const [inputValue, setInputValue] = useState("");

    const handleAddTag = () => {
        if (inputValue.trim() !== "" && !tags.includes(inputValue)) {
            setTags([...tags, inputValue.trim()]);
            setInputValue(""); // Очищення поля після додавання
        }
    };

    const handleRemoveTag = (index: number) => {
        setTags(tags.filter((_, i) => i !== index));
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            handleAddTag();
        }
    };

    return (
        <div className="p-4">

            <div className='flex gap-4'>
                <input
                    placeholder='Send Message'
                    value={inputValue}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                    className='bg-black border-[#8e8e93] border-2 rounded-2xl w-full mx-1 px-3 text-sm'/>
                <button
                    onClick={handleAddTag}
                    className={`mr-4 rounded-full p-2 bg-[#0A84FF]'}`}><Send
                    size={20}/></button>
            </div>

            <TagsList tags={tags} handleRemoveTag={handleRemoveTag}/>

        </div>
    );
}