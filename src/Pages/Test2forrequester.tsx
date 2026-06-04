import React from "react";
import { useState } from "react";
import { Form, Input, Button, Modal, Spin, message } from 'antd';
import { Testform } from "../Component/modalform";
import DataTable from "../Component/modaldatatablel";
const Test2 = () => {
    const [modalOpen, setModalOpen] = useState(false)   
   const [tableData, setTableData]=useState([]) 
    const Handlemodal = () => {
        setModalOpen(true)
        console.log(modalOpen)
    }
    const handleData = (newdata:any) => {
        setTableData((prev):any => [...prev, newdata])
        setModalOpen(false)

    } 
    return (<> 
    
        <div className="text-center">
    
            <div className="flex flex-col justify-center items-center mt-3">
                {/* <h1 className="h1 ">Form developed</h1> */}
                 
                <div className=" max-w-md   bg-white shadow-[5px_5px_25px_rgba(0,0,0,0.2)] px-10 py-10 ">
                    <p className="text-lg font-semibold  ">Test form</p>
                    <Button 
                          onClick={Handlemodal}
                        className="w-[200px] !bg-gray-400 !text-black mt-2">+ Enter Info</Button>
                </div>
                <div>
                <DataTable tableData={tableData}/>
                </div>   
                <Modal
                    title={<p>Just for test</p>}
                    open={modalOpen}
                    footer={null}
                    //    onOk={()=>setModalOpen(false)}
                    onCancel={() => setModalOpen(false) }
                >
                 {/* <p>just for test</p> */}
                    <Testform data={ handleData} setModalOpen={setModalOpen} />
                </Modal>
                
    </div>
 

    </div>
    
    </>)
}

export default Test2