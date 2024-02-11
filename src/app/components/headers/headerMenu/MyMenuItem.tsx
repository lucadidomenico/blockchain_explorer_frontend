"use client";
import { Button } from "@chakra-ui/react";
import {
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	MenuDivider,
} from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa";
import { useDisclosure } from "@chakra-ui/react";
import { Fragment } from "react";

type MyMenuItemProps = {
	title: string;
	items: string[];
	divider?: number;
};

const MyMenuItem = (props: MyMenuItemProps) => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<Menu isOpen={isOpen} onClose={onClose}>
			<MenuButton
				as={Button}
				rightIcon={<FaChevronDown />}
				backgroundColor={"white"}
				onMouseEnter={onOpen}
				onMouseLeave={onClose}
			>
				{props.title}
			</MenuButton>
			<MenuList onMouseEnter={onOpen} onMouseLeave={onClose}>
				{props.items.map((item, index) => (
					<Fragment key={item}>
						{props.divider && props.divider === index ? <MenuDivider /> : null}
						<MenuItem>{item}</MenuItem>
					</Fragment>
				))}
			</MenuList>
		</Menu>
	);
};

export default MyMenuItem;
