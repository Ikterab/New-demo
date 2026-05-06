import React from 'react'
import { motion } from 'framer-motion'
import { Users } from 'lucide-react'
import { Link } from 'react-router-dom'
// import Career from '../../../public/Pageimage/Career.avif'
const Careers = () => {
    return (
        <main>
            <section className='relative pt-16 pb-24 overflow-hidden'>
                <div className='w-full container max-w-screen-xl mx-auto horizontal-padding'>

                    <div className='flex flex-col lg:flex-row items-center gap-12'>
                        {/* RIGHT SIDE: TEXT & LEADERSHIP INFO */}
                        <div className='w-full lg:w-1/2'>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                            >
                                <div className='max-w-2xl'>
                                    <h1 className='text-5xl sm:whitespace-nowrap font-medium mb-6'>Build your career with us</h1>
                                    <p className='text-slate-600 text-lg leading-relaxed mb-6'>
                                        At SKR Group, we are dedicated to delivering innovative solutions across our diverse business concerns, driving meaningful impact through excellence, integrity, and collaboration. With a clear vision for innovation, we operate across multiple industries, consistently providing value-driven solutions that contribute to sustainable growth and global progress.
                                    </p>

                                    <p className='text-slate-500 text-base leading-relaxed mb-10'>
                                        We welcome qualified and interested candidates to submit their Curriculum Vitae (CV) to our Human Resources team for consideration. Please send your application via email to{" "}
                                        <a
                                            // href="mailto:hr@skrgroup.org"
                                            href="https://mail.google.com/mail/?view=cm&fs=1&to=hr@skrgroup.org"
                                            className="text-blue-600 hover:text-text text-lg font-medium"
                                        >
                                            hr@skrgroup.org
                                        </a>
                                    </p>
                                    <Link to='/dropcv'>

                                    </Link>

                                    {/* --- NEW LEADERSHIP BLOCK (Signature Style) --- */}

                                </div>
                            </motion.div>
                        </div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className='relative w-full lg:w-1/2'
                        >
                            {/* Soft Gradient Glow */}
                            <div className='absolute -top-10 -left-10 w-72 h-72 bg-blue-50/50 rounded-full blur-3xl z-0' />

                            {/* Minimalist Image Frame */}
                            <div className='relative z-10 rounded-[3rem] -mt-1 overflow-hidden shadow-[0_32px_64px_-15px_rgba(0,0,0,0.1)] border-[12px] border-slate-50'>
                                <img
                                    // src={Career}
                                    src=''
                                    alt='Career with SKR'
                                    className='w-full h-[500px] object-cover transition-transform duration-1000 hover:scale-105'
                                />
                            </div>
                        </motion.div>


                    </div>
                </div>
            </section>
        </main>
    )
}

export default Careers