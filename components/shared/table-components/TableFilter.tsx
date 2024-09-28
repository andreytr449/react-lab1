import RadioButton from "@/components/ui/RadioButton";

type Props = {
    setGeneralFilter: (filter: string | undefined) => void;
    setUserFilter: (filter: string | undefined) => void;
}

export default function TableFilter({setUserFilter, setGeneralFilter}:Props){
    return (
        <div className="bg-white rounded-lg flex flex-col w-56 h-auto text-black">
            <h1     className='m-2'>sort by:</h1>
            <div className="flex flex-col mx-7 my-2">
                <div className='flex justify-between'>
                    <div>Default</div>
                    <div><RadioButton value={undefined} onClick={setGeneralFilter} groupName='sort-by'/></div>
                </div>

                <div className='flex justify-between'>
                    <div>By Name</div>
                    <div><RadioButton onClick={setGeneralFilter} value={'name'} groupName='sort-by'/></div>
                </div>


                <div className='flex justify-between'>
                    <div>By Email</div>
                    <div><RadioButton onClick={setGeneralFilter} value='email' groupName='sort-by'/></div>
                </div>


                <div className='flex justify-between'>
                    <div>Due Date</div>
                    <div><RadioButton onClick={setGeneralFilter} value='paymentDate' groupName='sort-by'/></div>
                </div>

                <div className='flex justify-between'>
                    <div>Last Login</div>
                    <div><RadioButton onClick={setGeneralFilter} value='lastLogin' groupName='sort-by'/></div>
                </div>

                <div className='flex justify-between'>
                    <div>Amount</div>
                    <div><RadioButton onClick={setGeneralFilter} value='amount' groupName='sort-by'/></div>
                </div>


                <hr className="w-full h-[1px] mx-0 my-4 bg-gray-100 border-0 rounded  dark:bg-gray-700"/>


                <div className='flex justify-between'>
                    <div>All</div>
                    <div><RadioButton onClick={setUserFilter} value={undefined} groupName='sort-by-user'/></div>
                </div>


                <div className='flex justify-between'>
                    <div>Active</div>
                    <div><RadioButton onClick={setUserFilter} value='active' groupName='sort-by-user'/></div>
                </div>


                <div className='flex justify-between'>
                    <div>Inactive</div>
                    <div><RadioButton onClick={setUserFilter} value='inactive' groupName='sort-by-user'/></div>
                </div>


            </div>
        </div>
    )
}