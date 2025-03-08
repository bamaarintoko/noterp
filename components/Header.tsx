'use client'
import { Oswald, Poppins } from "next/font/google";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
export const oswald = Oswald({
    weight: ['400', '500', '700'], // Specify font weights
    subsets: ['latin'], // Specify subsets (e.g., 'latin', 'latin-ext')
    display: 'swap', // Control font-display
});
export const poppins = Poppins({
    weight: ['400', '500', '700'], // Specify font weights
    subsets: ['latin'], // Specify subsets (e.g., 'latin', 'latin-ext')
    display: 'swap', // Control font-display
});
export default function Header() {
    const textMenuClass = `${oswald.className} text-xl font-bold`

    const [isAtTop, setIsAtTop] = useState(true);
    // const [scrolled50, setScrolled50] = useState(false);
    const ticking = useRef(false);

    useEffect(() => {
        const handleScroll = () => {
            if (!ticking.current) {
                requestAnimationFrame(() => {
                    const scrollTop = window.scrollY;

                    setIsAtTop(scrollTop === 0);
                    // setScrolled50(scrollTop > 50);

                    ticking.current = false;
                });
                ticking.current = true;
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const goto = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    }
    return (
        <div className={`hidden xl:max-w-[1280px] lg:flex xl:flex py-2.5 px-16 gap-8 items-center justify-center transition-colors duration-500 ${isAtTop ? "bg-transparent" : "bg-white"
            }`}>


            <div className="z-10">
                <div className="cursor-pointer" onClick={() => goto("home")}>
                    <p className={`${oswald.className} text-xl font-bold transition-colors duration-500 ${isAtTop ? "text-white" : "text-black"} `}>HOME</p>
                </div>
            </div>
            <div className="flex ml-auto gap-8 z-10">
                <div className="cursor-pointer" onClick={() => goto("about")}>
                    <p className={textMenuClass}>ABOUT</p>
                </div>
                <div className="cursor-pointer" onClick={() => goto("pricing")}>

                    <p className={textMenuClass}>PRICE</p>
                </div>
                <div className="cursor-pointer" onClick={() => goto("contactus")}>
                    <p className={textMenuClass}>CONTACT</p>
                </div>
            </div>
            <div>
                <Link href="/auth/login">

                    <div className="border border-sky-400 rounded-md px-8 py-1 cursor-pointer">
                        <p className={`${oswald.className} text-sky-400`}>LOGIN</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}