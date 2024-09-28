'use client'


import Input from "@/components/ui/Input";
import {Search} from "lucide-react";
import {useState} from "react";
import SearchResult, {dataType} from "@/components/shared/autocomplete-components/SearchResult";
import {mcdonaldsMenu} from "@/constants/searchData";

export default function AutocompleteSearch(){
    const [searchData, setSearchData] = useState<string>('');
    const [isFocused, setIsFocused] = useState<boolean>(false)

    const searchResultData: dataType[] = searchData.trim()
        ? mcdonaldsMenu.filter(item => item.name.toLowerCase().includes(searchData.toLowerCase()))
        : [];
    function handleFocus(){
        setIsFocused(true)
    }
    function handleBlur(){
        setIsFocused(false)

    }
    return (
        <>
        <div className='bg-white w-96 rounded-2xl h-10  flex'>
            <div className='mt-1.5 ml-3'>
            <Search color='black' size={23} />
            </div>
            <Input
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={setSearchData}
                value={searchData} />
        </div>
            {searchData && isFocused ?
            <SearchResult searchResultData={searchResultData} /> : undefined
            }
        </>
    )
}