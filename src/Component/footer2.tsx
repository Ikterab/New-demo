import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";


const Footer2 = () => {
    const footerItems = [
        {
            title: 'Explore',
            items: ['Homepage', 'Careeers & Culture', 'EMI Options']
        },
        {
            title: ' Terms & Policies',
            items: ['Terms of service', 'Refund guidelince', 'Privacy & Security']
        },
        {
            title: 'Contact',
            items: ['info.genztravels@gmail.com', '+8801898-777394'],
            title1:'follow us',
            image: ['/SocialmediaIcon/facebook.webp', '/SocialmediaIcon/instra.webp', '/SocialmediaIcon/linkdin.webp', '/SocialmediaIcon/tiktok.webp', '/SocialmediaIcon/youtube.webp']
        },
        
        {
            title: 'Need assistance',
            des1: 'Were here 24/7! Reach out via Messenger or call us anytime for instant support.',
            title1: 'Head Office',
            des2:'E-10/1-2, (9th Floor, East Side), Paltan China Town , 67/1, 68 New Paltan, Dhaka-1000'
        },
        {
            title: 'payment gateways',
            image:['/PaymentIcons/master.webp']
        }


    ]

    return (<>
        <footer className="text-[#f1eded] bg-prime font-quicksand">  
            <div className=" max-w-7xl mx-auto py-15  lg:px-4 px-4 grid xl:grid-cols-5 lg:grid-cols-3  sm:grid-cols-2 gap-6 w-full ">
                {footerItems?.map((items, index) => (
                    <div key={index} className="flex flex-col gap-2">
                        <h2 className="min-h-7 font-bold text-lg uppercase">{items?.title}</h2>
                        {
                            items?.items?.map((label, i) => (
                                <div key={i} className="">
                                    <p className="text-[16px] font-light cursor-pointer hover:text-[#44445e] ">{label}</p>

                                </div>
                            ))
                        }
                        {items?.des1 && <p className="text-[15px] font-light">{ items.des1}</p>}
                        {items?.title1 && <h2 className="min-h-7 font-bold text-lg uppercase py-2">{items.title1}</h2>}
                        {items?.des2 && <p className="text-[15px] font-light ">{ items.des2}</p>}
                        
                        <div className="flex gap-2">
                            {
                             items?.image?.map((img) => (

                            <img
                                key={img}
                                src={img}

                               />

                            ))
                            }
                        </div>
                    </div>
                ))

            }
            </div>
            <div className=" max-w-7xl grid sm:grid-cols-2 justify-center mx-auto border-t py-10  px-10">
                <img className="sm:px-0 px-10"
                src={'/CompanyIcon/genz.webp'}
                />
                <p className="text-sm sm:justify-self-end sm:py-0 py-3">© 2026 GenZ Travels. All rights reserved.</p>
            </div>
        </footer>
    </>
    )
}

export default Footer2