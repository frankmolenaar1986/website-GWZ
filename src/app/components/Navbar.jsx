"use client"

import Image from "next/image"
import Link from "next/link"
import Logo from "../../../public/GTZ-cropped.gif"
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"
import { useState } from "react"

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleNav = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <nav className="fixed w-full h-24 shadow-xl bg-white">
            <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16">
                <Link href="/">
                    <Image
                        src={Logo}
                        alt="logo"
                        width="100"
                        height="50"
                        className="cursor-pointer"
                        priority
                    />
                </Link>
                <div className="hidden md:flex">
                    <ul className="hidden md:flex">
                        <Link href="/pages/about">
                            <li className="ml-10 uppercase hover:border-b">Over ons</li>
                        </Link>
                        <Link href="/pages/gwz">
                            <li className="ml-10 uppercase hover:border-b">Geïntegreerde Wijkzorg</li>
                        </Link>
                        <Link href="/pages/municipalities">
                            <li className="ml-10 uppercase hover:border-b">gemeenten</li>
                        </Link>
                        <Link href="/pages/themes">
                            <li className="ml-10 uppercase hover:border-b">Thema&apos;s</li>
                        </Link>
                        <Link href="/pages/therapists">
                            <li className="ml-10 uppercase hover:border-b">Therapeuten</li>
                        </Link>
                        <Link href="/pages/wayofwork">
                            <li className="ml-10 uppercase hover:border-b">Werkwijze</li>
                        </Link>
                        <Link href="/pages/organisations">
                            <li className="ml-10 uppercase hover:border-b">Wijkzorgorganisaties</li>
                        </Link>
                    </ul>
                </div>
                <div onClick={handleNav} className="md:hidden cursor-pointer pl-24">
                    <AiOutlineMenu size={25} />
                </div>
                <div className={menuOpen
                    ? "fixed left-0 top-0 w-[65%] md:hidden h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
                    : "fixed left-[-100%] top-0 p-10 ease-in duration-500"}>

                    <div className="flex w-full items-center justify-end">
                        <div onClick={handleNav} className="cursor-pointer">
                            <AiOutlineClose size={25} />
                        </div>
                    </div>
                    <div className="flex-col py-4">
                        <ul>
                            <Link href="/pages/about">
                                <li onClick={() => setMenuOpen(false)} className="py-4 cursor-pointer">
                                    Over ons
                                </li>
                            </Link>
                            <Link href="/pages/gwz">
                                <li onClick={() => setMenuOpen(false)} className="py-4 cursor-pointer">
                                    Geïntegreerde Wijkzorg
                                </li>
                            </Link>
                            <Link href="/pages/municipalities">
                                <li onClick={() => setMenuOpen(false)} className="py-4 cursor-pointer">
                                    gemeenten
                                </li>
                            </Link>
                            <Link href="/pages/organisations">
                                <li onClick={() => setMenuOpen(false)} className="py-4 cursor-pointer">
                                    Thema&apos;s
                                </li>
                            </Link>
                            <Link href="/pages/themes">
                                <li onClick={() => setMenuOpen(false)} className="py-4 cursor-pointer">
                                    Therapeuten
                                </li>
                            </Link>
                            <Link href="/pages/therapists">
                                <li onClick={() => setMenuOpen(false)} className="py-4 cursor-pointer">
                                    Werkwijze
                                </li>
                            </Link>
                            <Link href="/pages/wayofwork">
                                <li onClick={() => setMenuOpen(false)} className="py-4 cursor-pointer">
                                    Wijkzorgorganisaties
                                </li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;