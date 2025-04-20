import { NavLink, useLocation } from "react-router-dom";
import { NavItem } from "../../localData/NavItem";
import { ReactComponent as Logo } from '../../assets/svg/bajra-logo.svg';
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ReactComponent as Search } from '../../assets/svg/search.svg';
import { ReactComponent as Ham } from '../../assets/svg/hamburger.svg';
import HamDrop from "./hamDropDown/HamDrop";

const NavbarIndex = ({ setShowSearch }) => {
    const [active, setActive] = useState('Home');
    const [isSticky, setIsSticky] = useState(false);
    const [showHam, setShowHam] = useState(false); //for hamburger menu in small screens
    const [showHamMenu, setShowHamMenu] = useState(false) //for ham sub menu, company,brands,etc
    const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 747);
    const [showProject, setShowProject] = useState(false);
    const [showTextBlack, setShowTextBlack] = useState(false);

    //track window size
    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth >= 747);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Track Scroll Position
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 180) {  // If scrolled down 80px
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const location = useLocation();

    useEffect(() => {
        const currentPath = location.pathname;

        if (currentPath.startsWith('/ongoing-projects') || currentPath.startsWith('/future-projects') || currentPath.startsWith('/past-projects')) {
            setActive('Projects');
            return;
        }

        if (currentPath.startsWith('/single-news')) {
            setActive('News');
            return;
        }
        // Otherwise
        const matchedNav = NavItem.find(item => item.path === currentPath);
        if (matchedNav) {
            setActive(matchedNav.name);
        }
    }, [location]);


    const setActiveFunction = (item) => {
        if (item !== 'Projects') {
            setActive(item);
        }
    }
    // check for single pages to make navbar text black
    useEffect(() => {
        const currentPath = location.pathname;
        if (currentPath.startsWith('/single-news')) {
            setShowTextBlack(true);
        } else {
            setShowTextBlack(false);
        }
    }, [location.pathname]
    )

    // for search continer showing
    const clickSearch = () => {
        setShowSearch(true);
        setShowHam(false);
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    return (
        <>
            {
                isDesktop && (
                    <nav className={`w-full px-16 max-md:px-10 ${isSticky ? "fixed top-0 left-0 bg-white text-black shadow-md z-50 py-1" : "relative text-white"}`}>
                        <div className='flex w-full justify-between items-center py-3 transition-all duration-300 max-[714px]:hidden'
                        >


                            {/* Logo */}
                            <div className="w-[110px] h-[90px] max-2xl:w-[90px] max-2xl:h-[80px] max-xl:w-[70px]"
                            >
                                <NavLink to='/'>
                                    <Logo className='w-full h-full' />
                                </NavLink>
                            </div>

                            {/* Navigation Items */}
                            <div className="flex items-center h-auto justify-end gap-8 max-1xl:gap-6">
                                <ul className="flex justify-between gap-8 max-1xl:gap-6 items-center h-full relative">
                                    {NavItem.map((item, index) => {
                                        const isProject = item.name === 'Projects';

                                        return (
                                            <li key={index}
                                                onClick={() => {
                                                    if (isProject) {
                                                        setShowProject(!showProject);
                                                        setActiveFunction(item.name)
                                                    } else {
                                                        setActiveFunction(item.name);
                                                        setShowProject(false);
                                                    }
                                                }}
                                                className={`font-semibold relative text-[17px] max-2xl:text-[15px] max-xl:text-[13px] ${isProject ? 'group' : ''}
                                                ${showTextBlack || isSticky ? 'text-black' : 'text-white'}
                                                `}
                                            >
                                                <NavLink
                                                    to={item.path}
                                                >
                                                    {item.name}
                                                </NavLink>
                                                {active === item.name && (
                                                    <motion.div
                                                        layoutId="underline"
                                                        className="absolute -bottom-[4px] left-0 h-[2.5px] w-full bg-amber-500"
                                                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                                                    />
                                                )}
                                                {/* Dropdown only for 'Project' */}
                                                <AnimatePresence>
                                                    {isProject && showProject && (
                                                        <motion.div
                                                            initial={{ opacity: 0 }}
                                                            animate={{ opacity: 1 }}
                                                            exit={{ opacity: 0 }}
                                                            transition={{ duration: 0.5, ease: 'easeInOut' }}

                                                            className="absolute left-0 top-full mt-2 w-[200px] bg-white text-black rounded shadow-md z-50">
                                                            <ul className="p-2 space-y-2">
                                                                <li className="hover:bg-gray-100 px-3 py-1 text-sm max-2xl:text-[13px] max-xl:text-xs cursor-pointer">
                                                                    <NavLink to='/ongoing-projects'>
                                                                        Ongoing Projects
                                                                    </NavLink>
                                                                </li>
                                                                <li className="hover:bg-gray-100 px-3 py-1 text-sm max-2xl:text-[13px] max-xl:text-xs cursor-pointer">
                                                                    <NavLink to='/ongoing-projects'>
                                                                        Past Projects
                                                                    </NavLink>
                                                                </li>
                                                                <li className="hover:bg-gray-100 px-3 py-1 text-sm max-2xl:text-[13px] max-xl:text-xs cursor-pointer">
                                                                    <NavLink to='/ongoing-projects'>
                                                                        Future Projects
                                                                    </NavLink>
                                                                </li>
                                                            </ul>
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </li>
                                        )
                                    })}
                                </ul>

                                {/* Search Icon */}
                                <div className="-mt-1 h-[20px] w-[20px] max-xl:w-[17px] max-xl:h-[17px] cursor-pointer"
                                    onClick={clickSearch}
                                >
                                    <Search className={`w-full h-full ${showTextBlack || isSticky ? "fill-black" : "fill-white"
                                        }`} />
                                </div>
                            </div>
                        </div>
                    </nav>
                )
            }
            {!isDesktop && (
                <div className="h-auto px-10 w-full">
                    <div className="flex items-center w-full justify-between pr-9">
                        <Ham className='w-[80px] h-[80px] max-1md:scale-75' onClick={() => setShowHam(!showHam)} />
                        <NavLink to='/'>
                            <Logo className='w-[180px] h-[80px] max-1md:scale-75' />
                        </NavLink>
                        <Search className='h-[20px] w-[20px] max-1md:scale-75'
                            onClick={clickSearch}
                        />
                    </div>
                    <AnimatePresence>
                        {showHam && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5, ease: 'easeInOut' }}
                            >
                                <HamDrop lists={NavItem} setShowHam={setShowHam} />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            )}
        </>
    );
};

export default NavbarIndex;



