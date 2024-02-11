"use client";
import React from "react";
import { Button, Flex, Spacer, Stack } from "@chakra-ui/react";
import Logo from "./Logo";
import { MenuLinks } from "./MenuLinks";
import { useMediaQuery } from "@chakra-ui/react";
import { RxHamburgerMenu } from "react-icons/rx";

export const Header = () => {
	const [isOpen, setIsOpen] = React.useState(false);
	const [isLargerThan48] = useMediaQuery("(min-width: 48em)");
	const toggle = () => setIsOpen(!isOpen);

	return (
		<Flex
			w={"100%"}
			p={2}
			direction={{ base: "column", md: "row" }}
			align="center"
		>
			<Flex w="100%" justify="space-between">
				<Logo />
				{!isLargerThan48 && (
					<Button onClick={toggle}>
						<RxHamburgerMenu />
					</Button>
				)}
			</Flex>
			{isLargerThan48 ? (
				<Stack
					direction={{ base: "column", lg: "row" }}
					spacing="12px"
					align="center"
				>
					<MenuLinks />
				</Stack>
			) : (
				isOpen && (
					<Stack direction={{ base: "column" }} spacing="12px" align="center">
						<MenuLinks />
					</Stack>
				)
			)}
		</Flex>
	);
};
