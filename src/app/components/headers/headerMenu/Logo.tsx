"use client";
import React from "react";
import { Box, Text, BoxProps } from "@chakra-ui/react";
import { Image } from "@chakra-ui/next-js";
import Link from "next/link";

export default function Logo(props: BoxProps) {
	return (
		<Box {...props}>
			<Link href="/">
				<Image
					src="https://etherscan.io/assets/svg/logos/logo-etherscan.svg"
					width={150}
					height={50}
					alt="Etherscan Logo"
				/>
			</Link>
		</Box>
	);
}
