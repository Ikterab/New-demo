import React from "react";
import {useForm} from '../utilities/useForm'
import { useState } from "react";


type registervalues = {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
} 

export default function Register1test(){
    const [message, setMessage] = useState<string | null>(null)
    const [submitted, setSubmitted]=useState<registervalues | null>(null)
    const form = useForm<registervalues>({
        initialValues: {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
    
         validate:(values) => {
            const errors: Partial<Record<keyof registervalues, string>> = {};
            if (!values.name) errors.name = 'Please eanter your name' 
            if (values.name.length < 3) errors.name = 'Name should be atleast 4 words'
            if (!values.email)  errors.email='Please eanter your email' 
            if (!values.email.includes('@'))  errors.email='Please eanter your email' 
            if (values.password.length < 3)  errors.password='Password should be atleast 3' 
            if (values.confirmPassword !== values.password) errors.confirmPassword = 'Passwoerd do not match'
            return errors;
        
        },
        onSubmit: (values) => {
            console.log('From submitted:', values)
            setMessage('Registration successfull')
setSubmitted(values)
            form.resetForm();


        }
    }
    )
    return (
      <div>
        <div className='flex flex-col  justify-center items-center  m-auto w-md py-10 0 bg-blue-50'>
          <h2 className='text-[20px] pb-10 font-semibold '>Register page</h2>
          <form onSubmit={form.handlesubmit} className='text-start'>
            <div className='flex  flex-col w-sm py-3 '>
              <label className='text-[16px] font-semibold '>Username:</label>
              <input type='text' {...form.register('name')} />
            </div>

            <div className='flex flex-col w-sm py-3 '>
              <label className='text-[16px] font-semibold'>Eamil:</label>
              <input type='text' {...form.register('email')} />
            </div>
            <div className='flex flex-col w-sm py-3 '>
              <label className='text-[16px] font-semibold'>Password:</label>
              <input type='text' {...form.register('password')} />
            </div>
            <div className='flex flex-col w-sm py-3 '>
              <label className='text-[16px] font-semibold'>
                Confirm Password:
              </label>
              <input type='text' {...form.register('confirmPassword')} />
            </div>
            <button type='submit'>Register</button>
            {message && (
              <div>
                <p>{message}</p>
                <p>{submitted?.name}</p>
                <p>{submitted?.email}</p>
                <p>{submitted?.password}</p>
              </div>
            )}
          </form>
        </div>
      </div>
    )


}