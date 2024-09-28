export type dataType = {
    id: number,
    name: string
}
type Props = {
    searchResultData: dataType[]
}
export default function SearchResult({searchResultData}: Props) {
    return (
        <div
            className='w-96 bg-white flex rounded-2xl max-h-72 overflow-y-scroll z-8 absolute top-20 flex-col text-black '>
            {searchResultData.length > 0 ?
                searchResultData.map(item => (
                    <div key={item.id} className='flex p-3'>
                        {item.name}
                    </div>
                ))
                :
                <div className='flex p-3'>
                    No results found.
                </div>
            }


        </div>
    )
}