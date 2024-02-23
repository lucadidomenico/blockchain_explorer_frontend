import { Button, Card, CardBody, Divider, Flex } from "@chakra-ui/react";
import { AddressDetailsHeader } from "../headers/addressDetails/addressDetailsHeader";
import { CardBodyItem } from "./cardBodyItem";
import { TxsTable } from "./txsTable";

const items = [
	{
		heading: "Overview",
		items: [
			{
				title: "ETH Balance:",
				value: "46.546065361427201797 ETH",
			},
			{
				title: "ETH Value:",
				value: "$136,231.70 (@ $2,926.81/ETH)",
			},
		],
	},
	{
		heading: "More Info",
		items: [
			{
				title: "LAST TXN SENT:",
				value: "0x6bb9644df464f9e5162bdf31577db357c5... from 42 secs ago",
			},
			{
				title: "FIRST TXN SENT:",
				value: "0xb8a5011c0fbefc4050e2bf628155ea7a0a... from 63 days 9 hrs ago",
			},
		],
	},
];

export const AddressDetailsPage = () => {
	return (
		<Flex
			px={{ base: 2, lg: 40 }}
			direction="column"
			gap={4}
			backgroundColor="linear-gradient(#FAFBFD, #FFFFFF)"
			minH="100vh"
		>
			<AddressDetailsHeader />
			<Divider orientation="horizontal" />
			<Flex
				direction={{ base: "column", md: "row" }}
				gap={2}
				justifyItems={"stretch"}
			>
				{items.map((item, index) => {
					return (
						<CardBodyItem
							key={index}
							items={item.items}
							heading={item.heading}
							width={{ base: "100%", md: `${100 / items.length}%` }}
						/>
					);
				})}
			</Flex>
			<Flex
				direction="row"
				gap={3}
				overflowX={{ base: "scroll", md: "hidden" }}
				whiteSpace="nowrap"
				pb={2}
			>
				<Button minWidth="auto">Transactions</Button>
				<Button minWidth="auto">Token Transfers (ERC-20)</Button>
				<Button minWidth="auto">NFT Transfers</Button>
				<Button minWidth="auto">Analytics</Button>
				<Button minWidth="auto">Multichain Portfolio</Button>
			</Flex>
			<Card>
				<CardBody>
					<TxsTable />
				</CardBody>
			</Card>
		</Flex>
	);
};
