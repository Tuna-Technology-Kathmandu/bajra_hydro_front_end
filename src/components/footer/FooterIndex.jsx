import { Link } from "react-router-dom";
import { FooterLinks } from "../../localData/footer/FooterLinks";
import CompanyLinks from "./CompanyLinks";
import Subscribe from "./Subscribe";
import { ReactComponent as Down } from '../../assets/svg/chevronDown.svg';
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const FooterIndex = () => {
    const quickLinks = FooterLinks.find(item => item.Quick)?.Quick || [];
    const contactLinks = FooterLinks.find(item => item.Contacts)?.Contacts || [];
    const [showQuick, setShowQuick] = useState(false);
    const [showContactUs, setShowContactUs] = useState(false);

    return (
        <>
            <footer className="bg-[#48CAE4] p-[75px] max-2xl:p-[55px] flex justify-between gap-24 max-[996px]:gap-14 max-2xl:flex-col" >
                <CompanyLinks />
                <div className="flex justify-between w-full max-2xl:justify-center max-[764px]:flex-wrap max-[528px]:flex-col max-[528px]:items-start max-2xl:gap-14">
                    <div className="max-[996px]:text-center max-[764px]:w-full">
                        <h1 className="font-bold text-base max-[996px]:text-sm max-[764px]:hidden">Quick Links</h1>

                        {/* below is for small screen */}
                        <div className="hidden font-semibold text-base max-[996px]:text-sm max-[764px]:flex justify-between border-b-[0.6px] 
                    border-b-black pb-2 items-center                   "
                            onClick={
                                () => setShowQuick(!showQuick)
                            }
                        >
                            <p className="font-bold text-xs">Quick Links</p>
                            <Down className='w-[10px] h-[7px] stroke-2 stroke-black' />
                        </div>
                        <div>
                            <AnimatePresence>
                                {
                                    showQuick && (
                                        <motion.ul
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.7, ease: 'easeInOut' }}

                                            className="mt-2 flex-col  gap-2 max-[996px]:gap-1 hidden max-[764px]:flex rounded-[8px] bg-[#1637BA33]">
                                            {
                                                quickLinks.map((items, index) => {
                                                    const { name, path } = items;
                                                    return (
                                                        <li key={index} className={`font-medium text-[13px] border-b-black/35 p-1
                                                    ${index == 3 ? 'border-b-[0px]' : 'border-b-[0.6px]'}
                                                    `}>
                                                            <Link to={path} onClick={() => {
                                                                setShowQuick(false)
                                                                setShowContactUs(false)

                                                            }}>
                                                                {name}
                                                            </Link>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </motion.ul>
                                    )
                                }
                            </AnimatePresence>
                        </div>


                        {/* below is for large screen */}
                        <ul className="mt-3 flex flex-col  gap-2 max-[996px]:gap-1 max-[764px]:hidden">
                            {
                                quickLinks.map((items, index) => {
                                    const { name, path } = items;
                                    return (
                                        <li key={index} className="font-medium text-[13px] max-[996px]:text-[11px]  hover:text-commonblue/70 transition-all duration-300 ease-in-out">
                                            <Link to={path} >
                                                {name}
                                            </Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className="max-[996px]:text-center max-[764px]:w-full">
                        <h1 className="font-bold text-base max-[996px]:text-sm max-[764px]:hidden ">Contacts</h1>

                        {/* below is for small screen */}
                        <div className="hidden font-semibold text-base max-[996px]:text-sm max-[764px]:flex justify-between border-b-[0.6px] 
                    border-b-black pb-2 items-center
                    "
                            onClick={() => setShowContactUs(!showContactUs)}
                        >
                            <p className="font-bold text-xs">Contact Us</p>
                            <Down className='w-[10px] h-[7px] stroke-2 stroke-black' />
                        </div>

                        <div>
                            <AnimatePresence>
                                {
                                    showContactUs && (
                                        <motion.ul
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.7, ease: 'easeInOut' }}
                                            className="mt-2 flex-col  gap-2 max-[996px]:gap-1 hidden max-[764px]:flex bg-[#1637BA33] rounded-[8px]">
                                            {
                                                contactLinks.map((items, index) => {
                                                    const { name, path } = items;
                                                    return (
                                                        <li key={index} className={`font-medium text-[13px] border-b-black/35 p-1
                                                ${index == 2 ? 'border-b-[0px]' : 'border-b-[0.6px]'}
                                                `}>
                                                            <a href={path} onClick={() => {
                                                                setShowQuick(false)
                                                                setShowContactUs(false)

                                                            }}>
                                                                {name}
                                                            </a>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </motion.ul>
                                    )
                                }
                            </AnimatePresence>
                        </div>
                        {/* this is for large screeen */}

                        <ul className="w-[280px] mt-3 flex flex-col gap-2 max-[996px]:gap-1 max-[764px]:hidden  ">
                            {
                                contactLinks.map((items, index) => {
                                    const { name, path } = items;
                                    return (
                                        <li key={index}>
                                            <Link to={path} className={`font-medium text-[13px] max-[996px]:text-[11px] max-[996px]:text-center ${index !== 1 ? 'hover:text-commonblue/70' : ''} transition-all duration-300 ease-in-out`} >
                                                {name}
                                            </Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <Subscribe />
                </div>

            </footer>
            <div className="bg-lightblue text-center px-[75px] max-2xl:px-[55px]">
                <p className="font-semibold text-[15px] tracking-[0.02em] border-t-[0.5px] border-t-black/60 py-[15px]
                max-[996px]:text-[13px] max-[764px]:text-xs
                ">Copyright © 2025. All Rights Reserved.</p>
            </div>
        </>
    )
}
export default FooterIndex;