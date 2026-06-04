import { Table } from "antd";
import React from "react";


const DataTable = ({ tableData }:any) => {
    const columns = [
       
        {
            title: "Id",
            render:(_,record:any,index:number)=>index+1
        },
       
        {
            title: "Name",
            dataIndex: "name",
        },
        {
            title: "Email",
            dataIndex: "email",
        },
        {
            title: "Phone",
            dataIndex: "phonenumber",
        },

        {
            title: "Address",
            dataIndex: "address",
        },
        {
            title: "Amount",
            dataIndex:"amount"
        }

    ];
console.log(tableData)
    return (
        <>
            <div className="mt-10 w-[700px]">
                <Table
                columns={columns}
                    bordered
                    dataSource={tableData}
                    rowKey={(record, index):any => index}
                
                />
        </div>
        
        </>
)

}
export default DataTable