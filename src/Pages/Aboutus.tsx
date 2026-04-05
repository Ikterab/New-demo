import { react } from 'react'

// import organic1 from '../../../public/CompanyOverview/OrganicBD/Organic Banner_Desktop.png'
// import organic4 from'../../../public/CompanyOverview/OrganicBD/Organic Banner_Mobile.png'
import { motion } from "framer-motion"
// import Testimg from '../../assets/foraboutus.avif'
export function AboutUs() {
    return (
        <div className='p-6 bg-white'>
            {/* <section>
                <picture className='relative h-48 md:h-80 w-full overflow-hidden'>
                    <source media='(min-width:1200px)' srcSet={organic1} />
                    <source media='(max-width: 575px)' srcSet={ organic4} />
                    <img src={organic1 } className='w-full h-full object-cover' />
                </picture>
            </section> */}
            <div className='absolute -top-10 -left-10 w-72 h-72 bg-blue-50/50 rounded-full blur-3xl z-0'></div>
            <div className='flex flex-col md:flex-row w-7xl  wrap-none gap-6  justify-center   m-auto  p-9 mt-5 rounded-lg '>
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                >
                    <div className=' rounded-[3rem] -mt-1 overflow-hidden shadow-[0_32px_64px_-15px_rgba(0,0,0,0.1)] border-[12px] border-slate-50'>
                        <img src='' className=' min-w-[600px] h-[600px] transition-transform duration-1000 hover:scale-105' />

                    </div>
                </motion.div>
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.7 }}
                >
                    <div className='flex flex-col gap-6 text-[20px] pt-8'>
                        <p className='font-sans'>SKR Group is a dynamic and diversified business conglomerate founded and led by Sheikh Khaledur Rahman. With a strong vision for innovation, we operate across multiple industries to deliver value-driven solutions internationally.

                            Driven by passion and professionalism, we have established five distinct concerns, each maintaining a unified commitment to quality and customer satisfaction.</p>
                        <p className='text-gray-500 font-sans'>
                            Driven by passion and professionalism, we have established five distinct concerns, each maintaining a unified commitment to quality and customer satisfaction.
                        </p>
                        <div>

                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )

}