import { createContext,  useState, useEffect } from "react";

export const UserContext = createContext<any>(null);

const Contextfortest = ({ children }: any) => {
    const UserTabledata = JSON.parse(localStorage.getItem('tableData') || "[]")
    const [userData, setUserData] = useState<any>(UserTabledata)
    useEffect(() => {
        localStorage.setItem('tableData', JSON.stringify(userData))
    }, [userData])
    const addUserdata = (user: any) => {
        setUserData((prev: any) => [...prev, user])
    }
    
    return (
        <UserContext.Provider value={{userData, addUserdata}} >{ children}</UserContext.Provider>
    )
}

export default Contextfortest