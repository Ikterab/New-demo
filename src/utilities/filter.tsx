import { Input } from "antd";
import { FaFilter } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

export const Filtercolumn = ({search,setSearch,dataIndex}:any) => {
    return {

        filterDropdown: ({ close }) => (
            <div className="flex items-center">
                <div className="flex justify-between p-2"> 
                    <Input
                        placeholder={`Enter ${dataIndex}`}
                        value={search[dataIndex]}
                        onChange={(e) => setSearch((prev: any) => ({ ...prev, [dataIndex]: e.target.value }))}
                        className=""
                    />
                    {search[dataIndex] && (<button
                        onClick={() => { setSearch((prev: any) => ({ ...prev, [dataIndex]: "" })) }}
                    >
                        <RxCross2 size={20} />
                    </button>)}
                        

                    
              </div>
                
               
         </div>   
        ),
        filterIcon: () => (
            <FaFilter
            className=""
            />

        )
    }
    
        

    
}