import { Button, Card, CardBody, Divider, Flex } from "@chakra-ui/react";
import { TxDetailsItem } from "./txDetailsItem";
import { TxDetailsHeader } from "../headers/txDetails/txDetailsHeader";

const items = [
	{
		description:
			"A TxHash or transaction hash is a unique 66-character identifier that is generated whenever a transaction is executed.",
		title: "Transaction Hash:",
		value: "0x106ec7d70e87fe46b7224b74dbf78b2551d585e47106bf16d90e2e92119a7e32",
	},
	{
		description: "The status of the transaction.",
		title: "Status:",
		value: "Success",
	},
	{
		description:
			"Number of the block in which the transaction is recorded. Block confirmations indicate how many blocks have been added since the transaction was produced.",
		title: "Block:",
		value: "19269182",
	},
	{
		description: "The date and time at which a transaction is produced.",
		title: "Timestamp:",
		value: "1 hr 31 mins ago (Feb-20-2024 01:22:35 PM +UTC)",
	},
	{
		description: "Sponsored banner advertisement.",
		title: "Sponsored:",
		value: "",
	},
	{
		description: "The sending party of the transaction.",
		title: "From:",
		value: "0x1f9090aaE28b8a3dCeaDf281B0F12828e676c326",
	},
	{
		description:
			"The receiving party of the transaction (could be a contract address).",
		title: "To:",
		value: "0x388C818CA8B9251b393131C08a736A67ccB19297",
	},
	{
		description:
			"The value being transacted in Ether and fiat value. Note: You can click the fiat value (if available) to see historical value at the time of transaction.",
		title: "Value:",
		value: "0.059878155806760918 ETH",
	},
	{
		description:
			"Amount paid to process the transaction in Ether and fiat value.",
		title: "Transaction Fee:",
		value: "0.000988215590268779 ETH",
	},
	{
		description:
			"Cost per unit of gas spent for the transaction, in Ether and Gwei.",
		title: "Gas Price:",
		value: "44.693391989 Gwei (0.000000044693391989 ETH)",
	},
];

export const TxDetailsPage = () => {
	return (
		<Flex
			px={{ base: 2, lg: 40 }}
			direction="column"
			gap={4}
			background="linear-gradient(#FAFBFD, #FFFFFF)"
			minH="100vh"
		>
			<TxDetailsHeader />
			<Divider orientation="horizontal" />
			<Flex direction="row" gap={4}>
				<Button>Overview</Button>
				<Button>Logs</Button>
				<Button>State</Button>
			</Flex>
			<Card>
				<CardBody>
					<Flex gap={5} direction="column">
						{items.map((item, index) => {
							if (index === 3 || index === 4 || index === 6) {
								return (
									<>
										<TxDetailsItem
											key={index}
											description={item.description}
											title={item.title}
											value={item.value}
										/>
										<Divider orientation="horizontal" />
									</>
								);
							} else {
								return (
									<TxDetailsItem
										key={index}
										description={item.description}
										title={item.title}
										value={item.value}
									/>
								);
							}
						})}
					</Flex>
				</CardBody>
			</Card>
		</Flex>
	);
};
