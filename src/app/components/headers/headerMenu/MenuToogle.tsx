"use client";
import React from "react";
import { Box } from "@chakra-ui/react";
import { IoMdClose, IoMdMenu } from "react-icons/io";

type MenuToggleProps = {
	toggle: () => void;
	isOpen: boolean;
};

export const MenuToggle = ({ toggle, isOpen }: MenuToggleProps) => {
	return (
		<Box display={{ base: "block", md: "none" }} onClick={toggle}>
			{isOpen ? <IoMdClose /> : <IoMdMenu />}
		</Box>
	);
};
