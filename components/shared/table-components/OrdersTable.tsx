import TableRow from "@/components/shared/table-components/TableRow";
import {tableDataType} from "@/constants/tableData";


type Props = {
    tableData: tableDataType[]
}

export default function OrdersTable({tableData}:Props) {
    return (
        <>
            <div className={`w-full h-auto bg-violet-200 border-2 border-violet-300`}>
                <div className='flex justify-between'>
                    <div className='text-sm uppercase my-5 mx-4 text-violet-400 font-medium'>User Details</div>
                    <div className='text-sm uppercase my-5 mx-4 text-violet-400 font-medium'>User Status</div>
                    <div className='text-sm uppercase my-5 mx-4 text-violet-400 font-medium'>Payment Status</div>
                    <div className='text-sm uppercase my-5 mx-4 text-violet-400 font-medium'>Amount</div>
                </div>
            </div>

            {tableData.map(item => (
              <TableRow
                  key={item.id}
                  name={item.name}
                  email={item.email}
                  id={item.id}
                  amount={item.amount}
                  userStatus={item.userStatus}
                  currency={item.currency}
                  lastLogin={item.lastLogin}
                  paymentDate={item.paymentDate}
                  paymentStatus={item.paymentStatus}
              />
            ))}
        </>
    )
}