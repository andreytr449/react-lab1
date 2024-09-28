'use client'

import OrdersTable from "@/components/shared/table-components/OrdersTable";
import TableFilter from "@/components/shared/table-components/TableFilter";
import {useState} from "react";
import tableData from "@/constants/tableData";

type dataFiltersType = {
    sortBy : string | undefined,
    users: string | undefined
}

export default function TablePage(){
    const [tableFilters, setTableFilters] = useState<dataFiltersType>({
        sortBy: undefined,
        users: undefined,
    })

    function setGeneralFilters(filters: string | undefined) {
      setTableFilters(prevState => {
              return {...prevState, sortBy:filters};
          }
      )
    }
    function setUserFilter(filters:string | undefined){
        setTableFilters(prevState => ({
            ...prevState,
            users: filters,
        }));
    }
    let sortedData = [...tableData]

    if (tableFilters.sortBy) {
        const filter = tableFilters.sortBy;

        if (filter === "name" || filter === "email") {
            sortedData = sortedData
                .filter(item => item[filter])
                .sort((a, b) => a[filter].localeCompare(b[filter]));
        } else if (filter === "lastLogin" || filter === "paymentDate") {
            sortedData = sortedData.sort((a, b) => {
                return new Date(a[filter]).getTime() - new Date(b[filter]).getTime();
            })
        }else if (filter === "amount") {
            sortedData = sortedData.sort((a, b) => a.amount - b.amount);
        }
    }
    if (tableFilters.users) {
        const filter = tableFilters.users
        if(filter === 'active' || 'inactive'){
            sortedData = sortedData.filter(item => item.userStatus.toLowerCase() === filter )
        }

    }
    return (
        <div className='py-48 px-36'>
            <TableFilter setUserFilter={(filter) => setUserFilter(filter)} setGeneralFilter={(filter) => setGeneralFilters(filter)} />
            <OrdersTable tableData={sortedData} />
        </div>
    )
}