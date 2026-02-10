import React from "react";

// type Userole = {
//     category: Category
// }

export enum Category {
    Requester = 'Requester',
        Admin = "Admin",
        Accountant = 'Accountant',
}

export type Dashboardrole = {
    sidebarbg: string,
    textclass: string,
    rootpath: string

}     

export const dashboardConfig: Record<Category, Dashboardrole> ={
    [Category.Requester]: {
        sidebarbg: "bg-blue-500",
        textclass:"text-white",
        // rootpath: "/requester",
        rootpath:''
    },
    [Category.Admin]: {
        sidebarbg: "bg-black",
        textclass: "text-white",
        // rootpath: "/requester",
        rootpath: ''
    },
    [Category.Accountant]: {
        sidebarbg: "bg-red-500",
        textclass:"text-white",
        // rootpath: "/requester",
        rootpath:''
    },
}