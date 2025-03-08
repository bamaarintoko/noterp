import Image from "next/image";

export default function AboutUs() {
    return (
        <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
            <div className="w-full justify-start items-center gap-8 grid lg:grid-cols-2 grid-cols-1">
                {/* Left Section */}
                <div className="w-full flex-col justify-start lg:items-start items-center gap-10 inline-flex">
                    <div className="w-full flex-col justify-start lg:items-start items-center gap-4 flex">
                        <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                            Maksimalkan Kinerja Bisnis dengan Solusi Terintegrasi dan Efisien
                        </h2>
                        <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                            Kami percaya bahwa bisnis yang terhubung dan terintegrasi dapat mencapai efisiensi dan pertumbuhan yang lebih baik.
                            Melalui solusi ERP yang kami tawarkan, kami membantu perusahaan mengelola operasional dengan lebih mudah,
                            meningkatkan kolaborasi, dan mengambil keputusan berbasis data. Dengan teknologi yang terus berkembang, kami berkomitmen
                            untuk mendukung bisnis dari berbagai skala agar lebih produktif, inovatif, dan siap menghadapi tantangan masa depan.
                        </p>
                    </div>
                    <button className="sm:w-fit w-full px-3.5 py-2 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                        <span className="px-1.5 text-white text-sm font-medium leading-6">Get Started</span>
                    </button>
                </div>

                {/* Right Section with Next.js Image */}
                <div className="relative w-full h-[400px] ">
                    <Image
                        src="https://pagedone.io/asset/uploads/1717751272.png"
                        alt="About Us image"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-3xl"
                        priority
                    />
                </div>
            </div>
        </div>
    )
}