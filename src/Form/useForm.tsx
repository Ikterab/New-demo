import React, { useState } from "react"; 
import { object } from "zod";


type FormError<T> = {
    [K in keyof T]?: string;
};

export function useForm<T extends Record<string, any>>(options: {
    initialValues: T;
    validate?: (values: T) => FormError<T>;
    onSubmit: (values: T) => void;

})


{
     const {initialValues, validate, onSubmit}=options
    const [values, setValues] = useState<T>(initialValues);
    const [error, setError] = useState<FormError<T>>({})
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
            setValues((prev) => (
                { ...prev, [name]: value }
        ))
        
    }
    const handlesubmit = (e:React.FormEvent)=> {
        e.preventDefault()
        if (validate)
        {
            const validationError=validate(values)
            setError(validationError)
            
            if (Object.keys(validationError).length > 0) return
            
        }
        onSubmit(values)
    }
    const register = (name: keyof T) => ({
        name,
        value: values[name],
        onChange: handleChange,
    })
    const resetForm=()=>setValues(initialValues)
return {values   , error, register,handlesubmit,resetForm
                                           
}
}


// type FormError<T> = {
    
//     [K in keyof T]?: string;
// };



// export function useFrom<T extends Record<string, any>>(option: {
//   initialValues: T,
//   validate?: (values: T) => FormError<T>,
//   onSubmit: (values: T) => void
// }) { 
//     const { initialValues,validate,onSubmit}=option
//     const [values, setValues] = useState<T>(initialValues)
//     const [errors, setErrors] = useState<FormError<T>>({});

//     const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const { name, value } = e.target
//         setValues((prev)=>({...prev,[name]:value}))
//     }
//     const handleSubmit = (e:React.FormEvent) => {

//         e.preventDefault()
        
//         if (validate)
//             {const validationError = validate(values);
//              setErrors(validationError)
//         if(Object.keys(validationError).length  > 0) return    
//         else {
//             onSubmit(values)
//         }
       
//         }   

//     }


//     const register = (name: keyof T) => ({
//       name,
//       value: values[name],
//       onChange: handleChange,
//     })
//     return { values, errors, register, handleSubmit, }


// }
