import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Noterp",
	description: "Noterp",

	manifest: "/manifest.webmanifest",
	// themeColor: "#000000",
	appleWebApp: {
		capable: true,
		statusBarStyle: "black-translucent",
		title: "Noterp",
	},
	icons: {
		icon: "/icons/icon-192.png",
		apple: "/icons/apple-touch-icon.png",
	},
};

export const viewport: Viewport = {
	themeColor: 'black',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<div className="bg-white max-w-[1280px]  mx-auto ">

					{children}
				</div>
			</body>
		</html>
	);
}
