// import Password from 'antd/es/input/Password'
import { z } from 'zod'
import { Category } from '../Dashboard/config';

export const loginSchema = z.object({
  name: z
         .string({message:"Enter your name"})
         .min(5, 'Name is required in minimum 5 words'),
  email: z
         .string('Email is required')
         .email('Invalied email fromat'),
//   Category:z.string({message:"Your role"}),
       password: z
             .string({ message: "Give your password" })
              .min(6, 'Password atleast 6 charecters'),
  
});
export type loginData=z.infer<typeof loginSchema>