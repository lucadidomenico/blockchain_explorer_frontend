"use client";
import React from "react";
import { Button, Flex, Spacer, Stack } from "@chakra-ui/react";
import Logo from "./Logo";
import { MenuLinks } from "./MenuLinks";
import { useMediaQuery } from "@chakra-ui/react";
import { RxHamburgerMenu } from "react-icons/rx";

export const Header = () => {
	const [isOpen, setIsOpen] = React.useState(false);
	const [isLargerThan64] = useMediaQuery("(min-width: 64em)");
	const toggle = () => setIsOpen(!isOpen);

	return (
		<Flex
			w={"100%"}
			p={2}
			direction={{ base: "column", md: "row" }}
			align="center"
			pl={{ base: 2, lg: 40 }}
			pr={{ base: 2, lg: 40 }}
		>
			<Flex w="100%" justify="space-between">
				<Logo />
				{!isLargerThan64 && (
					<Button onClick={toggle}>
						<RxHamburgerMenu />
					</Button>
				)}
			</Flex>
			{isLargerThan64 ? (
				<Stack
					direction={{ base: "column", md: "row" }}
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
