import React from "react";
import { RxCross2 } from "react-icons/rx";




export const FilterCard = ({ label,onclear}:any) => {
    return (
        <div className=" px-5 py-1  inline-block rounded-sm bg-gray-200 mb-2 ">
            <div className="flex gap-4">
                <div className="bg-gray-600 h-[10px] w-[10px] rounded  mt-[2px]"></div>
                <span className=" text-sm text-gray-600">{label}</span>
                {/* <button onClick={() => handleClearfield("name")}> */}
                <button onClick={onclear} >
                    <RxCross2 />
                </button>

            </div>
        </div>

    )
    
}