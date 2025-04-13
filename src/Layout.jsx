import { Outlet } from "react-router-dom";
import NavbarIndex from "./components/navbar/NavbarIndex";
import FooterIndex from "./components/footer/FooterIndex";
import SearchContainer from "./components/navbar/SearchContainer";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Layout = () => {
    const [showSearch, setShowSearch] = useState(false);

    return (
        <div className="relative h-auto">
            <div className="absolute top-9 z-50 w-full flex justify-center">
                <NavbarIndex setShowSearch={setShowSearch} />
            </div>
            {/* Renders the child routes here */}
            <div className="w-full flex-grow mb-9">
                <Outlet />
            </div>
            <div className="bottom-0 w-full">
                <FooterIndex />
            </div>
            {/* search list */}
            <AnimatePresence>
                {
                    showSearch && (
                        <motion.div className="absolute top-0 w-full z-[60]"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                        >
                            <SearchContainer setShowSearch={setShowSearch}/>
                        </motion.div>
                    )
                }
            </AnimatePresence>
        </div>
    );
};

export default Layout;