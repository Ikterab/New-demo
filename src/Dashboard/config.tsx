import React from "react";
import type {ReactNode} from 'react'
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

export type dashboardMenuItem = {
    name: string,
    path: string,
    icon: ReactNode,
}
export type categoryType= typeof Category[keyof typeof Category]
export type Dashboardrole = {
    sidebarbg: string,
    textclass: string,
    rootpath: string,
    menu: dashboardMenuItem[],
}     

export const dashboardConfig: Record< categoryType, Dashboardrole> ={
// export const dashboardConfig: { [key in Category]: Dashboardrole } ={
   [Category.Requester]: {
        sidebarbg: "bg-blue-500",
        textclass:"text-black",
        // rootpath: "/requester",
        rootpath: '',
        menu: [
            // { name: 'Dashboard', path: '/dashboard/requester', icon: null },
            // { name: 'Test 1', path: '/dashboard/requester/test1', icon: null },
            // { name: 'Test 2', path: '/dashboard/requester/test2', icon: null }
            // { name: 'Test 3', path: '/dashboard/requester/test3', icon: null }


        ]
    },
    [Category.Admin]: {
        sidebarbg: "bg-black",
        textclass: "text-white",
        // rootpath: "/requester",
        rootpath: '',
        menu: []
    },
    [Category.Accountant]: {
        sidebarbg: "bg-red-500",
        textclass:"text-white",
        // rootpath: "/requester",
        rootpath: '',
        menu: []
    },
}