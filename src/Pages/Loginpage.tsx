import React from "react";
import { useState } from "react";
import { Form, Input, Button, Modal } from 'antd'
import{ z } from 'zod'
import { loginSchema  } from "../Ts files/loginscema";
import type { loginData } from "../Ts files/loginscema";

export function Login() {
    

    type modelstype= 'show' | 'Error'  | null
    const [form] = Form.useForm()
    const [submit,setSubmitted]=useState<loginData | null>(null)  // input data save state
    const [openmodal,setOpenModal]=useState<modelstype>(null)   // for model display state
    const [error,setError]=useState<string|null >(null)        // error display sate


    const handleSubmit = (value:loginData) => { 
        
     const result=loginSchema.safeParse(value)
        
        if (!result.success)
        {
            // setError(result.error.issues[0].message)
            result.error.issues.forEach((issue) => {
                form.setFields([
                    {
                        name: issue.path[0] as string,
                        errors:[issue.message]
        }
    ])
            })
            return
        }
        
        const userdata: loginData[] = JSON.parse(localStorage.getItem('registerdata') || '[]')
        const user=userdata.find((u)=>u.name===result.data.name && u.email===result.data.email && u.password===result.data.password )
        
        if (!user)
        {
            setError('Invalied name or email or password')
          
            setOpenModal('Error')
        }
        else {
            setError(null)
            setOpenModal('show')
          setSubmitted(result.data)
          form.resetFields()
        }
        
      
    
        
        
}
    
    
    return (
      <>
        <div className="flex justify-center items-center min-h-screen">
                <div className="w-full max-w-md bg-white px-7 py-8 rounded-md shadow-[1px_2px_29px_rgb(0,0,0,0.1)] ">
                    <h2 data-testid="cylogin-title" className="text-[20px] font-semibold">Login</h2>
            <Form form={form} layout='vertical' onFinish={handleSubmit}
              onValuesChange={(changedvlaue) => {
                const fieldname = Object.keys(changedvlaue)[0]
                form.setFields([
                  {
                    name: fieldname,
                    errors:[],
                  },
                ])
            }}
            >
              <Form.Item label='Name' name='name'>
                <Input  data-testid="login-name"  placeholder='Enter your name' />
              </Form.Item>

              <Form.Item label='Email' name='email'>
                <Input data-testid="login-email"  placeholder='Enter your eamil' />
              </Form.Item>

              <Form.Item
                label='Password'
                name='password'
                // valuePropName='checked'
              >
                <Input.Password  data-testid="login-password" placeholder='Enter your password' />
              </Form.Item>
              <Button data-testid="btn-login" htmlType='submit' className="!px-9 !py-4 hover:!bg-blue-100 hover:!text-white ">Login</Button>
            </Form>

            <Modal
              
              className='!w-[700px]'
              title={
                openmodal === 'show'
                  ? 'Log Successful 🎉'
                  : 'Login Error ⚠️'
              }
              open={!!openmodal}
              onOk={() => setOpenModal(null)}
              onCancel={() => setOpenModal(null)}
            >
              {openmodal === 'show' && (
                <div>
                  <p>Your login successful 🎉 {submit?.name} </p>
                </div>
              )}
              {openmodal === 'Error' && <p>{error}</p>}
            </Modal>
          </div>
        </div>
      </>
    ) 
        
    
}