import React from "react";


type avatarconfig = {
    user: any,
    roleConfig: {
        textclass: string,
        sidebarbg: string,
    }
}
export const Avatar = ({user,roleConfig}:avatarconfig) => {
    return (
        <div
            // onClick={() => setOpen(!open)}
            className={`h-[60px] w-[60px] ${roleConfig.textclass} rounded-[50%] cursor-pointer ${roleConfig.sidebarbg}  `}>
            <span className="flex justify-center py-3 font-bold text-[23px]">
                {user.name?.[0]}
            </span>

        </div>
    )
} 