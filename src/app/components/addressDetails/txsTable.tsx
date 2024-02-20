import {
	Table,
	Thead,
	Tbody,
	Tfoot,
	Tr,
	Th,
	Td,
	TableCaption,
	TableContainer,
} from "@chakra-ui/react";

const rows = [
	{
		txhash: "0x123",
		method: "Transfer",
		block: "12343443",
		age: "2 mins ago",
		from: "0x123",
		to: "0x123",
		value: "0x123",
		txfee: "0.1",
	},
	{
		txhash: "0x123",
		method: "Transfer",
		block: "12343443",
		age: "2 mins ago",
		from: "0x123",
		to: "0x123",
		value: "0x123",
		txfee: "0.1",
	},
	{
		txhash: "0x123",
		method: "Transfer",
		block: "12343443",
		age: "2 mins ago",
		from: "0x123",
		to: "0x123",
		value: "0x123",
		txfee: "0.1",
	},
	{
		txhash: "0x123",
		method: "Transfer",
		block: "12343443",
		age: "2 mins ago",
		from: "0x123",
		to: "0x123",
		value: "0x123",
		txfee: "0.1",
	},
	{
		txhash: "0x123",
		method: "Transfer",
		block: "12343443",
		age: "2 mins ago",
		from: "0x123",
		to: "0x123",
		value: "0x123",
		txfee: "0.1",
	},
	{
		txhash: "0x123",
		method: "Transfer",
		block: "12343443",
		age: "2 mins ago",
		from: "0x123",
		to: "0x123",
		value: "0x123",
		txfee: "0.1",
	},
	{
		txhash: "0x123",
		method: "Transfer",
		block: "12343443",
		age: "2 mins ago",
		from: "0x123",
		to: "0x123",
		value: "0x123",
		txfee: "0.1",
	},
	{
		txhash: "0x123",
		method: "Transfer",
		block: "12343443",
		age: "2 mins ago",
		from: "0x123",
		to: "0x123",
		value: "0x123",
		txfee: "0.1",
	},
	{
		txhash: "0x123",
		method: "Transfer",
		block: "12343443",
		age: "2 mins ago",
		from: "0x123",
		to: "0x123",
		value: "0x123",
		txfee: "0.1",
	},
	{
		txhash: "0x123",
		method: "Transfer",
		block: "12343443",
		age: "2 mins ago",
		from: "0x123",
		to: "0x123",
		value: "0x123",
		txfee: "0.1",
	},
	{
		txhash: "0x123",
		method: "Transfer",
		block: "12343443",
		age: "2 mins ago",
		from: "0x123",
		to: "0x123",
		value: "0x123",
		txfee: "0.1",
	},
	{
		txhash: "0x123",
		method: "Transfer",
		block: "12343443",
		age: "2 mins ago",
		from: "0x123",
		to: "0x123",
		value: "0x123",
		txfee: "0.1",
	},
];

export const TxsTable = () => {
	return (
		<TableContainer>
			<Table variant="simple">
				<TableCaption>Latest Transactions</TableCaption>
				<Thead>
					<Tr>
						<Th>Transaction Hash</Th>
						<Th>Method</Th>
						<Th>Block</Th>
						<Th>Age</Th>
						<Th>From</Th>
						<Th>To</Th>
						<Th>Value</Th>
						<Th>TxFee</Th>
					</Tr>
				</Thead>
				<Tbody>
					{rows.map((row) => {
						return (
							<Tr key={row.txhash}>
								<Td>{row.txhash}</Td>
								<Td>{row.method}</Td>
								<Td>{row.block}</Td>
								<Td>{row.age}</Td>
								<Td>{row.from}</Td>
								<Td>{row.to}</Td>
								<Td>{row.value}</Td>
								<Td>{row.txfee}</Td>
							</Tr>
						);
					})}
				</Tbody>
			</Table>
		</TableContainer>
	);
};
