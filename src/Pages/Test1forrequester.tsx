import React from "react";
// import Form from "antd";
// import { Input } from "antd";
// import { InputNumber } from "antd";
// import Upload from "antd";
// import Select from "antd";
import {Input} from "antd";
import { Table } from "antd";
import { useState } from "react";
import {useUsersListQuery } from "../Redux/API/Baseapi/Dashboard/user";
import { SearchOutlined } from '@ant-design/icons' 
import { RxCross2 } from "react-icons/rx";
import { object } from "zod";
import { FaFilter } from "react-icons/fa";
import { FilterCard } from './../utilities/card';
import { Filtercolumn } from "../utilities/filter";
const Test1 = () => {
    type userType = {
        id: number,
        name: string,
        email: string,
         city: string 
    }
    const [search, setSearch] = useState<userType>({
        id: "",
        name: "",
        email: "",
        city:"",

    });
    const [page, setPage] = useState(1)
   
    // const { data, isLoading, isError } = useUsersListQuery({ page, limit: 20, })

const {data,isLoading,isError}=useUsersListQuery(undefined)
    if (isLoading) return <p>Loading...</p>
    if (isError) return <p>Error...</p>
    
    
    const userData:userType[] = data?.map((user: any, index: number) => ({
        
        id: user.id || index,
        name: user?.name,
        email: user?.email,
        city:user?.address?.city
    }))

    const filteredData = userData?.filter((user: any) => {
        return (
            user.id.toString().toLowerCase().includes(search.id.toString().toLowerCase()) &&
            user.name.toLowerCase().includes(search.name.toLowerCase()) &&
            user.email.toLowerCase().includes(search.email.toLowerCase()) &&
            user.city.toLowerCase().includes(search.city.toLowerCase()) 
        )
    })

    const handltChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setSearch((prev) => ({ ...prev, [name]: value }))

    }

    const handleClearfield = (field:any) => {
     setSearch((prev)=>({...prev,[field]:''}))
        
    }

    const columns = [
    
        {
            title: (<div className="flex justify-between ">
                <span>ID</span>
               
                {/* <Input
                style={{width:"180px"}}
                    placeholder="Enter Id"
                    name="id"
                    value={search?.id}
                    onChange={handltChange}
                    prefix={<SearchOutlined className="!text-gray-500"/>}
                /> */}
            </div>),
            dataIndex: 'id',
            ...Filtercolumn(
                {
                    dataIndex: "id", 
                    search,
                    setSearch
                }
            ),
            width:300
        },
        {
            title: (<div className="flex justify-between">
                <span>Name</span>
                <Input
                    style={{width:"180px"}}
                    placeholder="Enter name"
                    name="name"
                    value={search?.name}
                    onChange={handltChange}
                    prefix={<SearchOutlined className="!text-gray-500"/>}
                />
            </div>),
            render: (_: any, record: any) => (<div className="flex gap-10">
                <div className="rounded-[50%] h-[35px] w-[35px] text-center p-1 fonet-semibold bg-blue-500">{ record.name[0]}</div>
                <span className=" m-auto text-center">{record.name }</span>
            </div>),
            dataIndex: 'name',
            width: 400

        },
        {
            title: (<div className="flex justify-between">
                <span>Email</span>
                <Input
                    style={{ width: "180px" }}
                    placeholder="Enter email"
                    name="email"
                    value={search?.email}
                    onChange={handltChange}
                    prefix={<SearchOutlined className="!text-gray-500" />}
                />
            </div>),
            dataIndex: 'email',
            width:400
        },
        {
            title: (<div className="flex justify-between">
                <span>City</span>
                <Input
                    style={{ width: "180px" }}
                    placeholder="Enter city"
                    name="city"
                    value={search?.city}
                    onChange={handltChange}
                    prefix={<SearchOutlined className="!text-gray-500" />}
                />
            </div>),
            dataIndex:'city',
           width:400,
            // render: (_, record) => record.address?.city
        }
]

    
    
    
    
   
    
    return (<>
    
        <div>
            
            <div className="bg-white p-6 rounded-md">
                <h2 className="text-center py-5 text-[20px] font-semibold">Test table design</h2>
                {/* {search.id && (<div className=" px-5 py-1  inline-block rounded-sm bg-gray-200 mb-2 ">
                    <div className="flex gap-4">
                        <div className="bg-gray-600 h-[10px] w-[10px] rounded  mt-[2px]"></div>
                        <span className=" text-sm text-gray-600">{search.id }</span>
                        <button onClick={()=>handleClearfield("id")}>
                            <RxCross2 />
                        </button>
                    </div>
                </div>)} */}
                {/* <div className="flex gap-2 wrap">
                    {Object?.entries(search)?.map(([key, value]) => {
                        if (!value) return null
                        return (
                            <FilterCard
                                key={key}
                                label={value}
                                onclear={()=>handleClearfield(key)}
                            />
                        )
                     })}
                </div> */}
                <div className="flex gap-2 wrap">
                    {Object.entries(search)?.map(([field, value])=>{
                        if (!value) return null
                        return (
                            <FilterCard
                                key={field}
                                label={value}
                                field={field}
                                setSearch={setSearch}
                        
                            />
                    )
                    
                    })

                    }
                </div>
                
                <Table
                    className="font-semibold "
                    dataSource={filteredData}
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