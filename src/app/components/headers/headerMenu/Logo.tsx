"use client";
import React from "react";
import { Box, Text, BoxProps } from "@chakra-ui/react";
import { Image } from "@chakra-ui/next-js";

export default function Logo(props: BoxProps) {
	return (
		<Box {...props}>
			<Image
				src="https://etherscan.io/assets/svg/logos/logo-etherscan.svg"
				width={150}
				height={50}
				alt="Etherscan Logo"
			/>
		</Box>
	);
}
