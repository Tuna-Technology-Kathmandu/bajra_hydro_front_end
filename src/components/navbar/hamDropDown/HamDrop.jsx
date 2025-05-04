import { NavLink } from "react-router-dom";
import { ReactComponent as Cross } from '../../../assets/svg/cross.svg';
// import { useState } from "react";
// import { ReactComponent as Back } from '../../../assets/svg/blackBack.svg';
// import { AnimatePresence, motion } from "framer-motion";

const HamDrop = ({ lists, setShowHam }) => {
    // const [showProject, setShowProject] = useState(false);

    // const projectData = [
    //     {
    //         name: 'Ongoing Project',
    //         path: '/ongoing-projects',
    //     },
    //     {
    //         name: 'Past Project',
    //         path: '#',
    //     },
    //     {
    //         name: 'Future Project',
    //         path: '#',
    //     }
    // ]

    const clickItem = () => {
       
            setShowHam(false);
        
    };
    return (
        <div className="bg-white border-[0.5px] border-black/50  w-full p-6 h-auto text-black ">
            <div className={`flex w-full justify-end items-center mb-5`}>
                {/* {
                    showProject && (
                        <Back className="w-[20px] h-[20px] text-black"
                            onClick={() => {
                                setShowHam(true)
                                setShowProject(false)
                            }}

                        />
                    )
                } */}
                <Cross className='w-[30px] h-[30px] stroke-black'
                    onClick={() => {
                        setShowHam(false)
                    }} />
            </div>
                    <ul className="Flex-Col space-y-4 list-none h-auto mb-5 justify-between">
                        {
                            lists.map((item, index) => {
                                const { name, path } = item;
                                return (
                                    <li key={index} className='flex w-full justify-between items-center border-b-[0.5px] border-b-black/50 pb-2'
                                        onClick={() => clickItem(name)}
                                    >
                                        <NavLink to={path} className='font-medium text-black max-1md:text-sm'>{name}</NavLink>
                                    </li>
                                )
                            })
                        }

                    </ul>

                {/* {
                    showProject && (
                        <motion.ul className="Flex-Col space-y-4  list-none h-auto mb-5 justify-between"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5, ease: 'easeInOut' }}
                        >
                            {
                                projectData.map((item, index) => {
                                    const { name, path } = item;
                                    return (
                                        <li key={index} className='flex w-full justify-between items-center border-b-[0.5px] border-b-black/50 pb-2'
                                        >
                                            <NavLink to={path} className='font-medium text-black max-1md:text-sm'>{name}</NavLink>
                                        </li>
                                    )
                                })
                            }

                        </motion.ul>
                    )
                } */}

        </div>
    )
}
export default HamDrop