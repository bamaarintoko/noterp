'use client'
import { useEffect, useRef, useState } from "react"
import { Oswald, Poppins } from "next/font/google";
import Link from "next/link";
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
export default function HeaderMobile() {
    const textMenuClass = `${oswald.className} text-xl font-bold`
    const [open, setOpen] = useState<boolean>(false)

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

    const handleDrawer = () => {
        // console.log('qweqeqwe')
        setOpen(!open)
    }
    const goto = (id: string) => {
        console.log("id ", id)
        handleDrawer()
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    }
    return (
        <div>
            {/* mobile */}
            <div className=" block md:hidden lg:hidden xl:hidden" >
                <div className={`p-2.5 transition-colors duration-500 ${isAtTop ? "bg-transparent" : "bg-white"}`}>


                    <div onClick={handleDrawer} className="cursor-pointer w-7 h-7 flex items-center justify-center">
                        <svg className="w-6 h-6 text-gray-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h14" />
                        </svg>

                    </div>
                </div>

                <div className="relative z-50" aria-labelledby="slide-over-title" role="dialog" aria-modal="true">
                    <h2 id="slide-over-title" className="sr-only">Navigation Panel</h2>
                    <div className={`fixed inset-0 bg-gray-500/75 transition-opacity ease-in-out duration-500 ${open ? "opacity-100 pointer-events-none" : "opacity-0 pointer-events-none"
                        }`} aria-hidden="true"></div>

                    <div className="fixed overflow-hidden">
                        <div className="absolute inset-0 overflow-hidden">
                            <div className="pointer-events-none fixed inset-y-0 flex max-w-full pr-10">
                                <div className={` pointer-events-auto relative w-screen max-w-md transform transition ease-in-out duration-500 sm:duration-700 ${open ? "translate-x-0" : "-translate-x-full"
                                    }`}>
                                    <div className="absolute top-0 right-0 -ml-8 flex pt-4 pr-2 sm:-ml-10 sm:pr-4">
                                        <button onClick={handleDrawer} type="button" className="relative rounded-md text-gray-300 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden">
                                            <span className="absolute -inset-2.5"></span>
                                            <span className="sr-only">Close panel</span>
                                            <svg className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                    </div>

                                    <div className="flex h-full flex-col overflow-y-auto bg-white py-6 shadow-xl">
                                        <div className="relative mt-6 flex-1 px-4 sm:px-6 flex-col">
                                            {/* <!-- Your content --> */}
                                            <div className="flex ml-auto gap-8 z-10 flex-col">
                                                <div className="cursor-pointer" onClick={() => goto("homemob")}>
                                                    <p className={`${oswald.className} text-xl font-bold `}>HOME</p>
                                                </div>
                                                <div className="cursor-pointer" onClick={() => goto("aboutmob")}>
                                                    <p className={textMenuClass}>ABOUT</p>
                                                </div>
                                                <div className="cursor-pointer" onClick={() => goto("pricemob")}>

                                                    <p className={textMenuClass}>PRICE</p>
                                                </div>
                                                <div className="cursor-pointer" onClick={() => goto("contactusmob")}>

                                                    <p className={textMenuClass}>CONTACT</p>
                                                </div>
                                                <Link href="/auth/login">
                                                    <div className="border border-sky-400 rounded-md px-8 py-1 inline-block">

                                                        <p className={`${oswald.className} text-sky-400`}>LOGIN</p>
                                                    </div>
                                                </Link>
                                            </div>
                                            <div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* tablet */}
            <div className={`hidden md:flex lg:hidden xl:hidden md:px-8 md:py-3.5 gap-8 z-20 transition-colors duration-500 ${isAtTop ? "bg-transparent" : "bg-white"}`}>
                <div className="z-10">
                    <div className="cursor-pointer" onClick={() => goto("hometab")}>
                        <p className={`${oswald.className} text-xl font-bold ${isAtTop ? "text-white" : "text-black"}`}>HOME</p>
                    </div>
                </div>
                <div className="flex ml-auto gap-8 z-10">
                    <div className="cursor-pointer" onClick={() => goto("abouttab")}>
                        <p className={textMenuClass}>ABOUT</p>
                    </div>
                    <div className="cursor-pointer" onClick={() => goto("pricingtab")}>

                        <p className={textMenuClass}>PRICE</p>
                    </div>
                    <div className="cursor-pointer" onClick={() => goto("contactustab")}>
                        <p className={textMenuClass}>CONTACT</p>
                    </div>
                </div>
                <div>
                    <Link href="/auth/login">
                        <div className="border border-sky-400 rounded-md px-8 py-1 inline-block">

                            <p className={`${oswald.className} text-sky-400`}>LOGIN</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}