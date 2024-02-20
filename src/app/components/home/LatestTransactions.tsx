import { Divider, Flex, Grid, Heading, Text } from "@chakra-ui/react";
import TransactionInfo from "./latestTransactionsItems/txInfo";

const LatestTransactions = () => {
	const txInfo = [1, 2, 3, 4, 5];
	return (
		<Flex
			direction={"column"}
			border="1px solid #E2E8F0"
			borderRadius="md"
			mt={4}
			ml={{ base: 2, lg: 2 }}
			mr={{ base: 2, lg: 0 }}
			w={{ md: "50%" }}
		>
			<Flex align="center" justify="start" p={2}>
				<Heading as="h2" size="md">
					Latest Transactions
				</Heading>
			</Flex>
			<Divider />
			<Flex direction={"column"} p={2}>
				{txInfo.map((tx) => (
					<>
						<TransactionInfo key={tx} />
						<Divider />
					</>
				))}
			</Flex>
		</Flex>
	);
};

export default LatestTransactions;
