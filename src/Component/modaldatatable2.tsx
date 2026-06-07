import { Table } from "antd";
import React from "react";
import { useContext } from "react";
import { UserContext } from "../Hooks/ContextApi";

const DataTable2 = () => {
    const {userData}=useContext(UserContext)
    const columns = [

        {
            title: "Id",
            render: (_, record: any, index: number) => index + 1
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
            dataIndex: "amount"
        }

    ];
    console.log(userData)
    return (
        <>
            <div className="mt-10 w-[700px]">
                <Table
                    columns={columns}
                    bordered
                    dataSource={userData}
                    rowKey={(record, index): any => index}

                />
            </div>

        </>
    )

}
export default DataTable2