import React, { useState } from "react";
import { navLinks } from "../constants";
const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false)

    const Navitems = ({ onClick = () => { } }) => {
        return (
            <ul className="flex flex-col  gap-4 sm:flex-row md:gap-6 relative  z-20">
                {navLinks.map(({ id, name, href }) => (

                    <li key={id} className="text-white text-lg md:text-base hover:text-white transition-colors">
                        <a onClick={onClick} href={href} className="text-lg md:text-base hover:text-white transition-colors">{name}</a>

                    </li>

                ))}

            </ul>
        )
    }

    const toggleMenu = () => setIsOpen(!isOpen)
    const closeMenu = () => setIsOpen(false)

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/90  ">
            <div className="max-w-7xl mx-auto border-dashed ">
                <div className="flex justify-between py-5 mx-auto  items-center sm:px-10 px-5 sm:px-10 px-5  ">
                    <a href="/" className=" text-neutral-400 font-bold  transition-colors text-xl hover:text-white  ">Shwetashwat</a>
                    <button onClick={toggleMenu} className="hover:text-white text-neutral-400 sm:block focus:outline-none sm:hidden z-10 flex  " aria-label="Toggle menu">
                        <img src={isOpen ? "assets/close.svg" : "assets/menu.svg"} alt="toggle" className="w-6 h-6 sm:hidden" />
                    </button>

                    <nav className="sm:flex hidden">
                        <Navitems />
                    </nav>
                </div>
            </div>
            <div className={`absolute  text-white left-0 right-0 bg-black-200 backdrop-blur-sm transition-all duration-300 ease-in-out overflow-hidden z-20 mx-auto sm:hidden block ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
                <nav className="p-5">
                    <Navitems onClick={closeMenu} />
                </nav>
            </div>



        </header>

    )
}
export default Navbar;