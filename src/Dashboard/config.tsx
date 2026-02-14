import React from "react";

// type Userole = {
//     category: Category
// }

// export enum Category {
//     Requester = 'Requester',
//         Admin = "Admin",
//         Accountant = 'Accountant',
// }
export const Category = {
    Requester:'Requester',
            Admin:"Admin",
            Accountant:'Accountant',
} as const
export type categoryType= typeof Category[keyof typeof Category]
export type Dashboardrole = {
    sidebarbg: string,
    textclass: string,
    rootpath: string

}     

export const dashboardConfig: Record< categoryType, Dashboardrole> ={
// export const dashboardConfig: { [key in Category]: Dashboardrole } ={
   Requester: {
        sidebarbg: "bg-blue-500",
        textclass:"text-white",
        // rootpath: "/requester",
        rootpath:''
    },
    Admin: {
        sidebarbg: "bg-black",
        textclass: "text-white",
        // rootpath: "/requester",
        rootpath: ''
    },
    Accountant: {
        sidebarbg: "bg-red-500",
        textclass:"text-white",
        // rootpath: "/requester",
        rootpath:''
    },
}