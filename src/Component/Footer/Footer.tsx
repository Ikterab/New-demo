import React from "react";

import { useState } from "react";

const Footer:React.FC = () => {
    const footerItems = {
        Products: [ "Headless CMS",
             "Pricing",
             "GraphQl APIs",
             "Open source Starter-kit"]
        
        ,
        Company: ["About hashnode",
            "Careers",
            "Logos & Media",
            "Changelog",
            "Feature Requests",],
        
             
        Explore: ["My feed",
            "Case studies",
            "Hashnode AI",
            "Referral Program",]
        ,
        Blog: [ "Official Blog",
            "Engineering Blog",
            "Hashnode Townhall",] 
         ,
        Partner: ["Host a Hackathon" ],
        Support: ["Support docs",
            "contact",
            "Join discord",
        ]
    }
    const firstcol = ["Products", "Company"]
    const secondcol = ["Explore", "Blog"]
    const thirdcol = ["Partner", "Support"]

    return (
        <footer className=" w-full  max-w-screen-3xl bg-[black] text-[white]  ">
            <div className="flex w-full max-w-screen-3xl mx-auto xl:flex-nowrap flex-wrap justify-between py-10">
                    <div className="flex flex-col px-10 py-10 items-start">
                        <p>Demian</p>
                        <p>Hassle-free blogging platform that developers and teams love.</p>
                    </div>
                <div  className="flex  justify-center  2xl:gap-40 gap-10 2xl:px-45 px-10 lg:pt-10 pt-10">
                        {/* <div className="flex lg:flex-nowrap flex-wrap lg:gap-10 gap-3 ">
                            {Object.entries(footerItems).map(([title,items]) => (
                                <div className="flex flex-col items-start" key={title}>
                                 <h3>{title}</h3>
                                    <ul className="flex flex-col items-start">
                                        {items?.map((item, index) => (
                                            
                                                <li key={index}>{item }</li>
                                        
                                        ))}
                                </ul>
                                </div>
                            ))}
                        </div>  */}
                        <div className="flex   flex-col   lg:gap-10 gap-3 ">
                            {Object.entries(footerItems)
                                .filter(([title])=>firstcol.includes(title)) 
                                .map(([title, items]) => (
                                <div className="flex flex-col items-start" key={title}>
                                    <h3 className="text-[20px] font-semibold">{title}</h3>
                                    <ul className="flex flex-col items-start">
                                        {items?.map((item, index) => (

                                            <li key={index}
                                            className="whitespace-nowrap"
                                            >{item}</li>

                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-col  lg:gap-10 gap-3 ">
                            {Object.entries(footerItems)
                                .filter(([title]) => secondcol.includes(title))
                                .map(([title, items]) => (
                                    <div className="flex flex-col items-start" key={title}>
                                        <h3 className="text-[20px] font-semibold">{title}</h3>
                                        <ul className="flex flex-col items-start">
                                            {items?.map((item, index) => (

                                                <li key={index} className="whitespace-nowrap" >{item}</li>

                                            ))}
                                        </ul>
                                    </div>
                                ))}
                        </div>
                        <div className="flex  flex-col  lg:gap-10 gap-3 ">
                            {Object.entries(footerItems)
                                .filter(([title]) => thirdcol.includes(title))
                                .map(([title, items]) => (
                                    <div className="flex flex-col items-start" key={title}>
                                        <h3 className="text-[20px] font-semibold">{title}</h3>
                                        <ul className="flex flex-col items-start">
                                            {items?.map((item, index) => (

                                                <li key={index} className="whitespace-nowrap" >{item}</li>

                                            ))}
                                        </ul>
                                    </div>
                                ))}
                        </div>
                    </div>
              </div>
       </footer>
   ) 
}
export default Footer