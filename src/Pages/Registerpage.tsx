import React from "react";
import { useState } from "react";
import type { RootState, AppDispatch } from "../Redux/store";
import { useNavigate,Link } from "react-router-dom";
import { Form,Input, Button, Modal,Spin, message} from 'antd';
// import Password from "antd/es/input/Password";
// import useSelection from "antd/es/table/hooks/useSelection";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../Redux/redux";
//  import { UseDispatch } from "react-redux";
export type RegisterData = {
  name: string
  email: string
  phonenumber: string
  category: string
  password: string
  confirmpassword: string
}
export function Register() {

   const dispatch=useDispatch<AppDispatch>()
  const navigate=useNavigate()
    const [form]=Form.useForm()
    // const [formdata, setformdata] = useState<RegisterData>({
    //      name: '',
    //     email: '',
    //     phonenumber: '',
    //     password:'',
    //     confirmpassword:'',

    
    // })
 type modelstype= 'show' | 'Error'  | null
 
  const [model, setModel] = useState<modelstype>(null)  
  const [error,setErrorMessage]=useState('')
    const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState<RegisterData | null>(null)
  
  const user = useSelector((state: RootState) => state.user.data)

   
  
  const handlesubmit = (value: RegisterData) => {
        
          setLoading(true)
      
      console.log('Form submitted:', value)
        setTimeout(() => {
          setSubmitted(value)
          // localStorage.setItem('registerdata', JSON.stringify(value))
          // const user:RegisterData[]=JSON.parse(localStorage.getItem('registerdata')||'[]')
         
         
         
          const checkExist = user.some((u) => u.email === value.email || u.phonenumber === value.phonenumber)
          if (checkExist)
          {
            setErrorMessage('User already exists!')
            setModel('Error')
            setLoading(false)
            return
          }
          else {
            // user.push(value)
            // localStorage.setItem("registerdata",JSON.stringify(user))
         dispatch(registerUser(value))
         
          }
       
           setModel('show')
            setLoading(false)
          form.resetFields()
          navigate('/Loginpage')  
            
    },3000)
        
        
    }

    
    return (
      <>
        <div className='flex justify-center items-center min-h-screen  '>
          <div className='w-full max-w-md py-8 px-5 bg-white shadow-[1px_1px_29px_rgb(0,0,0,0.1)]'>
            
            <h2 data-testid="cypress-title" className='py-7 text-[20px] font-semibold'>Register</h2>

            <Form
              form={form}
              layout='vertical'
              onFinish={handlesubmit}
              onValuesChange={(changedValues) => {
                const fieldName = Object.keys(changedValues)[0]
                form.setFields([
                  {
                    name: fieldName,
                    errors: [], // clear errors for this field
                  },
                ])
              }}
            >
              <Form.Item
                label={<span className='text-[15px] '>Full Name</span>}
                name='name'
                rules={[{ required: true, message: 'Please enter your name!' }]}
              >
                <Input
                  data-testid="input-name"
                  placeholder='Enter your name'
                  className='h-[40px]' />
              </Form.Item>
              <Form.Item
                label={<span className='text-[15px] '>Email</span>}
                name='email'
                rules={[
                  { required: true, message: 'Please enter your email!' },
                  { type: 'email', message: 'Invalid email format!' },
                ]}
              >
                <Input
                  data-testid="input-email"
                  placeholder='Enter your email' className='h-[40px]' />
              </Form.Item>
              <Form.Item
                label={<span className='text-[15px] '>Phone Number</span>}
                name='phonenumber'
                rules={[
                  { required: true, message: 'Please enter your phonenumber!' },
                  {
                    pattern: /^[0-9]{10,15}$/,
                    message: 'Please enter valid phone number! ',
                  },
                ]}
              >
                <Input
                  data-testid="input-phonenumber"
                  placeholder='Enter your phonenumber'
                  className='h-[40px]'
                />
              </Form.Item>
              <Form.Item
                label={<span className="text-[15px]">Category</span>}   
                name='category'
                rules={[{ required: true, message:"Enter your category" }]}
              >
                <Input
                  placeholder="Enter your category"
                
                />
              </Form.Item>
              <Form.Item
                label={<span className='text-[15px] '>Password</span>}
                name='password'
                rules={[{ required: true, message: 'Please enter password!' }]}
              >
                <Input.Password
                  data-testid="input-password"
                  placeholder='Enter your password'
                  className='h-[40px]'
                />
              </Form.Item>
              <Form.Item
                label={<span className='text-[15px] '>Confirm Password</span>}
                name='confirmpassword'
                rules={[
                  { required: true, message: 'Please confirm your password!' },
                  ({ getFieldValue }) => ({
                    validator(_, value: string) {
                      if (!value || getFieldValue('password') === value) {
                        return Promise.resolve()
                      }
                      return Promise.reject(
                        new Error('Passwords do not match!')
                      )
                    },
                  }),
                ]}
              >
                <Input.Password
                  data-testid="input-confirmpassword"
                  placeholder='Confirm your password'
                  className='h-[40px]'
                />
              </Form.Item>
              <Button
                data-testid="btn-submit"
                type='default'
                htmlType='submit'
                loading={loading}
                className='rounded-md !bg-blue-500 !text-white !text-[16px] !font-semibold  hover:!bg-green-100 !h-[40px] w-[100px] '
              >
                Submit
              </Button>
              {loading && <Spin size='small'/>}
              <p className='py-3 text-[15px] text-black '>
                {' '}
                Already have an account!
                <Link to='/Loginpage'>
                  {' '}
                  <span className='px-2 underline text-blue-500 hover:text-red-300'>
                    Click Here
                  </span>
                </Link>
              </p>
            </Form>
          </div>

          <Modal
            className='!w-[700px]'
            title={
              model === 'show'
                ? 'Registration Successful 🎉'
                : 'Registration Error ⚠️'
            }
            open={!!model}
            onOk={() => setModel(null)}
            onCancel={() => setModel(null)}
          >
            {model === 'show' && submitted && (
              <div className='w-[600px]'>
                <p>
                  <strong>Name:</strong>
                  {submitted?.name}
                </p>
                <p>
                  <strong>Email:</strong>
                  {submitted?.email}
                </p>
                <p>
                  <strong>Phone Number:</strong>
                  {submitted?.phonenumber}
                </p>
              </div>
            )}
            {model === 'Error' && <p>{error}</p>}
          </Modal>
        </div>
      </>
    )



}

