import React from "react";
// import Form from "antd";
// import { Input } from "antd";
// import { InputNumber } from "antd";
// import Upload from "antd";
// import Select from "antd";
import { Table } from "antd";
import { useState } from "react";
import {useUsersListQuery } from "../Redux/API/Baseapi/Dashboard/user";
const Test1 = () => {
    const [page, setPage] = useState(1)
    const [search, setSearch] = useState("");
    const { data, isLoading, isError } = useUsersListQuery({ page, limit: 20, search })
    if(isLoading) return <p>Loading...</p>
    if (isError) return <p>Error...</p>
  
    const columns = [
    
        {
            title: 'ID',
            dataIndex: 'id',
            width:100
        },
        {
            title: 'Name',
            render: (_: any, record: any) => (<div className="flex gap-10">
                <div className="rounded-[50%] h-[35px] w-[35px] text-center p-1 fonet-semibold bg-blue-500">{ record.name[0]}</div>
                <span className=" m-auto text-center">{record.name }</span>
            </div>),
            dataIndex: 'name',
            width: 400

        },
        {
            title: 'Email',
            dataIndex: 'email',
            width:400
        },
        {
            title: 'City',
            // dataIndex:'city',
           width:400,
            render: (_, record) => record.address?.city
        }


]
    
    
    
    return (<>
    
        <div>
            
            <div className="bg-white p-6 rounded-md">
                <h2 className="text-center py-5 text-[20px] font-semibold">Test table design</h2>
               
                <Table
                    className="font-semibold "
                    dataSource={data?.data}
                    rowKey='id'
                    columns={columns}
                    loading={isLoading}
                    bordered
                    pagination={{
                        current: page,
                        pageSize: 5,
                        total: data?.total,
                        onChange: (page) => setPage(page),


                    }}

                />


           </div>
           
    </div>
    
    </>)
}

export default Test1