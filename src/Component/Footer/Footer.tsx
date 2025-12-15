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
    return (
        <>
            <footer className="w-full w-screen-2xl bg-[white] ">
                <div className="flex lg:flex-nowrap flex-wrap justify-between">
                    <div className="flex flex-col justify-center items-start">
                        <p>Demian</p>
                        <p>Hassle-free blogging platform that developers and teams love.</p>
                    </div>
                <div >
                        <div className="flex lg:flex-nowrap flex-wrap lg:gap-10 gap-3 ">
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
                        </div>  
                        <div>
                            
               </div>
                    
                    
                    </div>
              </div>
                 

            </footer>
        </>
   ) 
}
export default Footer