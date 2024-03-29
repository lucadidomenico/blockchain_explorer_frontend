import type { Metadata } from "next";
import { fonts } from "./fonts";
import { Providers } from "./providers";
import "./globals.css";
import { EthereumPrice } from "./components/headers/ethPrice/EthereumPrice";
import { Box } from "@chakra-ui/react";
import { Header } from "./components/headers/headerMenu/Header";
import Footer from "./components/footer/Footer";

export const metadata: Metadata = {
	title: "Blockchain Explorer",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={fonts.inter.variable}>
			<body>
				<Providers>
					<EthereumPrice />
					<Box pt={{ base: "70px", md: "70px" }} mb={200}>
						<Header />
						{children}
					</Box>
					<Footer />
				</Providers>
			</body>
		</html>
	);
}
