import {
	Button,
	Card,
	CardBody,
	Divider,
	Flex,
	Heading,
	Text,
} from "@chakra-ui/react";
import { BlockDetailsItem } from "./blockDetailsItem";
import { BlockDetailsHeader } from "../headers/blockDetails/blockDetailsHeader";

const items = [
	{
		description:
			"Also known as Block Number. The block height, which indicates the length of the blockchain, increases after the addition of the new block.",
		title: "Block Heigth:",
		value: "19269182",
	},
	{
		description: "The finality status of the block.",
		title: "Status:",
		value: "Finalized",
	},
	{
		description: "The date and time at which a block is produced.",
		title: "Timestamp:",
		value: "20 secs ago (Feb-20-2024 01:22:35 PM +UTC)",
	},
	{
		description: "Slots and epoch this block is proposed on.",
		title: "Proposed On:",
		value: "Block proposed on slot 8467611, epoch 264612",
	},
	{
		description:
			"The number of transactions in the block. Internal transaction is transactions as a result of contract execution that involves Ether value.",
		title: "Transactions:",
		value:
			"160 transactions and 51 contract internal transactions in this block",
	},
	{
		description: "Number of beacon withdrawals in this block.",
		title: "Withdrawals:",
		value: "16 withdrawals in this block",
	},
	{
		description: "Address receiving fees from transactions in this block.",
		title: "Fee Recipient:",
		value: "rsync-builder  in 12 secs",
	},
	{
		description:
			"For each block, the block producer is rewarded with a finite amount of Ether on top of the fees paid for all transactions in the block.",
		title: "Block Reward:",
		value:
			"0.057255656281623472 ETH (0 + 0.665621571715187604 - 0.608365915433564132)",
	},
	{
		description: "Total difficulty of the chain until this block.",
		title: "Total Difficulty:",
		value: "58,750,003,716,598,352,816,469",
	},
	{
		description:
			"The block size is actually determined by the block's gas limit.",
		title: "Size:",
		value: "105,856 bytes",
	},
	{
		description:
			"The total gas used in the block and its percentage of gas filled in the block.",
		title: "Gas Used:",
		value: "13,611,988 (45.37%)",
	},
	{
		description: "Total gas limit provided by all transactions in the block.",
		title: "Gas Limit:",
		value: "30,000,000",
	},
	{
		description:
			"Post-London Upgrade, this represents the minimum gasUsed multiplier required for a tx to be included in a block.",
		title: "Base Fee Per Gas:",
		value: "0.000000044693391989 ETH (44.693391989 Gwei)",
	},
	{
		description:
			"Post-London Upgrade, this represents the part of the tx fee that is burnt: baseFeePerGas * gasUsed.",
		title: "Burnt Fees:",
		value: "🔥 0.608365915433564132 ETH",
	},
	{
		description:
			"Any data that can be included by the block producer in the block.",
		title: "Extra Data:",
		value: "rsync-builder.xyz (Hex:0x7273796e632d6275696c6465722e78797a)",
	},
];

export const BlockDetailsPage = () => {
	return (
		<Flex
			px={{ base: 2, lg: 40 }}
			direction="column"
			gap={4}
			backgroundColor="#FAFBFD"
		>
			<BlockDetailsHeader />
			<Divider orientation="horizontal" />
			<Flex direction="row" gap={4}>
				<Button>Overview</Button>
				<Button>Consensus Info</Button>
				<Button>MEV Info</Button>
			</Flex>
			<Card>
				<CardBody>
					<Flex gap={5} direction="column">
						{items.map((item, index) => {
							if (index === 5 || index === 9 || index === 14) {
								return (
									<>
										<BlockDetailsItem
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
									<BlockDetailsItem
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
