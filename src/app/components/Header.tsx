"use client";
import React from "react";
import { Flex, Spacer } from "@chakra-ui/react";
import Logo from "./Logo";
import { MenuLinks } from "./MenuLinks";

export const Header = () => {
	const [isOpen, setIsOpen] = React.useState(false);

	const toggle = () => setIsOpen(!isOpen);

	return (
		<Flex w={"100%"} p={2}>
			<Logo />
			<Spacer />
			<MenuLinks />
		</Flex>
	);
};
