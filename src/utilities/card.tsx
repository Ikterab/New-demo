import React from "react";
import { RxCross2 } from "react-icons/rx";




export const FilterCard = ({ label, field,setSearch,  }: any) => {
    const handleClearfield = () => {
        setSearch((prev:any) => ({ ...prev, [field]: '' }))

    }
    return (
        <div className=" px-5 py-1  inline-block rounded-sm bg-gray-200 mb-2 ">
            <div className="flex gap-4">
                <div className="bg-blue-400 h-[8px] w-[8px] rounded  mt-[6px]"></div>
                <span className=" text-sm mt-[2px] text-gray-600">{label}</span>
                <button onClick={ handleClearfield}>
                {/* <button onClick={onclear} > */}
                    <RxCross2 />
                </button>

            </div>
        </div>

    )
    
}