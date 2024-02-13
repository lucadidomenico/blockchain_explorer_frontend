import { Flex, Grid, Heading, Text } from "@chakra-ui/react";
import { FaReceipt } from "react-icons/fa";

const TransactionInfo = () => {
	return (
		<Grid templateColumns="0.5fr 1fr 2fr 1fr" gap={2} p={2}>
			<Flex align="center" justify="center">
				<FaReceipt size="1.5em" />
			</Flex>
			<Flex direction={"column"}>
				<Heading as="h4" size="sm">
					0x643287462...
				</Heading>
				<Text>Time</Text>
			</Flex>
			<Flex direction={"column"}>
				<Text>From $address</Text>
				<Text>To $address</Text>
			</Flex>
			<Flex direction={"column"} align="center" justify="center" h="100%">
				<Text>12.324 ETH</Text>
			</Flex>
		</Grid>
	);
};

export default TransactionInfo;
