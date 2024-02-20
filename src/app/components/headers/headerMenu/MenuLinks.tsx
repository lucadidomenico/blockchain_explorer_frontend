"use client";
import { Link } from "@chakra-ui/next-js";
import { Box, Flex } from "@chakra-ui/react";
import { FaRegUserCircle } from "react-icons/fa";
import MyMenuItem from "./MyMenuItem";

const blockchainMenuItems = [
	"Transactions",
	"Pending Transactions",
	"Contract Internal Transactions",
	"View Blocks",
	"Forked Blocks (Reorgs)",
];
const tokenMenuItems = ["Top Tokens (ERC20)", "Token Transfers (ERC20)"];
const nftMenuItems = ["Top NFTs", "Token Mints"];
const resourcesMenuItems = [
	"Chart and Stats",
	"Top Statistics",
	"Directory",
	"Newsletter",
];
const devsMenuItems = [
	"API Plans",
	"API Documentation",
	"Code Reader",
	"Bytecode to Opcode",
];

export const MenuLinks = () => {
	return (
		<>
			<Link href="/">Home</Link>
			<MyMenuItem title="Blockchain" items={blockchainMenuItems} divider={3} />
			<MyMenuItem title="Tokens" items={tokenMenuItems} />
			<MyMenuItem title="NFTs" items={nftMenuItems} />
			<MyMenuItem title="Resources" items={resourcesMenuItems} divider={2} />
			<MyMenuItem title="Developers" items={devsMenuItems} divider={2} />
			<Link href="#">
				<Flex align={"center"} gap={2}>
					Sign In <FaRegUserCircle />
				</Flex>
			</Link>
		</>
	);
};
