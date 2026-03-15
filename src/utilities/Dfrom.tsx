import { Form } from "antd";
import { useEffect, type ReactNode } from "react";
import { useForm, FormProvider } from "react-hook-form"
import type {
    Resolver,
    DefaultValues,
    SubmitHandler,
    UseFormReturn,
    FieldValues,
} from "react-hook-form";
 
type FormConfig<T extends FieldValues> = {
    defaultValues: DefaultValues<T>,
    resolver: Resolver<T>,
    mode: 'onBlur' | 'onChange' | 'onSubmit' | 'onTouched' | 'all' ,
    id:string
    
}
type FormProps<T extends FieldValues> = {
    onSubmit: SubmitHandler<T>,
    children:ReactNode
} & FormConfig<T>

const Dform = <T extends FieldValues>({ id, defaultValues, resolver, onSubmit, mode='onSubmit', children }: FormProps<T>) => {
   
    const methods:UseFormReturn<T> = useForm<T>({ defaultValues, resolver, mode })
    const { formState, reset } = methods;
    useEffect(() => {
        if (formState.isSubmitSuccessful)
        {
            reset(undefined, {keepDirtyValues:true})
        }
    },[formState.isSubmitSuccessful,reset])
    
    const submit: SubmitHandler<T> = async (data) => {
        try {
            await onSubmit(data);
            methods.reset()
        }
        catch (error) {
            console.error('Form submission failed:', error);
        }
    }

    return (<>
        <FormProvider {...methods}>
            <Form  id={id}  onFinish={methods.handleSubmit(submit)}>
                { children}
            </Form>
        </FormProvider></>)
}

export default Dform