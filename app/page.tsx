'use client'
import AboutUs from "@/components/AboutUs";
import ContactUs from "@/components/ContactUs";
import Header from "@/components/Header";
import HeaderMobile from "@/components/HeaderMobile";
import PricingTab from "@/components/PricingTab";
import { subscriptionTiers } from "@/lib/constanta";
import { Poppins } from "next/font/google";
import Image from "next/image";
const poppins = Poppins({
	weight: ['400', '500', '700'], // Specify font weights
	subsets: ['latin'], // Specify subsets (e.g., 'latin', 'latin-ext')
	display: 'swap', // Control font-display
});
export default function Home() {
	return (
		<div className=" overflow-x-hidden">
			{/* lg & xl  */}
			{/* HOME */}
			<div id="home" className="hidden lg:flex xl:flex xl:flex-col lg:flex-col">
				<div className="fixed top-0 w-full  z-50 ">
					<Header />
				</div>

				<div className="hidden md:hidden lg:flex xl:flex xl:items-center relative z-20 md:h-[50vh] lg:h-[50vh] xl:h-[50vh] 2xl:h-[40vh]">
					<div className="absolute -left-32 -top-48">
						<Image
							width={512}
							height={512}
							alt="home"
							style={{ objectFit: "cover" }}
							src={'/liquid_2.png'}
						/>
					</div>
					<div className=" ml-auto max-w-xl md:max-w-md xl:max-w-2xl text-center md:mr-10 lg:mr-25 xl:mr-30 md:mt-30 lg:mt-30">

						<p className={`${poppins.className} md:text[18px] lg:text-[20px] xl:text-[24px]`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at feugiat est, ut tincidunt arcu. Quisque hendrerit a risus ultricies.

						</p>
					</div>
				</div>
				<div className="hidden relative lg:block xl:block lg:h-[50vh] xl:h-[50vh] 2xl:h-[40vh] ">

					<div className=" hidden lg:block xl:block left-16 bottom-0 absolute">
						<p className={`${poppins.className} text-[20px] xl:text-[24px] ml-auto max-w-md text-center italic`}>&quot;Aenean elementum turpis felis, at convallis leo dictum at. Fusce.&quot;

						</p>
						<Image
							src="/undraw_business-analytics.png"
							alt="Example Image"
							width={400} // Set desired width
							height={(820 / 1394) * 400} // Calculate height dynamically to maintain aspect ratio
						/>
					</div>

					<div className="hidden lg:block xl:block absolute -right-64">
						<Image
							width={700}
							height={700}
							alt="home"
							style={{ objectFit: "cover" }}
							src={'/liquid.png'}
						/>
					</div>
				</div>
			</div>
			{/* ABOUT */}
			<div id="about" className="hidden p-16 lg:block relative lg:h-auto z-20 2xl:h-auto ">
				<AboutUs />
			</div>
			{/* PRICING */}
			<div id="pricing" className="hidden p-16 lg:block relative lg:h-auto z-20 2xl:h-auto">
				<div className="py-2.5">
					<p className="text-lg">Kelola bisnis lebih mudah dengan pencatatan otomatis, analisis grafik, dan AI prediksi. Pilih paket terbaik dan optimalkan bisnis Anda!</p>
				</div>
				<div className="hidden max-w-sm mx-auto lg:grid xl:grid gap-6 lg:grid-cols-3 items-start lg:max-w-none">
					{
						subscriptionTiers.map((x, y) => (

							<PricingTab key={y} title={x.tier} price={x.price} description={x.description} features={x.features} />
						))
					}

				</div>
			</div>
			{/* CONTACTUS */}
			<div id="contactus" className="hidden px-16 lg:block relative lg:h-auto z-20 2xl:h-auto ">
				<ContactUs />
			</div>

			{/* ---------------------------------------------------------------------- */}
			<div>
				<div className="fixed left-0 right-0 top-0 z-20">
					<HeaderMobile />
				</div>

				{/* MOBILE */}
				{/* HOME */}
				<div className="md:hidden xl:hidden lg:hidden pt-7 relative overflow-x-hidden">
					<div id="homemob" className="absolute -left-32 -top-50">
						<Image
							width={400}
							height={400}
							alt="home"
							style={{ objectFit: "cover" }}
							src={'/liquid_2.png'}
						/>
					</div>
					<div className="absolute -right-20 top-60 z-10">
						<Image
							width={200}
							height={200}
							alt="home"
							style={{ objectFit: "cover" }}
							src={'/liquid.png'}
						/>
					</div>
					<div className="p-4 z-10 relative">

						<p className={`${poppins.className} text-center`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at feugiat est, ut tincidunt arcu. Quisque hendrerit a risus ultricies.

						</p>
					</div>
					<div className="flex items-center justify-center py-8 relative z-0">
						<Image
							src="/undraw_business-analytics.png"
							alt="Example Image"
							width={300} // Set desired width
							height={(820 / 1394) * 300} // Calculate height dynamically to maintain aspect ratio
						/>
					</div>
					<div className="relative z-10 mb-10">

						<p className={`${poppins.className} text-center`}>&quot;Aenean elementum turpis felis, at convallis leo dictum at. Fusce.&quot;

						</p>
					</div>
					{/* About */}
					<div id="aboutmob" className="flex flex-col gap-4 px-4">
						<AboutUs />
					</div>
					{/* PRICING */}
					<div id="pricemob" className="flex flex-col gap-4 px-4 pt-4">
						<div>
							<p className="text-center">Kelola bisnis lebih mudah dengan pencatatan otomatis, analisis grafik, dan AI prediksi. Pilih paket terbaik dan optimalkan bisnis Anda!</p>
						</div>
						{
							subscriptionTiers.map((x, y) => (

								<PricingTab key={y} title={x.tier} price={x.price} description={x.description} features={x.features} />
							))
						}

					</div>
					{/* CONTACTUS */}
					<div id="contactusmob" className="flex flex-col gap-4 px-4 pt-4">
						<ContactUs />
					</div>

				</div>
				{/* ---------------------------------------------------------------------- */}
				{/* TAB */}
				{/* HOME */}
				<div id="hometab" className="hidden md:flex md:flex-col lg:hidden xl:hidden relative md:h-[50vh]">
					<div className="flex flex-1 ">
						<div className="absolute -left-32 -top-50">
							<Image
								width={400}
								height={400}
								alt="home"
								style={{ objectFit: "cover" }}
								src={'/liquid_2.png'}
							/>
						</div>
						<div className=" ml-auto max-w-xl md:max-w-sm text-center md:mr-10 flex items-center">

							<p className={`${poppins.className} md:text[18px] lg:text-[20px] xl:text-[24px]`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at feugiat est, ut tincidunt arcu. Quisque hendrerit a risus ultricies.

							</p>
						</div>
					</div>
					<div className="flex flex-1 ">
						<div className=" hidden md:flex lg:hidden xl:hidden justify-center flex-col items-center  z-10">
							<p className={`${poppins.className} text-[18px]  ml-auto max-w-md text-center italic`}>&quot;Aenean elementum turpis felis, at convallis leo dictum at. Fusce.&quot;

							</p>
							<Image
								src="/undraw_business-analytics.png"
								alt="Example Image"
								width={200} // Set desired width
								height={(820 / 1394) * 200} // Calculate height dynamically to maintain aspect ratio
							/>
						</div>

						<div className="hidden md:block lg:hidden xl:hidden absolute -right-40">
							<Image
								width={500}
								height={500}
								alt="home"
								style={{ objectFit: "cover" }}
								src={'/liquid.png'}
							/>
						</div>
					</div>

				</div>
				{/* ABOUT */}
				<div id="abouttab" className="hidden md:flex md:flex-col lg:hidden xl:hidden relative p-8  gap-4">
					<AboutUs />
				</div>
				{/* PRICING */}
				<div id="pricingtab" className="hidden md:flex md:flex-col lg:hidden xl:hidden relative p-8  gap-4">
					<div>
						<p>Kelola bisnis lebih mudah dengan pencatatan otomatis, analisis grafik, dan AI prediksi. Pilih paket terbaik dan optimalkan bisnis Anda!</p>
					</div>
					<div className="flex flex-col gap-4">
						{
							subscriptionTiers.map((x, y) => (

								<PricingTab key={y} title={x.tier} price={x.price} description={x.description} features={x.features} />
							))
						}

					</div>
				</div>
				{/* CONTACTUS */}
				<div id="contactustab" className="hidden md:flex md:flex-col lg:hidden xl:hidden relative p-8  gap-4">
					<ContactUs />
				</div>
				{/* <div className="hidden md:flex md:flex-col lg:hidden xl:hidden relative md:h-[50vh]">
					aaa
				</div> */}

			</div>
		</div>
	);
}

