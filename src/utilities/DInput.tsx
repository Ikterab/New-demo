import React from "react";
import { Controller } from "react-hook-form";
import { Form, Input } from "antd";
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5';
import type { ReactNode } from "react";
import { required } from "zod/mini";
import { cn } from "./utilis";

type DInputprops = {
    type?: string;
    name: string;
    label?: string | ReactNode;
    disabled?: boolean;
    icon?: ReactNode;
    placeholder?: string;
    className?: string;
    required?: boolean;

}

const DInput = ({ type, name, required, label, disabled, icon, placeholder, className }: DInputprops) => {

    return (
        <Controller
            name={name}
            rules={{required:required ? `${label} is required`: false}}
            render={({ field, fieldState: { error } }) => (
                <Form.Item
                    label={label}
                >
                    {type === 'password' ? (
                    
                        <Input.Password
                            {...field}
                            type={type }
                            id={name}
                            className={cn(className)}
                            size='large'
                            disabled={disabled}
                            iconRender={(visible) => visible ? (<IoEyeOutline />) : (<IoEyeOffOutline />)}
                        
                            placeholder={placeholder}
                        />

                    )
                        : (
                            <Input
                                {...field}
                                type={type}
                                placeholder={placeholder}
                                id={name}
                                disabled={disabled}
                                size='large'
                            />
                        ) }     
            </Form.Item>
                
           )}
        />
    )
    
}
export default DInput
