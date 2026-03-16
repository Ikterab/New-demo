import { Upload,Form, Button} from 'antd'

import { type ReactNode } from 'react'
import { useState } from 'react'
import { UploadOutlined } from "@ant-design/icons";
import { Controller,useFormContext } from 'react-hook-form'
import type { UploadFile } from 'antd'
type uplodeprops = {
    name: string,
    icon?: ReactNode;
    placeholder?: string;
    required?: string;
    label?: string;
    acceptTypes?: string;
    multipleTypes?: boolean;
    classNema?: string;
}

const DUplode = ({ name, classNema, required, label, icon, placeholder, acceptTypes = '.png,.jpg,.jpeg,.pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.txt,.csv', multipleTypes=false }:uplodeprops) => {
    const { control } = useFormContext()
    const [fileList, setFileList]=useState<UploadFile[]>([])
    return (
        <Controller
            name={name}
            rules={{ required: required ? `${label} is required` : false }}
            render={({ field, fieldState: { error } }) => (
                <Form.Item
                    validateStatus={error ?'error':'' }
                >
                    <Upload
                        beforeUpload={() => false}
                        accept={acceptTypes}
                        multiple={multipleTypes}
                        onChange={({ fileList: newFileList }) => {
                            setFileList(newFileList)
                            field.onChange(newFileList)
                        }}
                        onRemove={(file) => {
                            const newList = fileList.filter((f) => f.uid !== file.uid)
                            setFileList(newList)
                            field.onChange(newList)
                        }}
                    >
                        <Button icon={icon || <UploadOutlined />}></Button> 
                        {placeholder}
                    </Upload>
                </Form.Item>


            ) }
        />
    )
}