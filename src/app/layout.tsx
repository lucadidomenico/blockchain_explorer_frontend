import type { Metadata } from "next";
import { fonts } from "./fonts";
import { Providers } from "./providers";
import "./globals.css";

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
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}