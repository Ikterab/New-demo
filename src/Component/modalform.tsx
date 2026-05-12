import React from "react";
import { useState } from "react";
import { Form, Input, Button } from "antd";
import { Header } from './../Dashboard/Header';

export function Testform({data}:any) {
   const [form]=Form.useForm()
    const handlesubmit = (values: any) => {
        console.log(values)
        data(values)
        form.resetFields()
   }
   
    return (
        <>
            <div>
                {/* <p>Form will be created from here</p> */}
                <Form
                    form={form}
                    layout="vertical"
                    onFinish={handlesubmit}
                >
                    <Form.Item
                        label={<span>Enter your name</span>}
                        name="name"
                        rules={[{required:true , message:"Name is required"}]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label={<span>Enter your email</span>}
                        name="email"
                        rules={[{ required: true, message: "Email is required" }]}
                    >
                        <Input />
                    </Form.Item>
                    
                    <Form.Item
                        label={<span>Enter your phone number</span>}
                        name="phonenumber"
                        rules={[{ required: true, message: "Phone number is required" }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item>
                        <Button
                            htmlType="submit"
                            className="w-full !bg-black !text-white"
                        >
                            Submit
                        </Button>
                    </Form.Item>



                </Form>
    
    
            </div>
        
        </>
    )
}
